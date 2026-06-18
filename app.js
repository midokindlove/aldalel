// ============================================
// التطبيق الرئيسي - MTA Commands
// ============================================

// المتغيرات العامة
let currentPage = 'home';
let isAdminLoggedIn = false;
const ADMIN_PASSWORD = '00000';

// ============================================
// التهيئة عند تحميل الصفحة
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initChat();
  initMenuToggle();
  loadPage('home');
});

// ============================================
// نظام التنقل
// ============================================

function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.dataset.page;
      loadPage(page);
      
      // تحديث الحالة النشطة
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      
      // إغلاق القائمة في الموبايل
      document.querySelector('.nav-links').classList.remove('active');
    });
  });
}

// ============================================
// تحميل الصفحات
// ============================================

function loadPage(page) {
  currentPage = page;
  const content = document.getElementById('app-content');
  
  switch(page) {
    case 'home':
      content.innerHTML = renderHomePage();
      break;
    case 'rules':
      content.innerHTML = renderRulesPage();
      break;
    case 'commands':
      content.innerHTML = renderCommandsPage();
      break;
    case 'intros':
      content.innerHTML = renderIntrosPage();
      break;
    case 'chat':
      content.innerHTML = renderChatPage();
      initChatPage();
      break;
    case 'admin':
      content.innerHTML = renderAdminPage();
      initAdminLogin();
      break;
    default:
      content.innerHTML = '<h1>صفحة غير موجودة</h1>';
  }
}

// ============================================
// الصفحة الرئيسية
// ============================================

function renderHomePage() {
  const data = dataManager.data.home;
  
  let shortcutsHtml = data.shortcuts.map(shortcut => {
    if (shortcut.url) {
      return `
        <a href="${shortcut.url}" target="_blank" class="card" style="text-decoration: none; color: inherit;">
          <div style="text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">${shortcut.icon}</div>
            <h3>${shortcut.title}</h3>
          </div>
        </a>
      `;
    } else {
      return `
        <div class="card" onclick="loadPage('${shortcut.page}')" style="cursor: pointer;">
          <div style="text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">${shortcut.icon}</div>
            <h3>${shortcut.title}</h3>
          </div>
        </div>
      `;
    }
  }).join('');
  
  return `
    <div class="page active">
      <h1>🎮 ${data.welcomeMessage}</h1>
      <p style="font-size: 1.2rem; margin-bottom: 2rem; color: #b0b0b0;">
        اكتشف جميع الأوامر والقوانين الخاصة بسيرفر MTA - سان أندرياس
      </p>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
        ${shortcutsHtml}
      </div>
    </div>
  `;
}

// ============================================
// صفحة القوانين
// ============================================

function renderRulesPage() {
  const data = dataManager.data.rules;
  
  let sectionsHtml = data.sections.map(section => `
    <div class="card">
      <h3>${section.title}</h3>
      <ul style="list-style: none; padding: 0;">
        ${section.items.map((item, index) => `
          <li style="padding: 0.5rem; border-bottom: 1px solid rgba(0, 255, 136, 0.1);">
            ✓ ${item}
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
  
  return `
    <div class="page active">
      <h1>📜 قوانين السيرفر</h1>
      <p style="margin-bottom: 2rem; color: #b0b0b0;">
        يرجى قراءة القوانين بعناية قبل اللعب في السيرفر
      </p>
      ${sectionsHtml}
    </div>
  `;
}

// ============================================
// صفحة الأوامر
// ============================================

function renderCommandsPage() {
  const data = dataManager.data.commands;
  
  let sectionsHtml = data.sections.map(section => `
    <div class="card">
      <h3>${section.title}</h3>
      <div>
        ${section.commands.map(cmd => `
          <div class="command-item">
            <div class="command-code">${cmd.command}</div>
            <p style="margin-top: 0.5rem; color: #b0b0b0;">${cmd.description}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
  
  return `
    <div class="page active">
      <h1>⌨️ أوامر السيرفر</h1>
      
      <div class="search-box">
        <input type="text" id="command-search" placeholder="🔍 ابحث عن أمر..." oninput="searchCommands(this.value)">
      </div>
      
      <div id="commands-results">
        ${sectionsHtml}
      </div>
    </div>
  `;
}

// البحث في الأوامر
function searchCommands(query) {
  const results = dataManager.search(query);
  const container = document.getElementById('commands-results');
  
  if (query.trim() === '') {
    container.innerHTML = renderCommandsPage().replace(/<h1>.*?<\/h1>/, '').replace(/<div class="search-box">.*?<\/div>/s, '');
    return;
  }
  
  if (results.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: #b0b0b0;">لا توجد نتائج</p>';
    return;
  }
  
  let html = results.map(result => {
    if (result.type === 'command') {
      return `
        <div class="card">
          <h3>${result.section}</h3>
          <div class="command-item">
            <div class="command-code">${result.data.command}</div>
            <p style="margin-top: 0.5rem; color: #b0b0b0;">${result.data.description}</p>
          </div>
        </div>
      `;
    } else {
      return `
        <div class="card">
          <h3>${result.section}</h3>
          <p>✓ ${result.data}</p>
        </div>
      `;
    }
  }).join('');
  
  container.innerHTML = html;
}

// ============================================
// صفحة الانترو
// ============================================

function renderIntrosPage() {
  const data = dataManager.data.intros;
  
  let imagesHtml = data.images.map(img => `
    <div>
      <img src="${img.url}" alt="${img.caption}">
      <p style="margin-top: 0.5rem; text-align: center; color: #b0b0b0;">${img.caption}</p>
    </div>
  `).join('');
  
  return `
    <div class="page active">
      <h1>🎬 الانترو</h1>
      <p style="margin-bottom: 2rem; color: #b0b0b0;">
        صور الانترو الخاصة بالسيرفر
      </p>
      
      <div class="image-grid">
        ${imagesHtml}
      </div>
    </div>
  `;
}

// ============================================
// صفحة الرد التلقائي الكاملة
// ============================================

function renderChatPage() {
  const autoReplies = dataManager.data.autoReplies;
  
  let repliesListHtml = autoReplies.map(reply => `
    <div class="card" style="margin-bottom: 1rem;">
      <strong style="color: #00ff88;">الكلمات المفتاحية:</strong>
      <p style="margin: 0.5rem 0;">${reply.keywords.join(', ')}</p>
      <strong style="color: #00ff88;">الرد:</strong>
      <p style="margin: 0.5rem 0; color: #e0e0e0;">${reply.reply}</p>
    </div>
  `).join('');
  
  return `
    <div class="page active">
      <h1>🤖 الرد التلقائي</h1>
      <p style="margin-bottom: 2rem; color: #b0b0b0;">
        اسأل المساعد الآلي عن أي شيء وسيرد عليك تلقائياً
      </p>
      
      <!-- واجهة الشات الكاملة -->
      <div class="card" style="height: 500px; display: flex; flex-direction: column;">
        <div id="chat-page-messages" class="chat-messages" style="flex: 1; overflow-y: auto; margin-bottom: 1rem;">
          <div class="chat-message bot">
            أهلاً! أنا المساعد الآلي، كيف يمكنني مساعدتك؟
          </div>
        </div>
        <div style="display: flex; gap: 0.5rem;">
          <input type="text" id="chat-page-input" placeholder="اكتب سؤالك هنا..." style="flex: 1; margin-bottom: 0;">
          <button class="btn" onclick="sendChatPageMessage()">إرسال</button>
        </div>
      </div>
      
      <!-- قائمة الردود التلقائية المتاحة -->
      <div style="margin-top: 3rem;">
        <h2>📋 الردود التلقائية المتاحة</h2>
        <p style="margin-bottom: 1.5rem; color: #b0b0b0;">
          هذه هي الأسئلة التي يمكن للمساعد الآلي الرد عليها:
        </p>
        ${repliesListHtml}
      </div>
    </div>
  `;
}

function initChatPage() {
  const input = document.getElementById('chat-page-input');
  if (input) {
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendChatPageMessage();
      }
    });
  }
}

function sendChatPageMessage() {
  const input = document.getElementById('chat-page-input');
  const message = input.value.trim();
  
  if (!message) return;
  
  addChatPageMessage(message, 'user');
  input.value = '';
  
  // الحصول على الرد التلقائي
  setTimeout(() => {
    const reply = dataManager.getAutoReply(message);
    addChatPageMessage(reply, 'bot');
  }, 500);
}

function addChatPageMessage(text, sender) {
  const messagesContainer = document.getElementById('chat-page-messages');
  const messageDiv = document.createElement('div');
  messageDiv.className = `chat-message ${sender}`;
  messageDiv.textContent = text;
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// ============================================
// نظام الشات العائم
// ============================================

function initChat() {
  const chatToggle = document.getElementById('chat-toggle');
  const chatBox = document.getElementById('chat-box');
  const chatClose = document.getElementById('chat-close');
  const chatSend = document.getElementById('chat-send');
  const chatInput = document.getElementById('chat-input-field');
  
  chatToggle.addEventListener('click', () => {
    chatBox.classList.toggle('hidden');
    if (!chatBox.classList.contains('hidden')) {
      addChatMessage('أهلاً! أنا المساعد الآلي، كيف يمكنني مساعدتك؟', 'bot');
    }
  });
  
  chatClose.addEventListener('click', () => {
    chatBox.classList.add('hidden');
  });
  
  chatSend.addEventListener('click', sendChatMessage);
  
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendChatMessage();
    }
  });
}

function sendChatMessage() {
  const input = document.getElementById('chat-input-field');
  const message = input.value.trim();
  
  if (!message) return;
  
  addChatMessage(message, 'user');
  input.value = '';
  
  // الحصول على الرد التلقائي
  setTimeout(() => {
    const reply = dataManager.getAutoReply(message);
    addChatMessage(reply, 'bot');
  }, 500);
}

function addChatMessage(text, sender) {
  const messagesContainer = document.getElementById('chat-messages');
  const messageDiv = document.createElement('div');
  messageDiv.className = `chat-message ${sender}`;
  messageDiv.textContent = text;
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// ============================================
// قائمة الموبايل
// ============================================

function initMenuToggle() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// ============================================
// لوحة الإدارة
// ============================================

function renderAdminPage() {
  if (!isAdminLoggedIn) {
    return `
      <div class="page active">
        <div class="admin-login">
          <h1>🔐 لوحة الإدارة</h1>
          <p style="margin-bottom: 2rem;">يرجى إدخال كلمة المرور للوصول</p>
          <input type="password" id="admin-password" placeholder="كلمة المرور">
          <button class="btn" onclick="loginAdmin()">دخول</button>
        </div>
      </div>
    `;
  }
  
  return renderAdminDashboard();
}

function initAdminLogin() {
  if (!isAdminLoggedIn) {
    const passwordInput = document.getElementById('admin-password');
    if (passwordInput) {
      passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') loginAdmin();
      });
    }
  }
}

function loginAdmin() {
  const password = document.getElementById('admin-password').value;
  
  if (password === ADMIN_PASSWORD) {
    isAdminLoggedIn = true;
    loadPage('admin');
  } else {
    alert('كلمة المرور غير صحيحة!');
  }
}

function logoutAdmin() {
  isAdminLoggedIn = false;
  loadPage('home');
}

function renderAdminDashboard() {
  return `
    <div class="page active">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
        <h1>⚙️ لوحة الإدارة</h1>
        <button class="btn btn-danger" onclick="logoutAdmin()">خروج</button>
      </div>
      
      <!-- إدارة الصفحة الرئيسية -->
      <div class="admin-section">
        <h2>🏠 الصفحة الرئيسية</h2>
        <div id="shortcuts-manager">
          ${renderShortcutsManager()}
        </div>
        <button class="btn" onclick="showAddShortcutForm()">➕ إضافة اختصار</button>
        <div id="shortcut-form"></div>
      </div>
      
      <!-- إدارة القوانين -->
      <div class="admin-section">
        <h2>📜 القوانين</h2>
        <div id="rules-manager">
          ${renderRulesManager()}
        </div>
        <button class="btn" onclick="showAddRuleSectionForm()">➕ إضافة قسم قوانين</button>
        <div id="rule-section-form"></div>
      </div>
      
      <!-- إدارة الأوامر -->
      <div class="admin-section">
        <h2>⌨️ الأوامر</h2>
        <div id="commands-manager">
          ${renderCommandsManager()}
        </div>
        <button class="btn" onclick="showAddCommandSectionForm()">➕ إضافة قسم أوامر</button>
        <div id="command-section-form"></div>
      </div>
      
      <!-- إدارة الانترو -->
      <div class="admin-section">
        <h2>🎬 الانترو</h2>
        <div id="intros-manager">
          ${renderIntrosManager()}
        </div>
        <button class="btn" onclick="showAddIntroForm()">➕ إضافة انترو</button>
        <div id="intro-form"></div>
      </div>
      
      <!-- إدارة الرد التلقائي -->
      <div class="admin-section">
        <h2>🤖 الرد التلقائي</h2>
        <div id="autoreplies-manager">
          ${renderAutoRepliesManager()}
        </div>
        <button class="btn" onclick="showAddAutoReplyForm()">➕ إضافة رد تلقائي</button>
        <div id="autoreply-form"></div>
      </div>
      
      <!-- أدوات إضافية -->
      <div class="admin-section">
        <h2>🔧 أدوات</h2>
        <button class="btn" onclick="exportData()">📥 تصدير البيانات</button>
        <button class="btn" onclick="document.getElementById('import-file').click()">📤 استيراد البيانات</button>
        <input type="file" id="import-file" style="display: none;" accept=".json" onchange="importData(event)">
        <button class="btn btn-danger" onclick="resetAllData()">🔄 إعادة تعيين كل البيانات</button>
      </div>
    </div>
  `;
}

// ============================================
// إدارة الاختصارات
// ============================================

function renderShortcutsManager() {
  const shortcuts = dataManager.data.home.shortcuts;
  
  if (shortcuts.length === 0) {
    return '<p>لا توجد اختصارات</p>';
  }
  
  return shortcuts.map((shortcut, index) => `
    <div class="card" style="display: flex; justify-content: space-between; align-items: center;">
      <div>
        <strong>${shortcut.icon} ${shortcut.title}</strong>
        <p style="color: #b0b0b0; font-size: 0.9rem;">${shortcut.url || shortcut.page}</p>
      </div>
      <button class="btn btn-danger" onclick="deleteShortcut(${index})">حذف</button>
    </div>
  `).join('');
}

function showAddShortcutForm() {
  const form = document.getElementById('shortcut-form');
  form.innerHTML = `
    <div class="card" style="margin-top: 1rem;">
      <h3>إضافة اختصار جديد</h3>
      <input type="text" id="shortcut-title" placeholder="العنوان">
      <input type="text" id="shortcut-icon" placeholder="الأيقونة (إيموجي)">
      <input type="text" id="shortcut-url" placeholder="الرابط (اختياري)">
      <input type="text" id="shortcut-page" placeholder="الصفحة (اختياري: home, rules, commands, intros, chat)">
      <button class="btn" onclick="addShortcut()">إضافة</button>
      <button class="btn btn-danger" onclick="document.getElementById('shortcut-form').innerHTML = ''">إلغاء</button>
    </div>
  `;
}

function addShortcut() {
  const title = document.getElementById('shortcut-title').value;
  const icon = document.getElementById('shortcut-icon').value;
  const url = document.getElementById('shortcut-url').value;
  const page = document.getElementById('shortcut-page').value;
  
  if (!title || !icon) {
    alert('يرجى إدخال العنوان والأيقونة');
    return;
  }
  
  dataManager.addShortcut(title, url || null, icon);
  if (page && !url) {
    dataManager.data.home.shortcuts[dataManager.data.home.shortcuts.length - 1].page = page;
    dataManager.saveData();
  }
  
  refreshAdminPage();
}

function deleteShortcut(index) {
  if (confirm('هل أنت متأكد من حذف هذا الاختصار؟')) {
    dataManager.deleteShortcut(index);
    refreshAdminPage();
  }
}

// ============================================
// إدارة القوانين
// ============================================

function renderRulesManager() {
  const sections = dataManager.data.rules.sections;
  
  if (sections.length === 0) {
    return '<p>لا توجد أقسام قوانين</p>';
  }
  
  return sections.map(section => `
    <div class="card">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
        <h3>${section.title}</h3>
        <button class="btn btn-danger" onclick="deleteRuleSection('${section.id}')">حذف القسم</button>
      </div>
      
      <ul style="list-style: none; padding: 0;">
        ${section.items.map((item, index) => `
          <li style="display: flex; justify-content: space-between; padding: 0.5rem; border-bottom: 1px solid rgba(0, 255, 136, 0.1);">
            <span>✓ ${item}</span>
            <button class="btn btn-danger" onclick="deleteRuleItem('${section.id}', ${index})">حذف</button>
          </li>
        `).join('')}
      </ul>
      
      <button class="btn" onclick="showAddRuleItemForm('${section.id}')">➕ إضافة قانون</button>
      <div id="rule-item-form-${section.id}"></div>
    </div>
  `).join('');
}

function showAddRuleSectionForm() {
  const form = document.getElementById('rule-section-form');
  form.innerHTML = `
    <div class="card" style="margin-top: 1rem;">
      <h3>إضافة قسم قوانين جديد</h3>
      <input type="text" id="rule-section-title" placeholder="عنوان القسم">
      <button class="btn" onclick="addRuleSection()">إضافة</button>
      <button class="btn btn-danger" onclick="document.getElementById('rule-section-form').innerHTML = ''">إلغاء</button>
    </div>
  `;
}

function addRuleSection() {
  const title = document.getElementById('rule-section-title').value;
  
  if (!title) {
    alert('يرجى إدخال عنوان القسم');
    return;
  }
  
  dataManager.addRuleSection(title);
  refreshAdminPage();
}

function deleteRuleSection(sectionId) {
  if (confirm('هل أنت متأكد من حذف هذا القسم؟')) {
    dataManager.deleteRuleSection(sectionId);
    refreshAdminPage();
  }
}

function showAddRuleItemForm(sectionId) {
  const form = document.getElementById(`rule-item-form-${sectionId}`);
  form.innerHTML = `
    <div style="margin-top: 1rem;">
      <input type="text" id="rule-item-text" placeholder="نص القانون">
      <button class="btn" onclick="addRuleItem('${sectionId}')">إضافة</button>
      <button class="btn btn-danger" onclick="document.getElementById('rule-item-form-${sectionId}').innerHTML = ''">إلغاء</button>
    </div>
  `;
}

function addRuleItem(sectionId) {
  const text = document.getElementById('rule-item-text').value;
  
  if (!text) {
    alert('يرجى إدخال نص القانون');
    return;
  }
  
  dataManager.addRuleItem(sectionId, text);
  refreshAdminPage();
}

function deleteRuleItem(sectionId, index) {
  if (confirm('هل أنت متأكد من حذف هذا القانون؟')) {
    dataManager.deleteRuleItem(sectionId, index);
    refreshAdminPage();
  }
}

// ============================================
// إدارة الأوامر
// ============================================

function renderCommandsManager() {
  const sections = dataManager.data.commands.sections;
  
  if (sections.length === 0) {
    return '<p>لا توجد أقسام أوامر</p>';
  }
  
  return sections.map(section => `
    <div class="card">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
        <h3>${section.title}</h3>
        <button class="btn btn-danger" onclick="deleteCommandSection('${section.id}')">حذف القسم</button>
      </div>
      
      ${section.commands.map((cmd, index) => `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem; border-bottom: 1px solid rgba(0, 255, 136, 0.1);">
          <div>
            <strong class="command-code">${cmd.command}</strong>
            <p style="color: #b0b0b0; font-size: 0.9rem;">${cmd.description}</p>
          </div>
          <button class="btn btn-danger" onclick="deleteCommand('${section.id}', ${index})">حذف</button>
        </div>
      `).join('')}
      
      <button class="btn" onclick="showAddCommandForm('${section.id}')">➕ إضافة أمر</button>
      <div id="command-form-${section.id}"></div>
    </div>
  `).join('');
}

function showAddCommandSectionForm() {
  const form = document.getElementById('command-section-form');
  form.innerHTML = `
    <div class="card" style="margin-top: 1rem;">
      <h3>إضافة قسم أوامر جديد</h3>
      <input type="text" id="command-section-title" placeholder="عنوان القسم">
      <button class="btn" onclick="addCommandSection()">إضافة</button>
      <button class="btn btn-danger" onclick="document.getElementById('command-section-form').innerHTML = ''">إلغاء</button>
    </div>
  `;
}

function addCommandSection() {
  const title = document.getElementById('command-section-title').value;
  
  if (!title) {
    alert('يرجى إدخال عنوان القسم');
    return;
  }
  
  dataManager.addCommandSection(title);
  refreshAdminPage();
}

function deleteCommandSection(sectionId) {
  if (confirm('هل أنت متأكد من حذف هذا القسم؟')) {
    dataManager.deleteCommandSection(sectionId);
    refreshAdminPage();
  }
}

function showAddCommandForm(sectionId) {
  const form = document.getElementById(`command-form-${sectionId}`);
  form.innerHTML = `
    <div style="margin-top: 1rem;">
      <input type="text" id="command-text" placeholder="الأمر (مثال: /help)">
      <input type="text" id="command-description" placeholder="الوصف">
      <button class="btn" onclick="addCommand('${sectionId}')">إضافة</button>
      <button class="btn btn-danger" onclick="document.getElementById('command-form-${sectionId}').innerHTML = ''">إلغاء</button>
    </div>
  `;
}

function addCommand(sectionId) {
  const command = document.getElementById('command-text').value;
  const description = document.getElementById('command-description').value;
  
  if (!command || !description) {
    alert('يرجى إدخال الأمر والوصف');
    return;
  }
  
  dataManager.addCommand(sectionId, command, description);
  refreshAdminPage();
}

function deleteCommand(sectionId, index) {
  if (confirm('هل أنت متأكد من حذف هذا الأمر؟')) {
    dataManager.deleteCommand(sectionId, index);
    refreshAdminPage();
  }
}

// ============================================
// إدارة الانترو
// ============================================

function renderIntrosManager() {
  const images = dataManager.data.intros.images;
  
  if (images.length === 0) {
    return '<p>لا توجد صور انترو</p>';
  }
  
  return images.map(img => `
    <div class="card" style="display: flex; gap: 1rem; align-items: center;">
      <img src="${img.url}" alt="${img.caption}" style="width: 100px; height: 75px; object-fit: cover; border-radius: 5px;">
      <div style="flex: 1;">
        <strong>${img.caption}</strong>
        <p style="color: #b0b0b0; font-size: 0.9rem;">${img.url}</p>
      </div>
      <button class="btn btn-danger" onclick="deleteIntro('${img.id}')">حذف</button>
    </div>
  `).join('');
}

function showAddIntroForm() {
  const form = document.getElementById('intro-form');
  form.innerHTML = `
    <div class="card" style="margin-top: 1rem;">
      <h3>إضافة انترو جديد</h3>
      <input type="text" id="intro-url" placeholder="رابط الصورة">
      <input type="text" id="intro-caption" placeholder="الوصف">
      <button class="btn" onclick="addIntro()">إضافة</button>
      <button class="btn btn-danger" onclick="document.getElementById('intro-form').innerHTML = ''">إلغاء</button>
    </div>
  `;
}

function addIntro() {
  const url = document.getElementById('intro-url').value;
  const caption = document.getElementById('intro-caption').value;
  
  if (!url || !caption) {
    alert('يرجى إدخال رابط الصورة والوصف');
    return;
  }
  
  dataManager.addIntro(url, caption);
  refreshAdminPage();
}

function deleteIntro(introId) {
  if (confirm('هل أنت متأكد من حذف هذه الصورة؟')) {
    dataManager.deleteIntro(introId);
    refreshAdminPage();
  }
}

// ============================================
// إدارة الرد التلقائي
// ============================================

function renderAutoRepliesManager() {
  const replies = dataManager.data.autoReplies;
  
  if (replies.length === 0) {
    return '<p>لا توجد ردود تلقائية</p>';
  }
  
  return replies.map((reply, index) => `
    <div class="card">
      <div style="display: flex; justify-content: space-between; align-items: start;">
        <div style="flex: 1;">
          <strong>الكلمات المفتاحية:</strong>
          <p style="color: #b0b0b0;">${reply.keywords.join(', ')}</p>
          <strong style="margin-top: 0.5rem; display: block;">الرد:</strong>
          <p style="color: #00ff88;">${reply.reply}</p>
        </div>
        <button class="btn btn-danger" onclick="deleteAutoReply(${index})">حذف</button>
      </div>
    </div>
  `).join('');
}

function showAddAutoReplyForm() {
  const form = document.getElementById('autoreply-form');
  form.innerHTML = `
    <div class="card" style="margin-top: 1rem;">
      <h3>إضافة رد تلقائي جديد</h3>
      <input type="text" id="autoreply-keywords" placeholder="الكلمات المفتاحية (مفصولة بفاصلة)">
      <textarea id="autoreply-text" placeholder="الرد" rows="3"></textarea>
      <button class="btn" onclick="addAutoReply()">إضافة</button>
      <button class="btn btn-danger" onclick="document.getElementById('autoreply-form').innerHTML = ''">إلغاء</button>
    </div>
  `;
}

function addAutoReply() {
  const keywordsStr = document.getElementById('autoreply-keywords').value;
  const reply = document.getElementById('autoreply-text').value;
  
  if (!keywordsStr || !reply) {
    alert('يرجى إدخال الكلمات المفتاحية والرد');
    return;
  }
  
  const keywords = keywordsStr.split(',').map(k => k.trim());
  dataManager.addAutoReply(keywords, reply);
  refreshAdminPage();
}

function deleteAutoReply(index) {
  if (confirm('هل أنت متأكد من حذف هذا الرد التلقائي؟')) {
    dataManager.deleteAutoReply(index);
    refreshAdminPage();
  }
}

// ============================================
// أدوات إضافية
// ============================================

function exportData() {
  const data = dataManager.exportData();
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'mta-website-data.json';
  a.click();
  URL.revokeObjectURL(url);
}

function importData(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = (e) => {
    const success = dataManager.importData(e.target.result);
    if (success) {
      alert('تم استيراد البيانات بنجاح!');
      refreshAdminPage();
    } else {
      alert('خطأ في استيراد البيانات!');
    }
  };
  reader.readAsText(file);
}

function resetAllData() {
  if (confirm('هل أنت متأكد من إعادة تعيين كل البيانات؟ سيتم حذف جميع التعديلات!')) {
    dataManager.resetData();
    refreshAdminPage();
    alert('تم إعادة تعيين البيانات بنجاح!');
  }
}

// ============================================
// تحديث الصفحة
// ============================================

function refreshAdminPage() {
  if (currentPage === 'admin' && isAdminLoggedIn) {
    loadPage('admin');
  }
}
