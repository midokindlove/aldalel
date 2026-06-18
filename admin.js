// ============================================
// لوحة الإدارة - نظام Tabs مع بحث وفلترة
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
        <div style="font-size: 4rem; margin-bottom: 1rem;">🔐</div>
        <h1>لوحة الإدارة</h1>
        <p style="margin-bottom: 2rem; color: #b0b0b0;">
          يرجى إدخال كلمة المرور للوصول
        </p>
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
// لوحة التحكم - تخطيط منظم
// ============================================

function renderAdminDashboard() {
  return `
    <div class="page active">
      <div class="admin-topbar">
        <div>
          <h1 style="margin: 0;">⚙️ لوحة الإدارة</h1>
          <p style="color: #b0b0b0; margin: 0.25rem 0 0 0; font-size: 0.9rem;">مرحباً بك في لوحة التحكم</p>
        </div>
        <button class="btn btn-danger" onclick="logoutAdmin()">🚪 خروج</button>
      </div>
      
      <div class="admin-layout">
        <!-- القائمة الجانبية -->
        <aside class="admin-sidebar">
          <div class="sidebar-title">القائمة</div>
          <button class="sidebar-btn ${adminCurrentSection === 'home' ? 'active' : ''}" onclick="switchAdminSection('home', this)">
            <span class="sidebar-icon">🏠</span>
            <span>الرئيسية</span>
          </button>
          <button class="sidebar-btn ${adminCurrentSection === 'rules' ? 'active' : ''}" onclick="switchAdminSection('rules', this)">
            <span class="sidebar-icon">📜</span>
            <span>القوانين</span>
          </button>
          <button class="sidebar-btn ${adminCurrentSection === 'commands' ? 'active' : ''}" onclick="switchAdminSection('commands', this)">
            <span class="sidebar-icon">⌨️</span>
            <span>الأوامر</span>
          </button>
          <button class="sidebar-btn ${adminCurrentSection === 'intros' ? 'active' : ''}" onclick="switchAdminSection('intros', this)">
            <span class="sidebar-icon">🎬</span>
            <span>الانترو</span>
          </button>
          <button class="sidebar-btn ${adminCurrentSection === 'autoreplies' ? 'active' : ''}" onclick="switchAdminSection('autoreplies', this)">
            <span class="sidebar-icon">🤖</span>
            <span>الرد التلقائي</span>
          </button>
          <button class="sidebar-btn ${adminCurrentSection === 'tools' ? 'active' : ''}" onclick="switchAdminSection('tools', this)">
            <span class="sidebar-icon">🔧</span>
            <span>الأدوات</span>
          </button>
        </aside>
        
        <!-- المحتوى الرئيسي -->
        <main class="admin-content" id="admin-section-content">
          ${renderAdminSection(adminCurrentSection)}
        </main>
      </div>
    </div>
  `;
}

// ============================================
// التنقل بين الأقسام
// ============================================

function switchAdminSection(section, btn) {
  adminCurrentSection = section;
  adminCurrentTab = 'all';
  adminSearchQuery = '';
  document.getElementById('admin-section-content').innerHTML = renderAdminSection(section);
  
  document.querySelectorAll('.sidebar-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
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
// تبديل التبويب
// ============================================

function switchTab(tab) {
  adminCurrentTab = tab;
  refreshCurrentSection();
}

function refreshCurrentSection() {
  document.getElementById('admin-section-content').innerHTML = renderAdminSection(adminCurrentSection);
}

// ============================================
// البحث
// ============================================

function searchInSection(query) {
  adminSearchQuery = query.toLowerCase();
  refreshCurrentSection();
}

// ============================================
// قسم الصفحة الرئيسية
// ============================================

function renderAdminHomeSection() {
  const shortcuts = dataManager.data.home.shortcuts;
  
  // فلترة حسب البحث
  const filteredShortcuts = adminSearchQuery 
    ? shortcuts.filter(s => 
        s.title.toLowerCase().includes(adminSearchQuery) ||
        (s.url && s.url.toLowerCase().includes(adminSearchQuery))
      )
    : shortcuts;
  
  return `
    <div class="admin-panel">
      <div class="panel-header">
        <h2>🏠 الصفحة الرئيسية - الاختصارات</h2>
        <div class="search-box-inline">
          <input type="text" id="search-input" placeholder="🔍 بحث..." value="${adminSearchQuery}" oninput="searchInSection(this.value)">
        </div>
      </div>
      
      <!-- نموذج الإضافة مباشر -->
      <div class="inline-form">
        <h3>➕ إضافة اختصار جديد</h3>
        <div class="form-row">
          <input type="text" id="shortcut-icon" placeholder="الأيقونة 🎮" style="width: 80px;">
          <input type="text" id="shortcut-title" placeholder="العنوان" style="flex: 1;">
          <input type="text" id="shortcut-url" placeholder="الرابط (اختياري)" style="flex: 1;">
          <button class="btn" onclick="addShortcut()">إضافة</button>
        </div>
      </div>
      
      <!-- القائمة -->
      <div class="data-table">
        <div class="table-header">
          <div style="width: 60px;">الأيقونة</div>
          <div style="flex: 1;">العنوان</div>
          <div style="flex: 1;">الرابط</div>
          <div style="width: 80px;">إجراء</div>
        </div>
        ${filteredShortcuts.length === 0 ? '<div class="empty-state">لا توجد نتائج</div>' : ''}
        ${filteredShortcuts.map((shortcut, index) => {
          const originalIndex = shortcuts.indexOf(shortcut);
          return `
            <div class="table-row">
              <div style="width: 60px; font-size: 1.5rem;">${shortcut.icon}</div>
              <div style="flex: 1; font-weight: bold;">${shortcut.title}</div>
              <div style="flex: 1; color: #b0b0b0; font-size: 0.9rem;">${shortcut.url || shortcut.page || '-'}</div>
              <div style="width: 80px;">
                <button class="btn btn-danger btn-sm" onclick="deleteShortcut(${originalIndex})">🗑️</button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
      
      <div class="results-info">
        عرض ${filteredShortcuts.length} من ${shortcuts.length} اختصار
      </div>
    </div>
  `;
}

function addShortcut() {
  const title = document.getElementById('shortcut-title').value.trim();
  const icon = document.getElementById('shortcut-icon').value.trim();
  const url = document.getElementById('shortcut-url').value.trim();
  
  if (!title || !icon) {
    alert('⚠️ يرجى إدخال العنوان والأيقونة');
    return;
  }
  
  dataManager.addShortcut(title, url || null, icon);
  refreshAdminPage();
}

function deleteShortcut(index) {
  if (confirm('هل أنت متأكد من حذف هذا الاختصار؟')) {
    dataManager.deleteShortcut(index);
    refreshAdminPage();
  }
}

// ============================================
// قسم القوانين - مع Tabs
// ============================================

function renderAdminRulesSection() {
  const sections = dataManager.data.rules.sections;
  
  // فلترة حسب التبويب
  const filteredSections = adminCurrentTab === 'all' 
    ? sections 
    : sections.filter(s => s.id === adminCurrentTab);
  
  // فلترة حسب البحث
  const finalSections = adminSearchQuery
    ? filteredSections.map(section => ({
        ...section,
        items: section.items.filter(item => item.toLowerCase().includes(adminSearchQuery))
      })).filter(section => section.items.length > 0)
    : filteredSections;
  
  return `
    <div class="admin-panel">
      <div class="panel-header">
        <h2>📜 إدارة القوانين</h2>
        <div class="search-box-inline">
          <input type="text" id="search-input" placeholder="🔍 بحث..." value="${adminSearchQuery}" oninput="searchInSection(this.value)">
        </div>
      </div>
      
      <!-- Tabs -->
      <div class="tabs-container">
        <button class="tab-btn ${adminCurrentTab === 'all' ? 'active' : ''}" onclick="switchTab('all')">
          الكل (${sections.length})
        </button>
        ${sections.map(section => `
          <button class="tab-btn ${adminCurrentTab === section.id ? 'active' : ''}" onclick="switchTab('${section.id}')">
            ${section.title} (${section.items.length})
          </button>
        `).join('')}
      </div>
      
      <!-- إضافة قسم جديد -->
      ${adminCurrentTab === 'all' ? `
        <div class="inline-form">
          <h3>➕ إضافة قسم قوانين جديد</h3>
          <div class="form-row">
            <input type="text" id="rule-section-title" placeholder="عنوان القسم (مثال: القوانين العامة)" style="flex: 1;">
            <button class="btn" onclick="addRuleSection()">إضافة</button>
          </div>
        </div>
      ` : ''}
      
      <!-- عرض الأقسام -->
      ${finalSections.length === 0 ? '<div class="empty-state">لا توجد نتائج</div>' : ''}
      
      ${finalSections.map(section => `
        <div class="section-block">
          <div class="section-block-header">
            <h3>📁 ${section.title}</h3>
            <button class="btn btn-danger btn-sm" onclick="deleteRuleSection('${section.id}')">🗑️ حذف القسم</button>
          </div>
          
          <!-- إضافة قانون -->
          <div class="inline-form compact">
            <div class="form-row">
              <input type="text" id="rule-item-${section.id}" placeholder="نص القانون الجديد" style="flex: 1;">
              <button class="btn" onclick="addRuleItem('${section.id}')">إضافة قانون</button>
            </div>
          </div>
          
          <!-- قائمة القوانين -->
          <div class="items-list">
            ${section.items.length === 0 ? '<p style="color: #b0b0b0; padding: 1rem; text-align: center;">لا توجد قوانين في هذا القسم</p>' : ''}
            ${section.items.map((item, index) => {
              const originalIndex = dataManager.data.rules.sections.find(s => s.id === section.id).items.indexOf(item);
              return `
                <div class="list-item">
                  <span class="list-item-icon">✓</span>
                  <span class="list-item-text">${item}</span>
                  <button class="btn btn-danger btn-sm" onclick="deleteRuleItem('${section.id}', ${originalIndex})">🗑️</button>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `).join('')}
      
      <div class="results-info">
        عرض ${finalSections.length} قسم
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
    adminCurrentTab = 'all';
    refreshAdminPage();
  }
}

function addRuleItem(sectionId) {
  const input = document.getElementById(`rule-item-${sectionId}`);
  const text = input.value.trim();
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
// قسم الأوامر - مع Tabs
// ============================================

function renderAdminCommandsSection() {
  const sections = dataManager.data.commands.sections;
  
  // فلترة حسب التبويب
  const filteredSections = adminCurrentTab === 'all' 
    ? sections 
    : sections.filter(s => s.id === adminCurrentTab);
  
  // فلترة حسب البحث
  const finalSections = adminSearchQuery
    ? filteredSections.map(section => ({
        ...section,
        commands: section.commands.filter(cmd => 
          cmd.command.toLowerCase().includes(adminSearchQuery) ||
          cmd.description.toLowerCase().includes(adminSearchQuery)
        )
      })).filter(section => section.commands.length > 0)
    : filteredSections;
  
  return `
    <div class="admin-panel">
      <div class="panel-header">
        <h2>⌨️ إدارة الأوامر</h2>
        <div class="search-box-inline">
          <input type="text" id="search-input" placeholder="🔍 بحث..." value="${adminSearchQuery}" oninput="searchInSection(this.value)">
        </div>
      </div>
      
      <!-- Tabs -->
      <div class="tabs-container">
        <button class="tab-btn ${adminCurrentTab === 'all' ? 'active' : ''}" onclick="switchTab('all')">
          الكل (${sections.length})
        </button>
        ${sections.map(section => `
          <button class="tab-btn ${adminCurrentTab === section.id ? 'active' : ''}" onclick="switchTab('${section.id}')">
            ${section.title} (${section.commands.length})
          </button>
        `).join('')}
      </div>
      
      <!-- إضافة قسم جديد -->
      ${adminCurrentTab === 'all' ? `
        <div class="inline-form">
          <h3>➕ إضافة قسم أوامر جديد</h3>
          <div class="form-row">
            <input type="text" id="command-section-title" placeholder="عنوان القسم (مثال: أوامر الإدارة)" style="flex: 1;">
            <button class="btn" onclick="addCommandSection()">إضافة</button>
          </div>
        </div>
      ` : ''}
      
      <!-- عرض الأقسام -->
      ${finalSections.length === 0 ? '<div class="empty-state">لا توجد نتائج</div>' : ''}
      
      ${finalSections.map(section => `
        <div class="section-block">
          <div class="section-block-header">
            <h3>📁 ${section.title}</h3>
            <button class="btn btn-danger btn-sm" onclick="deleteCommandSection('${section.id}')">🗑️ حذف القسم</button>
          </div>
          
          <!-- إضافة أمر -->
          <div class="inline-form compact">
            <div class="form-row">
              <input type="text" id="cmd-cmd-${section.id}" placeholder="الأمر (مثال: /help)" style="flex: 1;">
              <input type="text" id="cmd-desc-${section.id}" placeholder="الوصف" style="flex: 1;">
              <button class="btn" onclick="addCommand('${section.id}')">إضافة أمر</button>
            </div>
          </div>
          
          <!-- قائمة الأوامر -->
          <div class="data-table">
            <div class="table-header">
              <div style="flex: 1;">الأمر</div>
              <div style="flex: 2;">الوصف</div>
              <div style="width: 100px;">إجراءات</div>
            </div>
            ${section.commands.length === 0 ? '<div class="empty-state">لا توجد أوامر</div>' : ''}
            ${section.commands.map((cmd, index) => {
              const originalIndex = dataManager.data.commands.sections.find(s => s.id === section.id).commands.indexOf(cmd);
              return `
                <div class="table-row">
                  <div style="flex: 1;">
                    <code class="command-code">${cmd.command}</code>
                  </div>
                  <div style="flex: 2; color: #b0b0b0;">${cmd.description}</div>
                  <div style="width: 100px; display: flex; gap: 0.25rem;">
                    <button class="btn btn-sm" onclick="showEditCommand('${section.id}', ${originalIndex})">✏️</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteCommand('${section.id}', ${originalIndex})">🗑️</button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
          
          <!-- منطقة التعديل -->
          <div id="edit-area-${section.id}"></div>
        </div>
      `).join('')}
      
      <div class="results-info">
        عرض ${finalSections.length} قسم
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
    adminCurrentTab = 'all';
    refreshAdminPage();
  }
}

function addCommand(sectionId) {
  const command = document.getElementById(`cmd-cmd-${sectionId}`).value.trim();
  const description = document.getElementById(`cmd-desc-${sectionId}`).value.trim();
  
  if (!command || !description) {
    alert('⚠️ يرجى إدخال الأمر والوصف');
    return;
  }
  
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
  
  // فلترة حسب البحث
  const filteredImages = adminSearchQuery 
    ? images.filter(img => 
        img.caption.toLowerCase().includes(adminSearchQuery) ||
        img.url.toLowerCase().includes(adminSearchQuery)
      )
    : images;
  
  return `
    <div class="admin-panel">
      <div class="panel-header">
        <h2>🎬 إدارة الانترو</h2>
        <div class="search-box-inline">
          <input type="text" id="search-input" placeholder="🔍 بحث..." value="${adminSearchQuery}" oninput="searchInSection(this.value)">
        </div>
      </div>
      
      <!-- إضافة انترو -->
      <div class="inline-form">
        <h3>➕ إضافة انترو جديد</h3>
        <div class="form-row">
          <input type="text" id="intro-url" placeholder="رابط الصورة" style="flex: 2;">
          <input type="text" id="intro-caption" placeholder="الوصف" style="flex: 1;">
          <button class="btn" onclick="addIntro()">إضافة</button>
        </div>
      </div>
      
      <!-- قائمة الانترو -->
      ${filteredImages.length === 0 ? '<div class="empty-state">لا توجد نتائج</div>' : ''}
      
      <div class="image-grid-admin">
        ${filteredImages.map(img => {
          const originalIndex = images.indexOf(img);
          return `
            <div class="image-card-admin">
              <img src="${img.url}" alt="${img.caption}">
              <div class="image-card-info">
                <strong>${img.caption}</strong>
                <small>${img.url}</small>
              </div>
              <button class="btn btn-danger btn-sm" onclick="deleteIntro('${img.id}')">🗑️ حذف</button>
            </div>
          `;
        }).join('')}
      </div>
      
      <div class="results-info">
        عرض ${filteredImages.length} من ${images.length} صورة
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
  
  // فلترة حسب البحث
  const filteredReplies = adminSearchQuery 
    ? replies.filter(reply => 
        reply.keywords.some(k => k.toLowerCase().includes(adminSearchQuery)) ||
        reply.reply.toLowerCase().includes(adminSearchQuery)
      )
    : replies;
  
  return `
    <div class="admin-panel">
      <div class="panel-header">
        <h2>🤖 إدارة الرد التلقائي</h2>
        <div class="search-box-inline">
          <input type="text" id="search-input" placeholder="🔍 بحث..." value="${adminSearchQuery}" oninput="searchInSection(this.value)">
        </div>
      </div>
      
      <!-- إضافة رد -->
      <div class="inline-form">
        <h3>➕ إضافة رد تلقائي جديد</h3>
        <div class="form-row">
          <input type="text" id="autoreply-keywords" placeholder="الكلمات (مفصولة بفاصلة)" style="flex: 1;">
        </div>
        <div class="form-row">
          <textarea id="autoreply-text" placeholder="نص الرد" rows="2" style="flex: 1;"></textarea>
          <button class="btn" onclick="addAutoReply()">إضافة</button>
        </div>
      </div>
      
      <!-- قائمة الردود -->
      ${filteredReplies.length === 0 ? '<div class="empty-state">لا توجد نتائج</div>' : ''}
      
      <div class="data-table">
        <div class="table-header">
          <div style="flex: 1;">الكلمات المفتاحية</div>
          <div style="flex: 2;">الرد</div>
          <div style="width: 80px;">إجراء</div>
        </div>
        ${filteredReplies.map((reply, index) => {
          const originalIndex = replies.indexOf(reply);
          return `
            <div class="table-row">
              <div style="flex: 1;">
                <div style="display: flex; flex-wrap: wrap; gap: 0.25rem;">
                  ${reply.keywords.map(k => `<span class="keyword-tag">${k}</span>`).join('')}
                </div>
              </div>
              <div style="flex: 2; color: #00ff88;">${reply.reply}</div>
              <div style="width: 80px;">
                <button class="btn btn-danger btn-sm" onclick="deleteAutoReply(${originalIndex})">🗑️</button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
      
      <div class="results-info">
        عرض ${filteredReplies.length} من ${replies.length} رد
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
          <div class="tool-icon">📥</div>
          <h3>تصدير البيانات</h3>
          <p>تحميل نسخة احتياطية من جميع البيانات كملف JSON</p>
          <button class="btn" onclick="exportData()">📥 تصدير</button>
        </div>
        
        <div class="tool-card">
          <div class="tool-icon">📤</div>
          <h3>استيراد البيانات</h3>
          <p>استعادة البيانات من ملف JSON محفوظ مسبقاً</p>
          <button class="btn" onclick="document.getElementById('import-file').click()">📤 استيراد</button>
          <input type="file" id="import-file" style="display: none;" accept=".json" onchange="importData(event)">
        </div>
        
        <div class="tool-card">
          <div class="tool-icon">🔄</div>
          <h3>إعادة تعيين</h3>
          <p>حذف جميع البيانات والعودة للبيانات الافتراضية</p>
          <button class="btn btn-danger" onclick="resetAllData()">🔄 إعادة تعيين</button>
        </div>
      </div>
      
      <div class="info-box">
        <h3>ℹ️ ملاحظات مهمة</h3>
        <ul>
          <li>جميع التعديلات تُحفظ تلقائياً في متصفحك (localStorage)</li>
          <li>قم بتصدير البيانات بشكل دوري كاحتياط</li>
          <li>عند مسح بيانات المتصفح، ستفقد التعديلات</li>
          <li>يمكنك نقل البيانات بين الأجهزة عبر التصدير والاستيراد</li>
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
  if (confirm('⚠️ هل أنت متأكد من إعادة تعيين كل البيانات؟')) {
    if (confirm('⚠️ تأكيد أخير: هذه العملية لا يمكن التراجع عنها!')) {
      dataManager.resetData();
      refreshAdminPage();
      alert('✅ تم إعادة تعيين البيانات بنجاح!');
    }
  }
}

function refreshAdminPage() {
  if (currentPage === 'admin' && isAdminLoggedIn) {
    loadPage('admin');
  }
}
