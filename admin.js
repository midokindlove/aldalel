// ============================================
// لوحة الإدارة المحسّنة - MTA Commands
// ============================================

let adminCurrentSection = 'home';

// ============================================
// صفحة الإدارة الرئيسية
// ============================================

function renderAdminPage() {
  if (!isAdminLoggedIn) {
    return renderAdminLogin();
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

function renderAdminLogin() {
  return `
    <div class="page active">
      <div class="admin-login">
        <div style="font-size: 4rem; margin-bottom: 1rem;">🔐</div>
        <h1>لوحة الإدارة</h1>
        <p style="margin-bottom: 2rem; color: #b0b0b0;">
          يرجى إدخال كلمة المرور للوصول إلى لوحة التحكم
        </p>
        <input type="password" id="admin-password" placeholder="كلمة المرور" style="text-align: center;">
        <button class="btn" onclick="loginAdmin()" style="width: 100%;">دخول</button>
      </div>
    </div>
  `;
}

function loginAdmin() {
  const password = document.getElementById('admin-password').value;
  if (password === ADMIN_PASSWORD) {
    isAdminLoggedIn = true;
    loadPage('admin');
  } else {
    alert('❌ كلمة المرور غير صحيحة!');
  }
}

function logoutAdmin() {
  if (confirm('هل تريد تسجيل الخروج؟')) {
    isAdminLoggedIn = false;
    loadPage('home');
  }
}

// ============================================
// لوحة التحكم الرئيسية
// ============================================

function renderAdminDashboard() {
  const stats = getAdminStats();
  
  return `
    <div class="page active">
      <div class="admin-header">
        <div>
          <h1>⚙️ لوحة الإدارة</h1>
          <p style="color: #b0b0b0;">مرحباً بك في لوحة التحكم</p>
        </div>
        <button class="btn btn-danger" onclick="logoutAdmin()">🚪 خروج</button>
      </div>
      
      <!-- الإحصائيات -->
      <div class="admin-stats">
        <div class="stat-card">
          <div class="stat-icon">📜</div>
          <div class="stat-info">
            <div class="stat-number">${stats.rules}</div>
            <div class="stat-label">قوانين</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">⌨️</div>
          <div class="stat-info">
            <div class="stat-number">${stats.commands}</div>
            <div class="stat-label">أوامر</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">🎬</div>
          <div class="stat-info">
            <div class="stat-number">${stats.intros}</div>
            <div class="stat-label">انترو</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">🤖</div>
          <div class="stat-info">
            <div class="stat-number">${stats.autoreplies}</div>
            <div class="stat-label">رد تلقائي</div>
          </div>
        </div>
      </div>
      
      <!-- القائمة الجانبية والمحتوى -->
      <div class="admin-layout">
        <aside class="admin-sidebar">
          <button class="sidebar-btn ${adminCurrentSection === 'home' ? 'active' : ''}" onclick="switchAdminSection('home')">
            🏠 الصفحة الرئيسية
          </button>
          <button class="sidebar-btn ${adminCurrentSection === 'rules' ? 'active' : ''}" onclick="switchAdminSection('rules')">
            📜 القوانين
          </button>
          <button class="sidebar-btn ${adminCurrentSection === 'commands' ? 'active' : ''}" onclick="switchAdminSection('commands')">
            ⌨️ الأوامر
          </button>
          <button class="sidebar-btn ${adminCurrentSection === 'intros' ? 'active' : ''}" onclick="switchAdminSection('intros')">
            🎬 الانترو
          </button>
          <button class="sidebar-btn ${adminCurrentSection === 'autoreplies' ? 'active' : ''}" onclick="switchAdminSection('autoreplies')">
            🤖 الرد التلقائي
          </button>
          <button class="sidebar-btn ${adminCurrentSection === 'tools' ? 'active' : ''}" onclick="switchAdminSection('tools')">
            🔧 الأدوات
          </button>
        </aside>
        
        <main class="admin-content" id="admin-section-content">
          ${renderAdminSection(adminCurrentSection)}
        </main>
      </div>
    </div>
  `;
}

// ============================================
// الإحصائيات
// ============================================

function getAdminStats() {
  return {
    rules: dataManager.data.rules.sections.reduce((sum, s) => sum + s.items.length, 0),
    commands: dataManager.data.commands.sections.reduce((sum, s) => sum + s.commands.length, 0),
    intros: dataManager.data.intros.images.length,
    autoreplies: dataManager.data.autoReplies.length
  };
}

// ============================================
// التنقل بين أقسام الإدارة
// ============================================

function switchAdminSection(section) {
  adminCurrentSection = section;
  document.getElementById('admin-section-content').innerHTML = renderAdminSection(section);
  
  // تحديث الأزرار النشطة
  document.querySelectorAll('.sidebar-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
}

function renderAdminSection(section) {
  switch(section) {
    case 'home': return renderAdminHomeSection();
    case 'rules': return renderAdminRulesSection();
    case 'commands': return renderAdminCommandsSection();
    case 'intros': return renderAdminIntrosSection();
    case 'autoreplies': return renderAdminAutorepliesSection();
    case 'tools': return renderAdminToolsSection();
    default: return '<p>قسم غير موجود</p>';
  }
}

// ============================================
// قسم الصفحة الرئيسية
// ============================================

function renderAdminHomeSection() {
  const shortcuts = dataManager.data.home.shortcuts;
  
  return `
    <div class="admin-panel">
      <div class="panel-header">
        <h2>🏠 الصفحة الرئيسية</h2>
        <button class="btn" onclick="showAddShortcutForm()">➕ إضافة اختصار</button>
      </div>
      
      <div id="shortcut-form"></div>
      
      ${shortcuts.length === 0 ? '<p style="text-align: center; color: #b0b0b0; padding: 2rem;">لا توجد اختصارات</p>' : ''}
      
      <div class="items-list">
        ${shortcuts.map((shortcut, index) => `
          <div class="item-card">
            <div class="item-icon">${shortcut.icon}</div>
            <div class="item-info">
              <strong>${shortcut.title}</strong>
              <small style="color: #b0b0b0;">${shortcut.url || shortcut.page || 'بدون رابط'}</small>
            </div>
            <button class="btn btn-danger btn-sm" onclick="deleteShortcut(${index})">🗑️</button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function showAddShortcutForm() {
  const form = document.getElementById('shortcut-form');
  form.innerHTML = `
    <div class="form-card">
      <h3>إضافة اختصار جديد</h3>
      <input type="text" id="shortcut-title" placeholder="العنوان">
      <input type="text" id="shortcut-icon" placeholder="الأيقونة (إيموجي) مثل: 🎮">
      <input type="text" id="shortcut-url" placeholder="الرابط (اختياري)">
      <input type="text" id="shortcut-page" placeholder="الصفحة (home, rules, commands, intros, chat)">
      <div class="form-actions">
        <button class="btn" onclick="addShortcut()">✅ إضافة</button>
        <button class="btn btn-danger" onclick="document.getElementById('shortcut-form').innerHTML = ''">❌ إلغاء</button>
      </div>
    </div>
  `;
}

function addShortcut() {
  const title = document.getElementById('shortcut-title').value.trim();
  const icon = document.getElementById('shortcut-icon').value.trim();
  const url = document.getElementById('shortcut-url').value.trim();
  const page = document.getElementById('shortcut-page').value.trim();
  
  if (!title || !icon) {
    alert('⚠️ يرجى إدخال العنوان والأيقونة');
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
// قسم القوانين
// ============================================

function renderAdminRulesSection() {
  const sections = dataManager.data.rules.sections;
  
  return `
    <div class="admin-panel">
      <div class="panel-header">
        <h2>📜 القوانين</h2>
        <button class="btn" onclick="showAddRuleSectionForm()">➕ إضافة قسم</button>
      </div>
      
      <div id="rule-section-form"></div>
      
      ${sections.length === 0 ? '<p style="text-align: center; color: #b0b0b0; padding: 2rem;">لا توجد أقسام قوانين</p>' : ''}
      
      ${sections.map(section => `
        <div class="section-card">
          <div class="section-header">
            <h3>${section.title}</h3>
            <div>
              <button class="btn btn-sm" onclick="showAddRuleItemForm('${section.id}')">➕ قانون</button>
              <button class="btn btn-danger btn-sm" onclick="deleteRuleSection('${section.id}')">🗑️ القسم</button>
            </div>
          </div>
          
          <div id="rule-item-form-${section.id}"></div>
          
          <div class="items-list">
            ${section.items.length === 0 ? '<p style="color: #b0b0b0; padding: 1rem;">لا توجد قوانين</p>' : ''}
            ${section.items.map((item, index) => `
              <div class="item-card">
                <div class="item-icon">✓</div>
                <div class="item-info">${item}</div>
                <button class="btn btn-danger btn-sm" onclick="deleteRuleItem('${section.id}', ${index})">🗑️</button>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function showAddRuleSectionForm() {
  const form = document.getElementById('rule-section-form');
  form.innerHTML = `
    <div class="form-card">
      <h3>إضافة قسم قوانين جديد</h3>
      <input type="text" id="rule-section-title" placeholder="عنوان القسم">
      <div class="form-actions">
        <button class="btn" onclick="addRuleSection()">✅ إضافة</button>
        <button class="btn btn-danger" onclick="document.getElementById('rule-section-form').innerHTML = ''">❌ إلغاء</button>
      </div>
    </div>
  `;
}

function addRuleSection() {
  const title = document.getElementById('rule-section-title').value.trim();
  if (!title) {
    alert('⚠️ يرجى إدخال عنوان القسم');
    return;
  }
  dataManager.addRuleSection(title);
  refreshAdminPage();
}

function deleteRuleSection(sectionId) {
  if (confirm('هل أنت متأكد من حذف هذا القسم وجميع قوانينه؟')) {
    dataManager.deleteRuleSection(sectionId);
    refreshAdminPage();
  }
}

function showAddRuleItemForm(sectionId) {
  const form = document.getElementById(`rule-item-form-${sectionId}`);
  form.innerHTML = `
    <div class="form-card" style="margin: 1rem 0;">
      <input type="text" id="rule-item-text" placeholder="نص القانون">
      <div class="form-actions">
        <button class="btn" onclick="addRuleItem('${sectionId}')">✅ إضافة</button>
        <button class="btn btn-danger" onclick="document.getElementById('rule-item-form-${sectionId}').innerHTML = ''">❌ إلغاء</button>
      </div>
    </div>
  `;
}

function addRuleItem(sectionId) {
  const text = document.getElementById('rule-item-text').value.trim();
  if (!text) {
    alert('⚠️ يرجى إدخال نص القانون');
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
// قسم الأوامر
// ============================================

function renderAdminCommandsSection() {
  const sections = dataManager.data.commands.sections;
  
  return `
    <div class="admin-panel">
      <div class="panel-header">
        <h2>⌨️ الأوامر</h2>
        <button class="btn" onclick="showAddCommandSectionForm()">➕ إضافة قسم</button>
      </div>
      
      <div id="command-section-form"></div>
      
      ${sections.length === 0 ? '<p style="text-align: center; color: #b0b0b0; padding: 2rem;">لا توجد أقسام أوامر</p>' : ''}
      
      ${sections.map(section => `
        <div class="section-card">
          <div class="section-header">
            <h3>${section.title}</h3>
            <div>
              <button class="btn btn-sm" onclick="showAddCommandForm('${section.id}')">➕ أمر</button>
              <button class="btn btn-danger btn-sm" onclick="deleteCommandSection('${section.id}')">🗑️ القسم</button>
            </div>
          </div>
          
          <div id="command-form-${section.id}"></div>
          
          <div class="items-list">
            ${section.commands.length === 0 ? '<p style="color: #b0b0b0; padding: 1rem;">لا توجد أوامر</p>' : ''}
            ${section.commands.map((cmd, index) => `
              <div class="item-card">
                <div class="item-icon">⌨️</div>
                <div class="item-info">
                  <strong class="command-code">${cmd.command}</strong>
                  <small style="color: #b0b0b0; display: block;">${cmd.description}</small>
                </div>
                <div>
                  <button class="btn btn-sm" onclick="showEditCommandForm('${section.id}', ${index})">✏️</button>
                  <button class="btn btn-danger btn-sm" onclick="deleteCommand('${section.id}', ${index})">🗑️</button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function showAddCommandSectionForm() {
  const form = document.getElementById('command-section-form');
  form.innerHTML = `
    <div class="form-card">
      <h3>إضافة قسم أوامر جديد</h3>
      <input type="text" id="command-section-title" placeholder="عنوان القسم">
      <div class="form-actions">
        <button class="btn" onclick="addCommandSection()">✅ إضافة</button>
        <button class="btn btn-danger" onclick="document.getElementById('command-section-form').innerHTML = ''">❌ إلغاء</button>
      </div>
    </div>
  `;
}

function addCommandSection() {
  const title = document.getElementById('command-section-title').value.trim();
  if (!title) {
    alert('⚠️ يرجى إدخال عنوان القسم');
    return;
  }
  dataManager.addCommandSection(title);
  refreshAdminPage();
}

function deleteCommandSection(sectionId) {
  if (confirm('هل أنت متأكد من حذف هذا القسم وجميع أوامره؟')) {
    dataManager.deleteCommandSection(sectionId);
    refreshAdminPage();
  }
}

function showAddCommandForm(sectionId) {
  const form = document.getElementById(`command-form-${sectionId}`);
  form.innerHTML = `
    <div class="form-card" style="margin: 1rem 0;">
      <input type="text" id="command-text" placeholder="الأمر (مثال: /help)">
      <input type="text" id="command-description" placeholder="الوصف">
      <div class="form-actions">
        <button class="btn" onclick="addCommand('${sectionId}')">✅ إضافة</button>
        <button class="btn btn-danger" onclick="document.getElementById('command-form-${sectionId}').innerHTML = ''">❌ إلغاء</button>
      </div>
    </div>
  `;
}

function addCommand(sectionId) {
  const command = document.getElementById('command-text').value.trim();
  const description = document.getElementById('command-description').value.trim();
  
  if (!command || !description) {
    alert('⚠️ يرجى إدخال الأمر والوصف');
    return;
  }
  
  dataManager.addCommand(sectionId, command, description);
  refreshAdminPage();
}

function showEditCommandForm(sectionId, index) {
  const section = dataManager.data.commands.sections.find(s => s.id === sectionId);
  if (!section) return;
  
  const cmd = section.commands[index];
  const form = document.getElementById(`command-form-${sectionId}`);
  form.innerHTML = `
    <div class="form-card" style="margin: 1rem 0;">
      <h3>تعديل الأمر</h3>
      <input type="text" id="command-text-edit" value="${cmd.command}" placeholder="الأمر">
      <input type="text" id="command-description-edit" value="${cmd.description}" placeholder="الوصف">
      <div class="form-actions">
        <button class="btn" onclick="editCommand('${sectionId}', ${index})">✅ حفظ</button>
        <button class="btn btn-danger" onclick="document.getElementById('command-form-${sectionId}').innerHTML = ''">❌ إلغاء</button>
      </div>
    </div>
  `;
}

function editCommand(sectionId, index) {
  const command = document.getElementById('command-text-edit').value.trim();
  const description = document.getElementById('command-description-edit').value.trim();
  
  if (!command || !description) {
    alert('⚠️ يرجى إدخال الأمر والوصف');
    return;
  }
  
  dataManager.editCommand(sectionId, index, command, description);
  refreshAdminPage();
}

function deleteCommand(sectionId, index) {
  if (confirm('هل أنت متأكد من حذف هذا الأمر؟')) {
    dataManager.deleteCommand(sectionId, index);
    refreshAdminPage();
  }
}

// ============================================
// قسم الانترو
// ============================================

function renderAdminIntrosSection() {
  const images = dataManager.data.intros.images;
  
  return `
    <div class="admin-panel">
      <div class="panel-header">
        <h2>🎬 الانترو</h2>
        <button class="btn" onclick="showAddIntroForm()">➕ إضافة انترو</button>
      </div>
      
      <div id="intro-form"></div>
      
      ${images.length === 0 ? '<p style="text-align: center; color: #b0b0b0; padding: 2rem;">لا توجد صور انترو</p>' : ''}
      
      <div class="items-list">
        ${images.map(img => `
          <div class="item-card">
            <img src="${img.url}" alt="${img.caption}" class="item-image">
            <div class="item-info">
              <strong>${img.caption}</strong>
              <small style="color: #b0b0b0; word-break: break-all;">${img.url}</small>
            </div>
            <button class="btn btn-danger btn-sm" onclick="deleteIntro('${img.id}')">🗑️</button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function showAddIntroForm() {
  const form = document.getElementById('intro-form');
  form.innerHTML = `
    <div class="form-card">
      <h3>إضافة انترو جديد</h3>
      <input type="text" id="intro-url" placeholder="رابط الصورة">
      <input type="text" id="intro-caption" placeholder="الوصف">
      <div class="form-actions">
        <button class="btn" onclick="addIntro()">✅ إضافة</button>
        <button class="btn btn-danger" onclick="document.getElementById('intro-form').innerHTML = ''">❌ إلغاء</button>
      </div>
    </div>
  `;
}

function addIntro() {
  const url = document.getElementById('intro-url').value.trim();
  const caption = document.getElementById('intro-caption').value.trim();
  
  if (!url || !caption) {
    alert('⚠️ يرجى إدخال رابط الصورة والوصف');
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
// قسم الرد التلقائي
// ============================================

function renderAdminAutorepliesSection() {
  const replies = dataManager.data.autoReplies;
  
  return `
    <div class="admin-panel">
      <div class="panel-header">
        <h2>🤖 الرد التلقائي</h2>
        <button class="btn" onclick="showAddAutoReplyForm()">➕ إضافة رد</button>
      </div>
      
      <div id="autoreply-form"></div>
      
      ${replies.length === 0 ? '<p style="text-align: center; color: #b0b0b0; padding: 2rem;">لا توجد ردود تلقائية</p>' : ''}
      
      <div class="items-list">
        ${replies.map((reply, index) => `
          <div class="item-card item-card-vertical">
            <div class="item-info">
              <strong style="color: #00ff88;">🔑 الكلمات المفتاحية:</strong>
              <p style="color: #b0b0b0; margin: 0.25rem 0;">${reply.keywords.join(', ')}</p>
              <strong style="color: #00ff88;">💬 الرد:</strong>
              <p style="margin: 0.25rem 0;">${reply.reply}</p>
            </div>
            <button class="btn btn-danger btn-sm" onclick="deleteAutoReply(${index})">🗑️</button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function showAddAutoReplyForm() {
  const form = document.getElementById('autoreply-form');
  form.innerHTML = `
    <div class="form-card">
      <h3>إضافة رد تلقائي جديد</h3>
      <input type="text" id="autoreply-keywords" placeholder="الكلمات المفتاحية (مفصولة بفاصلة)">
      <textarea id="autoreply-text" placeholder="الرد" rows="3"></textarea>
      <div class="form-actions">
        <button class="btn" onclick="addAutoReply()">✅ إضافة</button>
        <button class="btn btn-danger" onclick="document.getElementById('autoreply-form').innerHTML = ''">❌ إلغاء</button>
      </div>
    </div>
  `;
}

function addAutoReply() {
  const keywordsStr = document.getElementById('autoreply-keywords').value.trim();
  const reply = document.getElementById('autoreply-text').value.trim();
  
  if (!keywordsStr || !reply) {
    alert('⚠️ يرجى إدخال الكلمات المفتاحية والرد');
    return;
  }
  
  const keywords = keywordsStr.split(',').map(k => k.trim()).filter(k => k);
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
// قسم الأدوات
// ============================================

function renderAdminToolsSection() {
  return `
    <div class="admin-panel">
      <div class="panel-header">
        <h2>🔧 الأدوات</h2>
      </div>
      
      <div class="tools-grid">
        <div class="tool-card">
          <div style="font-size: 3rem;">📥</div>
          <h3>تصدير البيانات</h3>
          <p style="color: #b0b0b0;">تحميل نسخة احتياطية من جميع البيانات</p>
          <button class="btn" onclick="exportData()">تصدير</button>
        </div>
        
        <div class="tool-card">
          <div style="font-size: 3rem;">📤</div>
          <h3>استيراد البيانات</h3>
          <p style="color: #b0b0b0;">استعادة البيانات من ملف</p>
          <button class="btn" onclick="document.getElementById('import-file').click()">استيراد</button>
          <input type="file" id="import-file" style="display: none;" accept=".json" onchange="importData(event)">
        </div>
        
        <div class="tool-card">
          <div style="font-size: 3rem;">🔄</div>
          <h3>إعادة تعيين</h3>
          <p style="color: #b0b0b0;">حذف جميع البيانات والعودة للافتراضي</p>
          <button class="btn btn-danger" onclick="resetAllData()">إعادة تعيين</button>
        </div>
      </div>
    </div>
  `;
}

// ============================================
// أدوات البيانات
// ============================================

function exportData() {
  const data = dataManager.exportData();
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'mta-website-data-' + new Date().toISOString().split('T')[0] + '.json';
  a.click();
  URL.revokeObjectURL(url);
  alert('✅ تم تصدير البيانات بنجاح!');
}

function importData(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = (e) => {
    if (confirm('⚠️ سيتم استبدال جميع البيانات الحالية. هل أنت متأكد؟')) {
      const success = dataManager.importData(e.target.result);
      if (success) {
        alert('✅ تم استيراد البيانات بنجاح!');
        refreshAdminPage();
      } else {
        alert('❌ خطأ في استيراد البيانات!');
      }
    }
  };
  reader.readAsText(file);
}

function resetAllData() {
  if (confirm('⚠️ هل أنت متأكد من إعادة تعيين كل البيانات؟ سيتم حذف جميع التعديلات نهائياً!')) {
    if (confirm('⚠️ تأكيد أخير: هذه العملية لا يمكن التراجع عنها!')) {
      dataManager.resetData();
      refreshAdminPage();
      alert('✅ تم إعادة تعيين البيانات بنجاح!');
    }
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
