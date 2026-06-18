/* ============================================
   main.js
   المنطق العام للموقع + رسم الصفحات
============================================ */

// رسم كل الصفحات عند تحديث البيانات
function renderAll(data) {
  renderNavbar(data);
  renderHomePage(data);
  renderRulesPage(data);
  renderCommandsPage(data);
  renderIntrosPage(data);
}

// ========== شريط التنقل ==========
function renderNavbar(data) {
  const serverName = document.getElementById('serverName');
  if (serverName) serverName.textContent = data.meta?.serverName || 'MTA Server';
  
  const discordLink = document.getElementById('discordLink');
  if (discordLink && data.meta?.discord) {
    discordLink.href = data.meta.discord;
  }
  
  const joinBtn = document.getElementById('joinServerBtn');
  if (joinBtn && data.meta?.mtasa) {
    joinBtn.href = data.meta.mtasa;
  }
  
  document.title = data.meta?.serverName ? `${data.meta.serverName} - الصفحة الرئيسية` : 'MTA Server';
}

// ========== الصفحة الرئيسية ==========
function renderHomePage(data) {
  const grid = document.getElementById('shortcutsGrid');
  if (!grid || !data.shortcuts) return;
  
  grid.innerHTML = data.shortcuts.map(s => `
    <button class="shortcut-btn" onclick="showShortcut('${s.keyword.replace(/'/g, "\\'")}')">
      <span class="shortcut-icon">${s.icon || '⚡'}</span>
      ${s.keyword}
    </button>
  `).join('');
}

function showShortcut(keyword) {
  // فتح الشات وإرسال الكلمة
  const win = document.getElementById('chatWindow');
  if (win && !win.classList.contains('active')) {
    toggleChat();
  }
  setTimeout(() => {
    const input = document.getElementById('chatInput');
    const messages = document.getElementById('chatMessages');
    if (input && messages && window.appData) {
      input.value = keyword;
      sendChatMessage();
    }
  }, 100);
}

// ========== صفحة القوانين ==========
function renderRulesPage(data) {
  const container = document.getElementById('rulesContainer');
  if (!container || !data.rules) return;
  
  container.innerHTML = data.rules.map(r => `
    <div class="rule-item">
      <span class="rule-number">${r.id}</span>
      <h3 class="rule-title">${r.title}</h3>
      <p class="rule-desc">${r.description}</p>
      ${r.penalty && r.penalty !== '-' ? `<span class="rule-penalty">⚠️ العقوبة: ${r.penalty}</span>` : ''}
    </div>
  `).join('');
}

// ========== صفحة الأوامر ==========
function renderCommandsPage(data) {
  const container = document.getElementById('commandsContainer');
  if (!container || !data.commands) return;
  
  const searchTerm = (document.getElementById('commandSearch')?.value || '').toLowerCase();
  
  let html = '';
  data.commands.forEach(cat => {
    const filteredItems = cat.items.filter(item => {
      if (!searchTerm) return true;
      return item.cmd.toLowerCase().includes(searchTerm) ||
             item.desc.toLowerCase().includes(searchTerm) ||
             item.level.toLowerCase().includes(searchTerm);
    });
    
    if (filteredItems.length === 0) return;
    
    html += `
      <div class="card">
        <h2 class="section-title">${cat.icon || '📌'} ${cat.category}</h2>
        ${filteredItems.map(item => `
          <div class="command-item">
            <code class="command-code" onclick="copyCommand('${item.cmd.replace(/'/g, "\\'")}')" title="اضغط للنسخ">${item.cmd}</code>
            <div class="command-desc">
              <div>${item.desc}</div>
              <small style="color: var(--text-muted);">الاستخدام: <code>${item.usage}</code></small>
            </div>
            <span class="command-level">${item.level}</span>
          </div>
        `).join('')}
      </div>
    `;
  });
  
  if (!html) {
    html = '<div class="loading">🔍 لا توجد نتائج مطابقة</div>';
  }
  
  container.innerHTML = html;
}

// نسخ الأمر
function copyCommand(cmd) {
  navigator.clipboard.writeText(cmd).then(() => {
    showToast(`✅ تم نسخ: ${cmd}`);
  }).catch(() => {
    // fallback
    const ta = document.createElement('textarea');
    ta.value = cmd;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast(`✅ تم نسخ: ${cmd}`);
  });
}

// ========== صفحة الانترو ==========
function renderIntrosPage(data) {
  const container = document.getElementById('introsContainer');
  if (!container || !data.intros) return;
  
  container.innerHTML = `
    <div class="intro-grid">
      ${data.intros.map(i => `
        <div class="intro-card" onclick="openLightbox('${i.image}')">
          <img src="${i.image}" alt="${i.title}" onerror="this.src='https://via.placeholder.com/400x200/151a3a/00ff88?text=MTA'">
          <div class="intro-card-body">
            <div class="intro-card-title">${i.title}</div>
            <div class="intro-card-desc">${i.description || ''}</div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function openLightbox(src) {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.querySelector('img').src = src;
  lb.classList.add('active');
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (lb) lb.classList.remove('active');
}

// ========== Toast ==========
function showToast(message, isError = false) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  
  const toast = document.createElement('div');
  toast.className = 'toast' + (isError ? ' error' : '');
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => toast.remove(), 3000);
}

// ========== تهيئة الصفحة ==========
document.addEventListener('DOMContentLoaded', () => {
  // ربط البحث في الأوامر
  const searchInput = document.getElementById('commandSearch');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      if (window.appData) renderCommandsPage(window.appData);
    });
  }
  
  // Lightbox close
  const lb = document.getElementById('lightbox');
  if (lb) {
    lb.addEventListener('click', (e) => {
      if (e.target === lb || e.target.classList.contains('lightbox-close')) {
        closeLightbox();
      }
    });
  }
  
  // ESC لإغلاق Lightbox والشات
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      const win = document.getElementById('chatWindow');
      if (win?.classList.contains('active')) toggleChat();
    }
  });
  
  // رسم أولي
  whenDataReady(renderAll);
});
