// ============================================
// الدليل - لوحة الإدارة الكاملة
// MTA Commands Guide - Admin Panel
// ============================================

let adminCurrentSection = 'home';
let adminCurrentTab = 'all';
let adminSearchQuery = '';
const ADMIN_PASSWORD = '00000';
let isAdminLoggedIn = false;

// ============================================
// التهيئة وتسجيل الدخول
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
      passwordInput.focus();
      passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') loginAdmin();
      });
    }
  }
}

function renderAdminLogin() {
  return `
    <div class="admin-login">
      <h1>🔐 لوحة الإدارة</h1>
      <p>يرجى إدخال كلمة المرور للوصول إلى لوحة التحكم</p>
      <input type="password" id="admin-password" placeholder="كلمة المرور">
      <button class="btn" onclick="loginAdmin()" style="width: 100%;">دخول</button>
    </div>
  `;
}

function loginAdmin() {
  const password = document.getElementById('admin-password').value;
  if (password === ADMIN_PASSWORD) {
    isAdminLoggedIn = true;
    adminCurrentSection = 'home';
    adminCurrentTab = 'all';
    adminSearchQuery = '';
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
  return `
    <div class="admin-topbar">
      <div>
        <h2 style="margin: 0; font-size: 1.4rem;">⚙️ لوحة الإدارة</h2>
        <p style="color: var(--text-secondary); margin: 0.25rem 0 0 0; font-size: 0.9rem;">مرحباً بك في لوحة التحكم</p>
      </div>
      <button class="btn btn-danger btn-sm" onclick="logoutAdmin()">🚪 خروج</button>
    </div>
    
    <div class="admin-layout">
      <aside class="admin-sidebar">
        <div class="sidebar-title">الأقسام</div>
        <button class="sidebar-btn ${adminCurrentSection === 'home' ? 'active' : ''}" onclick="switchAdminSection('home')">
          <span class="sidebar-icon"></span>
          <span>الرئيسية</span>
        </button>
        <button class="sidebar-btn ${adminCurrentSection === 'commands' ? 'active' : ''}" onclick="switchAdminSection('commands')">
          <span class="sidebar-icon">⌨️</span>
          <span>الأوامر</span>
        </button>
        <button class="sidebar-btn ${adminCurrentSection === 'rules' ? 'active' : ''}" onclick="switchAdminSection('rules')">
          <span class="sidebar-icon">📜</span>
          <span>القوانين</span>
        </button>
        <button class="sidebar-btn ${adminCurrentSection === 'intros' ? 'active' : ''}" onclick="switchAdminSection('intros')">
          <span class="sidebar-icon">🎬</span>
          <span>الانترو</span>
        </button>
        <button class="sidebar-btn ${adminCurrentSection === 'autoreplies' ? 'active' : ''}" onclick="switchAdminSection('autoreplies')">
          <span class="sidebar-icon">🤖</span>
          <span>الرد التلقائي</span>
        </button>
        <button class="sidebar-btn ${adminCurrentSection === 'tools' ? 'active' : ''}" onclick="switchAdminSection('tools')">
          <span class="sidebar-icon">🔧</span>
          <span>الأدوات</span>
        </button>
      </aside>
      
      <main class="admin-content" id="admin-section-content">
        ${renderAdminSection(adminCurrentSection)}
      </main>
    </div>
  `;
}

function switchAdminSection(section) {
  adminCurrentSection = section;
  adminCurrentTab = 'all';
  adminSearchQuery = '';
  
  const content = document.getElementById('admin-section-content');
  if (content) {
    content.innerHTML = renderAdminSection(section);
  }
  
  document.querySelectorAll('.sidebar-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.querySelector(`.sidebar-btn[onclick="switchAdminSection('${section}')"]`);
  if (activeBtn) activeBtn.classList.add('active');
}

function renderAdminSection(section) {
  switch(section) {
    case 'home': return renderAdminHomeSection();
    case 'commands': return renderAdminCommandsSection();
    case 'rules': return renderAdminRulesSection();
    case 'intros': return renderAdminIntrosSection();
    case 'autoreplies': return renderAdminAutorepliesSection();
    case 'tools': return renderAdminToolsSection();
    default: return '<div class="empty-state">قسم غير موجود</div>';
  }
}

function switchTab(tab) {
  adminCurrentTab = tab;
  refreshCurrentSection();
}

function refreshCurrentSection() {
  const content = document.getElementById('admin-section-content');
  if (content) {
    content.innerHTML = renderAdminSection(adminCurrentSection);
  }
}

function searchInSection(query) {
  adminSearchQuery = query.toLowerCase();
  refreshCurrentSection();
}

// ============================================
// قسم الصفحة الرئيسية (الاختصارات)
// ============================================

function renderAdminHomeSection() {
  const shortcuts = dataManager.data.home.shortcuts;
  const filtered = adminSearchQuery 
    ? shortcuts.filter(s => s.title.toLowerCase().includes(adminSearchQuery))
    : shortcuts;
  
  return `
    <div class="admin-panel">
      <div class="panel-header">
        <h2>🏠 الصفحة الرئيسية - الاختصارات</h2>
        <input type="text" placeholder="🔍 بحث..." value="${adminSearchQuery}" oninput="searchInSection(this.value)" style="width: 250px; margin: 0;">
      </div>
      
      <div class="inline-form">
        <h3>➕ إضافة اختصار جديد</h3>
        <div class="form-row">
          <input type="text" id="shortcut-icon" placeholder="الأيقونة (إيموجي)" style="width: 120px;">
          <input type="text" id="shortcut-title" placeholder="العنوان" style="flex: 1;">
          <input type="text" id="shortcut-url" placeholder="الرابط (اختياري)" style="flex: 1;">
          <input type="text" id="shortcut-page" placeholder="الصفحة (اختياري)" style="width: 150px;">
          <button class="btn" onclick="addShortcut()">إضافة</button>
        </div>
        <p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 0.5rem;">
          💡 إذا أدخلت رابط، سيفتح الرابط. إذا أدخلت صفحة (home, rules, commands, intros, chat)، سينتقل للصفحة.
        </p>
      </div>
      
      <div class="data-table">
        <div class="table-header">
          <div style="width: 60px;">الأيقونة</div>
          <div style="flex: 1;">العنوان</div>
          <div style="flex: 1;">الرابط/الصفحة</div>
          <div style="width: 100px;">إجراءات</div>
        </div>
        ${filtered.length === 0 ? '<div class="empty-state">لا توجد اختصارات</div>' : ''}
        ${filtered.map(s => {
          const idx = shortcuts.indexOf(s);
          return `
            <div class="table-row">
              <div style="width: 60px; font-size: 1.5rem;">${s.icon}</div>
              <div style="flex: 1; font-weight: bold;">${s.title}</div>
              <div style="flex: 1; color: var(--text-secondary); font-size: 0.9rem;">${s.url || s.page || '-'}</div>
              <div style="width: 100px; display: flex; gap: 0.25rem;">
                <button class="btn btn-sm" onclick="editShortcut(${idx})">✏️</button>
                <button class="btn btn-danger btn-sm" onclick="deleteShortcut(${idx})">🗑️</button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
      
      <div id="shortcut-edit-area"></div>
      
      <div class="results-info">عرض ${filtered.length} من ${shortcuts.length}</div>
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

function editShortcut(index) {
  const shortcut = dataManager.data.home.shortcuts[index];
  const editArea = document.getElementById('shortcut-edit-area');
  editArea.innerHTML = `
    <div class="inline-form" style="margin-top: 1rem; border-top: 2px solid var(--primary);">
      <h3>✏️ تعديل الاختصار</h3>
      <div class="form-row">
        <input type="text" id="edit-shortcut-icon" value="${shortcut.icon}" placeholder="الأيقونة" style="width: 120px;">
        <input type="text" id="edit-shortcut-title" value="${shortcut.title}" placeholder="العنوان" style="flex: 1;">
        <input type="text" id="edit-shortcut-url" value="${shortcut.url || ''}" placeholder="الرابط" style="flex: 1;">
        <input type="text" id="edit-shortcut-page" value="${shortcut.page || ''}" placeholder="الصفحة" style="width: 150px;">
        <button class="btn" onclick="saveShortcut(${index})">💾 حفظ</button>
        <button class="btn btn-danger" onclick="document.getElementById('shortcut-edit-area').innerHTML = ''">❌</button>
      </div>
    </div>
  `;
}

function saveShortcut(index) {
  const title = document.getElementById('edit-shortcut-title').value.trim();
  const icon = document.getElementById('edit-shortcut-icon').value.trim();
  const url = document.getElementById('edit-shortcut-url').value.trim();
  const page = document.getElementById('edit-shortcut-page').value.trim();
  
  if (!title || !icon) {
    alert('⚠️ يرجى إدخال العنوان والأيقونة');
    return;
  }
  
  dataManager.data.home.shortcuts[index] = { title, icon, url: url || null, page: page || null };
  dataManager.saveData();
  refreshAdminPage();
}

function deleteShortcut(index) {
  if (confirm('هل أنت متأكد من حذف هذا الاختصار؟')) {
    dataManager.deleteShortcut(index);
    refreshAdminPage();
  }
}

// ============================================
// قسم الأوامر
// ============================================

function renderAdminCommandsSection() {
  const sections = dataManager.data.commands.sections;
  
  const filteredSections = adminCurrentTab === 'all' 
    ? sections 
    : sections.filter(s => s.id === adminCurrentTab);
  
  const finalSections = adminSearchQuery
    ? filteredSections.map(s => ({
        ...s,
        commands: s.commands.filter(c => 
          c.command.toLowerCase().includes(adminSearchQuery) ||
          c.description.toLowerCase().includes(adminSearchQuery)
        )
      })).filter(s => s.commands.length > 0)
    : filteredSections;
  
  return `
    <div class="admin-panel">
      <div class="panel-header">
        <h2>⌨️ إدارة الأوامر</h2>
        <input type="text" placeholder="🔍 بحث..." value="${adminSearchQuery}" oninput="searchInSection(this.value)" style="width: 250px; margin: 0;">
      </div>
      
      <div class="tabs-container">
        <button class="tab-btn ${adminCurrentTab === 'all' ? 'active' : ''}" onclick="switchTab('all')">
          الكل (${sections.length})
        </button>
        ${sections.map(s => `
          <button class="tab-btn ${adminCurrentTab === s.id ? 'active' : ''}" onclick="switchTab('${s.id}')">
            ${s.title} (${s.commands.length})
          </button>
        `).join('')}
      </div>
      
      ${adminCurrentTab === 'all' ? `
        <div class="inline-form">
          <h3> إضافة قسم جديد</h3>
          <div class="form-row">
            <input type="text" id="command-section-title" placeholder="عنوان القسم" style="flex: 1;">
            <button class="btn" onclick="addCommandSection()">إضافة</button>
          </div>
        </div>
      ` : ''}
      
      ${finalSections.length === 0 ? '<div class="empty-state">لا توجد نتائج</div>' : ''}
      
      ${finalSections.map(section => `
        <div class="section-block">
          <div class="section-block-header">
            <h3> ${section.title}</h3>
            <div style="display: flex; gap: 0.5rem;">
              <button class="btn btn-sm" onclick="editCommandSection('${section.id}')">✏️ تعديل</button>
              <button class="btn btn-danger btn-sm" onclick="deleteCommandSection('${section.id}')">🗑️ حذف</button>
            </div>
          </div>
          
          <div class="inline-form compact">
            <div class="form-row">
              <input type="text" id="cmd-cmd-${section.id}" placeholder="الأمر (مثال: /help)" style="flex: 1;">
              <input type="text" id="cmd-desc-${section.id}" placeholder="الوصف" style="flex: 1;">
              <button class="btn" onclick="addCommand('${section.id}')"> إضافة أمر</button>
            </div>
          </div>
          
          <div class="data-table">
            <div class="table-header">
              <div style="flex: 1;">الأمر</div>
              <div style="flex: 2;">الوصف</div>
              <div style="width: 120px;">إجراءات</div>
            </div>
            ${section.commands.length === 0 ? '<div class="empty-state">لا توجد أوامر</div>' : ''}
            ${section.commands.map((cmd, index) => {
              const origIdx = dataManager.data.commands.sections.find(s => s.id === section.id).commands.indexOf(cmd);
              return `
                <div class="table-row">
                  <div style="flex: 1;"><code class="command-code">${cmd.command}</code></div>
                  <div style="flex: 2; color: var(--text-secondary);">${cmd.description}</div>
                  <div style="width: 120px; display: flex; gap: 0.25rem;">
                    <button class="btn btn-sm" onclick="showEditCommand('${section.id}', ${origIdx})">✏️</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteCommand('${section.id}', ${origIdx})">🗑️</button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
          
          <div id="edit-area-${section.id}"></div>
        </div>
      `).join('')}
      
      <div class="results-info">عرض ${finalSections.length} قسم</div>
    </div>
  `;
}

function addCommandSection() {
  const title = document.getElementById('command-section-title').value.trim();
  if (!title) { alert('⚠️ أدخل عنوان القسم'); return; }
  dataManager.addCommandSection(title);
  refreshAdminPage();
}

function editCommandSection(sectionId) {
  const section = dataManager.data.commands.sections.find(s => s.id === sectionId);
  if (!section) return;
  
  const newTitle = prompt('تعديل عنوان القسم:', section.title);
  if (newTitle && newTitle.trim()) {
    section.title = newTitle.trim();
    dataManager.saveData();
    refreshAdminPage();
  }
}

function deleteCommandSection(id) {
  if (confirm('حذف القسم وجميع أوامره؟')) {
    dataManager.deleteCommandSection(id);
    adminCurrentTab = 'all';
    refreshAdminPage();
  }
}

function addCommand(sectionId) {
  const command = document.getElementById(`cmd-cmd-${sectionId}`).value.trim();
  const description = document.getElementById(`cmd-desc-${sectionId}`).value.trim();
  if (!command || !description) { alert('⚠️ أدخل الأمر والوصف'); return; }
  dataManager.addCommand(sectionId, command, description);
  refreshAdminPage();
}

function showEditCommand(sectionId, index) {
  const section = dataManager.data.commands.sections.find(s => s.id === sectionId);
  if (!section) return;
  const cmd = section.commands[index];
  const editArea = document.getElementById(`edit-area-${sectionId}`);
  editArea.innerHTML = `
    <div class="inline-form compact" style="margin-top: 1rem; border-top: 2px solid var(--primary);">
      <h3>✏️ تعديل الأمر</h3>
      <div class="form-row">
        <input type="text" id="edit-cmd-${sectionId}" value="${cmd.command}" style="flex: 1;">
        <input type="text" id="edit-desc-${sectionId}" value="${cmd.description}" style="flex: 1;">
        <button class="btn" onclick="saveEditCommand('${sectionId}', ${index})">💾 حفظ</button>
        <button class="btn btn-danger" onclick="document.getElementById('edit-area-${sectionId}').innerHTML = ''"></button>
      </div>
    </div>
  `;
}

function saveEditCommand(sectionId, index) {
  const command = document.getElementById(`edit-cmd-${sectionId}`).value.trim();
  const description = document.getElementById(`edit-desc-${sectionId}`).value.trim();
  if (!command || !description) { alert('⚠️ أدخل الأمر والوصف'); return; }
  dataManager.editCommand(sectionId, index, command, description);
  refreshAdminPage();
}

function deleteCommand(sectionId, index) {
  if (confirm('حذف هذا الأمر؟')) {
    dataManager.deleteCommand(sectionId, index);
    refreshAdminPage();
  }
}

// ============================================
// قسم القوانين
// ============================================

function renderAdminRulesSection() {
  const sections = dataManager.data.rules.sections;
  
  const filteredSections = adminCurrentTab === 'all' 
    ? sections 
    : sections.filter(s => s.id === adminCurrentTab);
  
  const finalSections = adminSearchQuery
    ? filteredSections.map(s => ({
        ...s,
        items: s.items.filter(i => i.toLowerCase().includes(adminSearchQuery))
      })).filter(s => s.items.length > 0)
    : filteredSections;
  
  return `
    <div class="admin-panel">
      <div class="panel-header">
        <h2> إدارة القوانين</h2>
        <input type="text" placeholder="🔍 بحث..." value="${adminSearchQuery}" oninput="searchInSection(this.value)" style="width: 250px; margin: 0;">
      </div>
      
      <div class="tabs-container">
        <button class="tab-btn ${adminCurrentTab === 'all' ? 'active' : ''}" onclick="switchTab('all')">
          الكل (${sections.length})
        </button>
        ${sections.map(s => `
          <button class="tab-btn ${adminCurrentTab === s.id ? 'active' : ''}" onclick="switchTab('${s.id}')">
            ${s.title} (${s.items.length})
          </button>
        `).join('')}
      </div>
      
      ${adminCurrentTab === 'all' ? `
        <div class="inline-form">
          <h3>➕ إضافة قسم جديد</h3>
          <div class="form-row">
            <input type="text" id="rule-section-title" placeholder="عنوان القسم" style="flex: 1;">
            <button class="btn" onclick="addRuleSection()">إضافة</button>
          </div>
        </div>
      ` : ''}
      
      ${finalSections.length === 0 ? '<div class="empty-state">لا توجد نتائج</div>' : ''}
      
      ${finalSections.map(section => `
        <div class="section-block">
          <div class="section-block-header">
            <h3> ${section.title}</h3>
            <div style="display: flex; gap: 0.5rem;">
              <button class="btn btn-sm" onclick="editRuleSection('${section.id}')">✏️ تعديل</button>
              <button class="btn btn-danger btn-sm" onclick="deleteRuleSection('${section.id}')">🗑️ حذف</button>
            </div>
          </div>
          
          <div class="inline-form compact">
            <div class="form-row">
              <input type="text" id="rule-item-${section.id}" placeholder="نص القانون الجديد" style="flex: 1;">
              <button class="btn" onclick="addRuleItem('${section.id}')">➕ إضافة قانون</button>
            </div>
          </div>
          
          <div class="items-list">
            ${section.items.length === 0 ? '<div class="empty-state">لا توجد قوانين</div>' : ''}
            ${section.items.map((item, index) => {
              const origIdx = dataManager.data.rules.sections.find(s => s.id === section.id).items.indexOf(item);
              return `
                <div class="list-item">
                  <span class="list-item-icon">✓</span>
                  <span class="list-item-text">${item}</span>
                  <div style="display: flex; gap: 0.25rem;">
                    <button class="btn btn-sm" onclick="editRuleItem('${section.id}', ${origIdx})">✏️</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteRuleItem('${section.id}', ${origIdx})">️</button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `).join('')}
      
      <div class="results-info">عرض ${finalSections.length} قسم</div>
    </div>
  `;
}

function addRuleSection() {
  const title = document.getElementById('rule-section-title').value.trim();
  if (!title) { alert('⚠️ أدخل عنوان القسم'); return; }
  dataManager.addRuleSection(title);
  refreshAdminPage();
}

function editRuleSection(sectionId) {
  const section = dataManager.data.rules.sections.find(s => s.id === sectionId);
  if (!section) return;
  
  const newTitle = prompt('تعديل عنوان القسم:', section.title);
  if (newTitle && newTitle.trim()) {
    section.title = newTitle.trim();
    dataManager.saveData();
    refreshAdminPage();
  }
}

function deleteRuleSection(id) {
  if (confirm('حذف القسم وجميع قوانينه؟')) {
    dataManager.deleteRuleSection(id);
    adminCurrentTab = 'all';
    refreshAdminPage();
  }
}

function addRuleItem(sectionId) {
  const input = document.getElementById(`rule-item-${sectionId}`);
  const text = input.value.trim();
  if (!text) { alert('⚠️ أدخل نص القانون'); return; }
  dataManager.addRuleItem(sectionId, text);
  refreshAdminPage();
}

function editRuleItem(sectionId, index) {
  const section = dataManager.data.rules.sections.find(s => s.id === sectionId);
  if (!section) return;
  
  const currentText = section.items[index];
  const newText = prompt('تعديل القانون:', currentText);
  if (newText && newText.trim()) {
    section.items[index] = newText.trim();
    dataManager.saveData();
    refreshAdminPage();
  }
}

function deleteRuleItem(sectionId, index) {
  if (confirm('حذف هذا القانون؟')) {
    dataManager.deleteRuleItem(sectionId, index);
    refreshAdminPage();
  }
}

// ============================================
// قسم الانترو
// ============================================

function renderAdminIntrosSection() {
  const images = dataManager.data.intros.images;
  const filtered = adminSearchQuery 
    ? images.filter(img => img.caption.toLowerCase().includes(adminSearchQuery) || img.name.toLowerCase().includes(adminSearchQuery))
    : images;
  
  return `
    <div class="admin-panel">
      <div class="panel-header">
        <h2>🎬 إدارة الانترو</h2>
        <input type="text" placeholder="🔍 بحث..." value="${adminSearchQuery}" oninput="searchInSection(this.value)" style="width: 250px; margin: 0;">
      </div>
      
      <div class="inline-form">
        <h3>➕ إضافة انترو جديد</h3>
        <div class="form-row">
          <input type="text" id="intro-name" placeholder="النوع (قصر، فيلا...)" style="width: 150px;">
          <input type="text" id="intro-url" placeholder="رابط الصورة" style="flex: 2;">
          <input type="text" id="intro-caption" placeholder="الوصف" style="flex: 1;">
          <button class="btn" onclick="addIntro()">إضافة</button>
        </div>
      </div>
      
      ${filtered.length === 0 ? '<div class="empty-state">لا توجد نتائج</div>' : ''}
      
      <div class="image-grid-admin">
        ${filtered.map(img => {
          const idx = images.indexOf(img);
          return `
            <div class="image-card-admin">
              <img src="${img.url}" alt="${img.caption}">
              <div class="image-card-info">
                <strong>${img.name} - ${img.caption}</strong>
                <small>${img.url}</small>
              </div>
              <div style="padding: 0 0.85rem 0.85rem; display: flex; gap: 0.25rem;">
                <button class="btn btn-sm" onclick="editIntro('${img.id}')">✏️</button>
                <button class="btn btn-danger btn-sm" onclick="deleteIntro('${img.id}')">🗑️</button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
      
      <div class="results-info">عرض ${filtered.length} من ${images.length}</div>
    </div>
  `;
}

function addIntro() {
  const name = document.getElementById('intro-name').value.trim();
  const url = document.getElementById('intro-url').value.trim();
  const caption = document.getElementById('intro-caption').value.trim();
  if (!name || !url || !caption) { alert('⚠️ أدخل النوع والرابط والوصف'); return; }
  dataManager.addIntro(url, caption, name);
  refreshAdminPage();
}

function editIntro(introId) {
  const intro = dataManager.data.intros.images.find(i => i.id === introId);
  if (!intro) return;
  
  const newName = prompt('تعديل النوع:', intro.name);
  const newCaption = prompt('تعديل الوصف:', intro.caption);
  const newUrl = prompt('تعديل الرابط:', intro.url);
  
  if (newName && newCaption && newUrl) {
    intro.name = newName.trim();
    intro.caption = newCaption.trim();
    intro.url = newUrl.trim();
    dataManager.saveData();
    refreshAdminPage();
  }
}

function deleteIntro(id) {
  if (confirm('حذف هذه الصورة؟')) {
    dataManager.deleteIntro(id);
    refreshAdminPage();
  }
}

// ============================================
// قسم الرد التلقائي
// ============================================

function renderAdminAutorepliesSection() {
  const replies = dataManager.data.autoReplies;
  const filtered = adminSearchQuery 
    ? replies.filter(r => 
        r.keywords.some(k => k.toLowerCase().includes(adminSearchQuery)) ||
        r.reply.toLowerCase().includes(adminSearchQuery)
      )
    : replies;
  
  return `
    <div class="admin-panel">
      <div class="panel-header">
        <h2>🤖 إدارة الرد التلقائي</h2>
        <input type="text" placeholder="🔍 بحث..." value="${adminSearchQuery}" oninput="searchInSection(this.value)" style="width: 250px; margin: 0;">
      </div>
      
      <div class="inline-form">
        <h3>➕ إضافة رد تلقائي</h3>
        <div class="form-row">
          <input type="text" id="autoreply-keywords" placeholder="الكلمات (مفصولة بفاصلة)" style="flex: 1;">
        </div>
        <div class="form-row" style="margin-top: 0.5rem;">
          <textarea id="autoreply-text" placeholder="نص الرد (يمكن استخدام HTML)" rows="3" style="flex: 1;"></textarea>
          <button class="btn" onclick="addAutoReply()">إضافة</button>
        </div>
      </div>
      
      ${filtered.length === 0 ? '<div class="empty-state">لا توجد نتائج</div>' : ''}
      
      <div class="data-table">
        <div class="table-header">
          <div style="flex: 1;">الكلمات المفتاحية</div>
          <div style="flex: 2;">الرد</div>
          <div style="width: 120px;">إجراءات</div>
        </div>
        ${filtered.map((reply, index) => {
          const idx = replies.indexOf(reply);
          return `
            <div class="table-row">
              <div style="flex: 1;">
                <div style="display: flex; flex-wrap: wrap; gap: 0.25rem;">
                  ${reply.keywords.map(k => `<span class="keyword-tag">${k}</span>`).join('')}
                </div>
              </div>
              <div style="flex: 2; color: var(--text-secondary); font-size: 0.85rem; max-height: 100px; overflow-y: auto;">${reply.reply}</div>
              <div style="width: 120px; display: flex; gap: 0.25rem;">
                <button class="btn btn-sm" onclick="editAutoReply(${idx})">✏️</button>
                <button class="btn btn-danger btn-sm" onclick="deleteAutoReply(${idx})">🗑️</button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
      
      <div class="results-info">عرض ${filtered.length} من ${replies.length}</div>
    </div>
  `;
}

function addAutoReply() {
  const keywordsStr = document.getElementById('autoreply-keywords').value.trim();
  const reply = document.getElementById('autoreply-text').value.trim();
  if (!keywordsStr || !reply) { alert('⚠️ أدخل الكلمات والرد'); return; }
  const keywords = keywordsStr.split(',').map(k => k.trim()).filter(k => k);
  dataManager.addAutoReply(keywords, reply);
  refreshAdminPage();
}

function editAutoReply(index) {
  const reply = dataManager.data.autoReplies[index];
  if (!reply) return;
  
  const newKeywords = prompt('تعديل الكلمات (مفصولة بفاصلة):', reply.keywords.join(', '));
  const newReply = prompt('تعديل الرد:', reply.reply);
  
  if (newKeywords && newReply) {
    reply.keywords = newKeywords.split(',').map(k => k.trim()).filter(k => k);
    reply.reply = newReply;
    dataManager.saveData();
    refreshAdminPage();
  }
}

function deleteAutoReply(index) {
  if (confirm('حذف هذا الرد؟')) {
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
          <div class="tool-icon"></div>
          <h3>تصدير البيانات</h3>
          <p>تحميل نسخة احتياطية كملف JSON</p>
          <button class="btn" onclick="exportData()">📥 تصدير</button>
        </div>
        
        <div class="tool-card">
          <div class="tool-icon">📤</div>
          <h3>استيراد البيانات</h3>
          <p>استعادة البيانات من ملف</p>
          <button class="btn" onclick="document.getElementById('import-file').click()"> استيراد</button>
          <input type="file" id="import-file" style="display: none;" accept=".json" onchange="importData(event)">
        </div>
        
        <div class="tool-card">
          <div class="tool-icon">🔄</div>
          <h3>إعادة تعيين</h3>
          <p>العودة للبيانات الافتراضية</p>
          <button class="btn btn-danger" onclick="resetAllData()">🔄 إعادة تعيين</button>
        </div>
      </div>
      
      <div class="info-box">
        <h3>️ ملاحظات مهمة</h3>
        <ul>
          <li>التعديلات تُحفظ تلقائياً في المتصفح (localStorage)</li>
          <li>قم بتصدير البيانات بشكل دوري كاحتياط</li>
          <li>عند مسح بيانات المتصفح ستفقد التعديلات</li>
          <li>يمكنك نقل البيانات بين الأجهزة عبر التصدير/الاستيراد</li>
        </ul>
      </div>
    </div>
  `;
}

function exportData() {
  const data = dataManager.exportData();
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'aldaleel-data-' + new Date().toISOString().split('T')[0] + '.json';
  a.click();
  URL.revokeObjectURL(url);
  alert('✅ تم التصدير بنجاح!');
}

function importData(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    if (confirm('⚠️ سيتم استبدال البيانات الحالية. متأكد؟')) {
      if (dataManager.importData(e.target.result)) {
        alert('✅ تم الاستيراد بنجاح!');
        refreshAdminPage();
      } else {
        alert('❌ خطأ في الاستيراد!');
      }
    }
  };
  reader.readAsText(file);
}

function resetAllData() {
  if (confirm('⚠️ هل أنت متأكد من إعادة تعيين كل البيانات؟')) {
    if (confirm('⚠️ تأكيد أخير - هذه العملية لا يمكن التراجع عنها!')) {
      dataManager.resetData();
      refreshAdminPage();
      alert('✅ تم إعادة التعيين بنجاح!');
    }
  }
}

function refreshAdminPage() {
  if (currentPage === 'admin' && isAdminLoggedIn) {
    loadPage('admin');
  }
}
