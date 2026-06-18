// ============================================
// لوحة الإدارة - نظام Tabs حقيقي
// ============================================

let adminCurrentSection = 'home';
let adminCurrentTab = 'all';
let adminSearchQuery = '';

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
      passwordInput.focus();
    }
  }
}

function renderAdminLogin() {
  return `
    <div class="page active">
      <div class="admin-login">
        <div style="font-size: 4rem; margin-bottom: 1rem;"></div>
        <h1>لوحة الإدارة</h1>
        <p style="margin-bottom: 2rem; color: #b0b0b0;">يرجى إدخال كلمة المرور</p>
        <input type="password" id="admin-password" placeholder="كلمة المرور">
        <button class="btn" onclick="loginAdmin()" style="width: 100%; margin-top: 1rem;">دخول</button>
      </div>
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
// لوحة التحكم - Layout حقيقي
// ============================================

function renderAdminDashboard() {
  return `
    <div class="page active">
      <div class="admin-topbar">
        <div>
          <h1 style="margin: 0; font-size: 1.8rem;">⚙️ لوحة الإدارة</h1>
          <p style="color: #b0b0b0; margin: 0.25rem 0 0 0; font-size: 0.9rem;">مرحباً بك في لوحة التحكم</p>
        </div>
        <button class="btn btn-danger" onclick="logoutAdmin()">🚪 خروج</button>
      </div>
      
      <div class="admin-layout">
        <aside class="admin-sidebar">
          <div class="sidebar-title">الأقسام</div>
          <button class="sidebar-btn ${adminCurrentSection === 'home' ? 'active' : ''}" onclick="switchAdminSection('home')">
            <span class="sidebar-icon">🏠</span>
            <span>الرئيسية</span>
          </button>
          <button class="sidebar-btn ${adminCurrentSection === 'rules' ? 'active' : ''}" onclick="switchAdminSection('rules')">
            <span class="sidebar-icon">📜</span>
            <span>القوانين</span>
          </button>
          <button class="sidebar-btn ${adminCurrentSection === 'commands' ? 'active' : ''}" onclick="switchAdminSection('commands')">
            <span class="sidebar-icon">⌨️</span>
            <span>الأوامر</span>
          </button>
          <button class="sidebar-btn ${adminCurrentSection === 'intros' ? 'active' : ''}" onclick="switchAdminSection('intros')">
            <span class="sidebar-icon"></span>
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
    </div>
  `;
}

// ============================================
// التبديل بين الأقسام - يعرض قسم واحد فقط
// ============================================

function switchAdminSection(section) {
  adminCurrentSection = section;
  adminCurrentTab = 'all';
  adminSearchQuery = '';
  
  const content = document.getElementById('admin-section-content');
  content.innerHTML = renderAdminSection(section);
  
  document.querySelectorAll('.sidebar-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.querySelector(`.sidebar-btn[onclick="switchAdminSection('${section}')"]`);
  if (activeBtn) activeBtn.classList.add('active');
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
// التبديل بين التبويبات الداخلية
// ============================================

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
// قسم الصفحة الرئيسية
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
          <input type="text" id="shortcut-icon" placeholder="الأيقونة " style="width: 100px;">
          <input type="text" id="shortcut-title" placeholder="العنوان" style="flex: 1;">
          <input type="text" id="shortcut-url" placeholder="الرابط أو الصفحة" style="flex: 1;">
          <button class="btn" onclick="addShortcut()">إضافة</button>
        </div>
      </div>
      
      <div class="data-table">
        <div class="table-header">
          <div style="width: 60px;">الأيقونة</div>
          <div style="flex: 1;">العنوان</div>
          <div style="flex: 1;">الرابط</div>
          <div style="width: 80px;">إجراء</div>
        </div>
        ${filtered.length === 0 ? '<div class="empty-state">لا توجد نتائج</div>' : ''}
        ${filtered.map(s => {
          const idx = shortcuts.indexOf(s);
          return `
            <div class="table-row">
              <div style="width: 60px; font-size: 1.5rem;">${s.icon}</div>
              <div style="flex: 1; font-weight: bold;">${s.title}</div>
              <div style="flex: 1; color: #b0b0b0;">${s.url || s.page || '-'}</div>
              <div style="width: 80px;">
                <button class="btn btn-danger btn-sm" onclick="deleteShortcut(${idx})">🗑️</button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
      
      <div class="results-info">عرض ${filtered.length} من ${shortcuts.length}</div>
    </div>
  `;
}

function addShortcut() {
  const title = document.getElementById('shortcut-title').value.trim();
  const icon = document.getElementById('shortcut-icon').value.trim();
  const url = document.getElementById('shortcut-url').value.trim();
  
  if (!title || !icon) {
    alert('️ يرجى إدخال العنوان والأيقونة');
    return;
  }
  
  dataManager.addShortcut(title, url || null, icon);
  refreshAdminPage();
}

function deleteShortcut(index) {
  if (confirm('هل أنت متأكد؟')) {
    dataManager.deleteShortcut(index);
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
        <h2>📜 إدارة القوانين</h2>
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
            <h3>📁 ${section.title}</h3>
            <button class="btn btn-danger btn-sm" onclick="deleteRuleSection('${section.id}')">🗑️ حذف القسم</button>
          </div>
          
          <div class="inline-form compact">
            <div class="form-row">
              <input type="text" id="rule-item-${section.id}" placeholder="نص القانون الجديد" style="flex: 1;">
              <button class="btn" onclick="addRuleItem('${section.id}')">إضافة</button>
            </div>
          </div>
          
          <div class="items-list">
            ${section.items.length === 0 ? '<p style="color: #b0b0b0; padding: 1rem; text-align: center;">لا توجد قوانين</p>' : ''}
            ${section.items.map((item, index) => {
              const origIdx = dataManager.data.rules.sections.find(s => s.id === section.id).items.indexOf(item);
              return `
                <div class="list-item">
                  <span class="list-item-icon">✓</span>
                  <span class="list-item-text">${item}</span>
                  <button class="btn btn-danger btn-sm" onclick="deleteRuleItem('${section.id}', ${origIdx})">🗑️</button>
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

function deleteRuleItem(sectionId, index) {
  if (confirm('حذف هذا القانون؟')) {
    dataManager.deleteRuleItem(sectionId, index);
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
          <h3>➕ إضافة قسم جديد</h3>
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
            <h3>📁 ${section.title}</h3>
            <button class="btn btn-danger btn-sm" onclick="deleteCommandSection('${section.id}')">🗑️ حذف القسم</button>
          </div>
          
          <div class="inline-form compact">
            <div class="form-row">
              <input type="text" id="cmd-cmd-${section.id}" placeholder="الأمر (/help)" style="flex: 1;">
              <input type="text" id="cmd-desc-${section.id}" placeholder="الوصف" style="flex: 1;">
              <button class="btn" onclick="addCommand('${section.id}')">إضافة</button>
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
                  <div style="flex: 2; color: #b0b0b0;">${cmd.description}</div>
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
  if (!title) { alert('️ أدخل عنوان القسم'); return; }
  dataManager.addCommandSection(title);
  refreshAdminPage();
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
    <div class="inline-form compact" style="margin-top: 1rem; border-top: 2px solid #00ff88;">
      <h3>✏️ تعديل الأمر</h3>
      <div class="form-row">
        <input type="text" id="edit-cmd-${sectionId}" value="${cmd.command}" style="flex: 1;">
        <input type="text" id="edit-desc-${sectionId}" value="${cmd.description}" style="flex: 1;">
        <button class="btn" onclick="saveEditCommand('${sectionId}', ${index})">💾 حفظ</button>
        <button class="btn btn-danger" onclick="document.getElementById('edit-area-${sectionId}').innerHTML = ''">❌</button>
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
// قسم الانترو
// ============================================

function renderAdminIntrosSection() {
  const images = dataManager.data.intros.images;
  const filtered = adminSearchQuery 
    ? images.filter(img => img.caption.toLowerCase().includes(adminSearchQuery))
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
                <strong>${img.caption}</strong>
                <small>${img.url}</small>
              </div>
              <div style="padding: 0 1rem 1rem;">
                <button class="btn btn-danger btn-sm" onclick="deleteIntro('${img.id}')">🗑️ حذف</button>
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
  const url = document.getElementById('intro-url').value.trim();
  const caption = document.getElementById('intro-caption').value.trim();
  if (!url || !caption) { alert('️ أدخل الرابط والوصف'); return; }
  dataManager.addIntro(url, caption);
  refreshAdminPage();
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
          <textarea id="autoreply-text" placeholder="نص الرد" rows="2" style="flex: 1;"></textarea>
          <button class="btn" onclick="addAutoReply()">إضافة</button>
        </div>
      </div>
      
      ${filtered.length === 0 ? '<div class="empty-state">لا توجد نتائج</div>' : ''}
      
      <div class="data-table">
        <div class="table-header">
          <div style="flex: 1;">الكلمات المفتاحية</div>
          <div style="flex: 2;">الرد</div>
          <div style="width: 80px;">إجراء</div>
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
              <div style="flex: 2; color: #00ff88;">${reply.reply}</div>
              <div style="width: 80px;">
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
        <h2> الأدوات</h2>
      </div>
      
      <div class="tools-grid">
        <div class="tool-card">
          <div class="tool-icon">📥</div>
          <h3>تصدير البيانات</h3>
          <p>تحميل نسخة احتياطية كملف JSON</p>
          <button class="btn" onclick="exportData()">📥 تصدير</button>
        </div>
        
        <div class="tool-card">
          <div class="tool-icon">📤</div>
          <h3>استيراد البيانات</h3>
          <p>استعادة البيانات من ملف</p>
          <button class="btn" onclick="document.getElementById('import-file').click()">📤 استيراد</button>
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
        <h3>️ ملاحظات</h3>
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

// ============================================
// أدوات البيانات
// ============================================

function exportData() {
  const data = dataManager.exportData();
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'mta-data-' + new Date().toISOString().split('T')[0] + '.json';
  a.click();
  URL.revokeObjectURL(url);
  alert('✅ تم التصدير!');
}

function importData(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    if (confirm('⚠️ سيتم استبدال البيانات الحالية. متأكد؟')) {
      if (dataManager.importData(e.target.result)) {
        alert('✅ تم الاستيراد!');
        refreshAdminPage();
      } else {
        alert('❌ خطأ!');
      }
    }
  };
  reader.readAsText(file);
}

function resetAllData() {
  if (confirm('⚠️ إعادة تعيين كل البيانات؟')) {
    if (confirm('⚠️ تأكيد أخير - لا يمكن التراجع!')) {
      dataManager.resetData();
      refreshAdminPage();
      alert('✅ تم!');
    }
  }
}

function refreshAdminPage() {
  if (currentPage === 'admin' && isAdminLoggedIn) {
    loadPage('admin');
  }
}
