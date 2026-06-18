/* ============================================
   data-loader.js
   يحمّل data.json من GitHub ويحدّثه لحظياً
============================================ */

// ⚙️ الإعدادات - غيّرها حسب مشروعك
const CONFIG = {
  // إذا كان الموقع على Netlify + GitHub، اتركها كما هي
  // إذا تريد اختبار محلي، غيّر DATA_URL إلى 'data/data.json'
  DATA_URL: 'data/data.json',
  REFRESH_INTERVAL: 30000, // 30 ثانية
  USE_GITHUB_RAW: false // ضع true إذا تريد استخدام raw.githubusercontent.com
};

// متغيرات عامة
window.appData = null;
window.lastDataHash = null;
window.dataReadyCallbacks = [];

// تحويل كائن إلى hash بسيط للمقارنة
function hashData(obj) {
  try {
    return JSON.stringify(obj);
  } catch (e) {
    return null;
  }
}

// تحميل البيانات
async function loadData(force = false) {
  try {
    const url = CONFIG.DATA_URL + '?t=' + Date.now();
    const res = await fetch(url, { cache: 'no-store' });
    
    if (!res.ok) throw new Error('فشل تحميل البيانات: ' + res.status);
    
    const newData = await res.json();
    const newHash = hashData(newData);
    
    // تحقق من التغيير
    if (force || newHash !== window.lastDataHash) {
      window.appData = newData;
      window.lastDataHash = newHash;
      
      // إطلاق حدث "تم تحديث البيانات"
      window.dispatchEvent(new CustomEvent('data-updated', { detail: newData }));
      
      // تنفيذ الدوال المنتظرة
      window.dataReadyCallbacks.forEach(cb => {
        try { cb(newData); } catch (e) { console.error(e); }
      });
      
      console.log('✅ تم تحديث البيانات في', new Date().toLocaleTimeString('ar-EG'));
    }
    
    return window.appData;
  } catch (err) {
    console.error('❌ خطأ في تحميل البيانات:', err);
    // في حالة الفشل، حاول تحميل من localStorage كاحتياط
    const cached = localStorage.getItem('mta_data_cache');
    if (cached && !window.appData) {
      try {
        window.appData = JSON.parse(cached);
        console.log('📦 تم استخدام البيانات المخزنة محلياً');
      } catch (e) {}
    }
    return window.appData;
  }
}

// حفظ البيانات في localStorage كاحتياط
function cacheData() {
  if (window.appData) {
    try {
      localStorage.setItem('mta_data_cache', JSON.stringify(window.appData));
    } catch (e) {}
  }
}

// دالة انتظار جاهزية البيانات
function whenDataReady(callback) {
  if (window.appData) {
    callback(window.appData);
  } else {
    window.dataReadyCallbacks.push(callback);
  }
}

// تحديث تلقائي
setInterval(() => {
  loadData().then(cacheData);
}, CONFIG.REFRESH_INTERVAL);

// تحميل أولي + تحديث الصفحة عند جاهزية البيانات
document.addEventListener('DOMContentLoaded', () => {
  loadData(true).then(cacheData);
});

// تحديث الصفحة عند تغيير البيانات
window.addEventListener('data-updated', (e) => {
  // إعادة رسم العناصر التي تعتمد على البيانات
  if (typeof renderAll === 'function') {
    renderAll(e.detail);
  }
});
