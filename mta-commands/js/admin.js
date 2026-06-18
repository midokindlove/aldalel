/* ============================================
   admin.js
   لوحة التحكم + GitHub API
============================================ */

const ADMIN_PASSWORD = '00000';
const GITHUB_API = 'https://api.github.com';
const REPO = 'username/mta-commands'; // ⚠️ غيّره لاسم الريبو الخاص بك
const BRANCH = 'main';
const DATA_PATH = 'data/data.json';

let githubToken = localStorage.getItem('github_token') || '';

// ========== تسجيل الدخول ==========
function adminLogin() {
  const password = document.getElementById('adminPassword').value;
  const token = document.getElementById('githubToken').value;
  
  if (password !== ADMIN_PASSWORD) {
    showToast('❌ كلمة السر خاطئة', true);
    return;
  }
  
  if (!token) {
    showToast('❌ يجب إدخال GitHub Token', true);
    return;
  }
  
  githubToken = token;
  localStorage.setItem('github_token', token);
  
  document.getElementById('adminLogin').style.display = 'none';
  document.getElementById('adminPanel').style.display = 'block';
  
  showToast('✅ تم تسجيل الدخول بنجاح');
  loadAdminData();
}

// ========== تحميل البيانات للأدمن ==========
function loadAdminData() {
  whenDataReady(data => {
    // معلومات السيرفر
    document.getElementById('metaServerName').value = data.meta?.serverName || '';
    document.getElementById('metaDiscord').value = data.meta?.discord || '';
    document.getElementById('metaMtasa').value = data.meta?.mtasa || '';
    
    // البوت
    document.getElementById('chatbotGreeting').value = data.chatbot?.greeting || '';
    document.getElementById('chatbotFallback').value = data.chatbot?.fallback || '';
    
    // القوائم
    renderAdminRules(data.rules || []);
    renderAdminCommands(data.commands || []);
    renderAdminIntros(data.intros || []);
    renderAdminShortcuts(data.shortcuts || []);
  });
}

// ========== التبويبات ==========
function switchAdminTab(tab) {
  document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.admin-section').forEach(s => s.classList.remove('active'));
  
  event.target.classList.add('active');
  document.getElementById('admin-' + tab).classList.add('active');
}

// ========== GitHub API ==========
async function getFileSha() {
  const res = await fetch(`${GITHUB_API}/repos/${REPO}/contents/${DATA_PATH}?ref=${BRANCH}`, {
    headers: {
      'Authorization': `Bearer ${githubToken}`,
      'Accept': 'application/vnd.github+json'
    }
  });
  const data = await res.json();
  return data.sha;
}

async function updateGitHubFile(content, message) {
  try {
    const sha = await getFileSha();
    const encoded = btoa(unescape(encodeURIComponent(JSON.stringify(content, null, 2))));
    
    const res = await fetch(`${GITHUB_API}/repos/${REPO}/contents/${DATA_PATH}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${githubToken}`,
        'Accept': 'application/vnd.github+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: message,
        content: encoded,
        sha: sha,
        branch: BRANCH
      })
    });
    
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || 'فشل التحديث');
    }
    
    showToast('✅ تم الحفظ بنجاح - سيتم التحديث خلال 30 ثانية');
    return true;
  } catch (err) {
    showToast('❌ خطأ: ' + err.message, true);
    return false;
  }
}

// ========== حفظ معلومات السيرفر ==========
async function saveMeta() {
  const data = { ...window.appData };
  data.meta = {
    ...data.meta,
    serverName: document.getElementById('metaServerName').value,
    discord: document.getElementById('metaDiscord').value,
    mtasa: document.getElementById('metaMtasa').value,
    lastUpdate: new Date().toISOString()
  };
  
  await updateGitHubFile(data, 'تحديث معلومات السيرفر');
}

// ========== حفظ إعدادات البوت ==========
async function saveChatbot() {
  const data = { ...window.appData };
  data.chatbot = {
    ...data.chatbot,
    greeting: document.getElementById('chatbotGreeting').value,
    fallback: document.getElementById('chatbotFallback').value
  };
  
  await updateGitHubFile(data, 'تحديث إعدادات البوت');
}

// ========== القوانين ==========
function renderAdminRules(rules) {
  const container = document.getElementById('rulesList');
  container.innerHTML = rules.map((r, i) => `
    <div class="data-item">
      <div>
        <strong>${r.id}. ${r.title}</strong>
        <div style="color: var(--text-muted); font-size: 0.9rem;">${r.description}</div>
      </div>
      <div class="data-item-actions">
        <button class="btn btn-sm btn-secondary" onclick="editRule(${i})">✏️ تعديل</button>
        <button class="btn btn-sm btn-danger" onclick="deleteRule(${i})">🗑️ حذف</button>
      </div>
    </div>
  `).join('');
}

function addRule() {
  openModal('إضافة قانون جديد', `
    <div class="form-group">
      <label>العنوان</label>
      <input type="text" id="ruleTitle" class="input">
    </div>
    <div class="form-group">
      <label>الوصف</label>
      <textarea id="ruleDesc" class="textarea"></textarea>
    </div>
    <div class="form-group">
      <label>العقوبة</label>
      <input type="text" id="rulePenalty" class="input" placeholder="Warn / Mute / Ban">
    </div>
  `, async () => {
    const data = { ...window.appData };
    const newId = data.rules.length > 0 ? Math.max(...data.rules.map(r => r.id)) + 1 : 1;
    data.rules.push({
      id: newId,
      title: document.getElementById('ruleTitle').value,
      description: document.getElementById('ruleDesc').value,
      penalty: document.getElementById('rulePenalty').value
    });
    await updateGitHubFile(data, 'إضافة قانون جديد');
    renderAdminRules(data.rules);
  });
}

function editRule(index) {
  const rule = window.appData.rules[index];
  openModal('تعديل القانون', `
    <div class="form-group">
      <label>العنوان</label>
      <input type="text" id="ruleTitle" class="input" value="${rule.title}">
    </div>
    <div class="form-group">
      <label>الوصف</label>
      <textarea id="ruleDesc" class="textarea">${rule.description}</textarea>
    </div>
    <div class="form-group">
      <label>العقوبة</label>
      <input type="text" id="rulePenalty" class="input" value="${rule.penalty || ''}">
    </div>
  `, async () => {
    const data = { ...window.appData };
    data.rules[index] = {
      ...data.rules[index],
      title: document.getElementById('ruleTitle').value,
      description: document.getElementById('ruleDesc').value,
      penalty: document.getElementById('rulePenalty').value
    };
    await updateGitHubFile(data, 'تعديل قانون');
    renderAdminRules(data.rules);
  });
}

async function deleteRule(index) {
  if (!confirm('هل أنت متأكد من حذف هذا القانون؟')) return;
  const data = { ...window.appData };
  data.rules.splice(index, 1);
  await updateGitHubFile(data, 'حذف قانون');
  renderAdminRules(data.rules);
}

// ========== الأوامر ==========
function renderAdminCommands(commands) {
  const container = document.getElementById('commandsList');
  container.innerHTML = commands.map((cat, ci) => `
    <div class="card">
      <h3 class="section-title">${cat.icon || '📌'} ${cat.category}</h3>
      <button class="btn btn-sm" onclick="addCommand(${ci})">➕ إضافة أمر</button>
      <div class="data-list" style="margin-top: 1rem;">
        ${cat.items.map((item, ii) => `
          <div class="data-item">
            <div>
              <code style="color: var(--primary); font-weight: 700;">${item.cmd}</code>
              <span style="margin: 0 0.5rem;">-</span>
              <span>${item.desc}</span>
              <span class="command-level" style="margin-right: 0.5rem;">${item.level}</span>
            </div>
            <div class="data-item-actions">
              <button class="btn btn-sm btn-secondary" onclick="editCommand(${ci}, ${ii})">✏️</button>
              <button class="btn btn-sm btn-danger" onclick="deleteCommand(${ci}, ${ii})">🗑️</button>
            </div>
          </div>
        `).join('')}
      </div>
      <button class="btn btn-sm btn-danger" onclick="deleteCommandCategory(${ci})" style="margin-top: 1rem;">🗑️ حذف القسم بالكامل</button>
    </div>
  `).join('');
}

function addCommandCategory() {
  openModal('إضافة قسم جديد', `
    <div class="form-group
