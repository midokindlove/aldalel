let currentPage = 'home';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initChat();
  initMenuToggle();
  loadPage('home');
});

function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.dataset.page;
      loadPage(page);
      
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      
      document.querySelector('.nav-links').classList.remove('active');
    });
  });
}

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
      if (typeof renderAdminPage === 'function') {
        content.innerHTML = renderAdminPage();
        if (typeof initAdminLogin === 'function') {
          initAdminLogin();
        }
      } else {
        content.innerHTML = '<div class="page active"><h1>⚙️ لوحة الإدارة</h1><p>جاري التحميل...</p></div>';
      }
      break;
    default:
      content.innerHTML = '<h1>صفحة غير موجودة</h1>';
  }
}

function renderHomePage() {
  const data = dataManager.data.home;
  
  let shortcutsHtml = data.shortcuts.map(shortcut => {
    if (shortcut.url) {
      return `<a href="${shortcut.url}" target="_blank" class="card" style="text-decoration: none; color: inherit;">
        <div style="text-align: center;">
          <div style="font-size: 3rem; margin-bottom: 1rem;">${shortcut.icon}</div>
          <h3>${shortcut.title}</h3>
        </div>
      </a>`;
    } else {
      return `<div class="card" onclick="loadPage('${shortcut.page}')" style="cursor: pointer;">
        <div style="text-align: center;">
          <div style="font-size: 3rem; margin-bottom: 1rem;">${shortcut.icon}</div>
          <h3>${shortcut.title}</h3>
        </div>
      </div>`;
    }
  }).join('');
  
  return `<div class="page active">
    <h1>🎮 ${data.welcomeMessage}</h1>
    <p style="font-size: 1.2rem; margin-bottom: 2rem; color: #b0b0b0;">
      اكتشف جميع الأوامر والقوانين الخاصة بسيرفر MTA - سان أندرياس
    </p>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
      ${shortcutsHtml}
    </div>
  </div>`;
}

function renderRulesPage() {
  const data = dataManager.data.rules;
  
  let sectionsHtml = data.sections.map(section => `
    <div class="card">
      <h3>${section.title}</h3>
      <ul style="list-style: none; padding: 0;">
        ${section.items.map((item) => `
          <li style="padding: 0.5rem; border-bottom: 1px solid rgba(0, 255, 136, 0.1);">✓ ${item}</li>
        `).join('')}
      </ul>
    </div>
  `).join('');
  
  return `<div class="page active">
    <h1>📜 قوانين السيرفر</h1>
    <p style="margin-bottom: 2rem; color: #b0b0b0;">يرجى قراءة القوانين بعناية قبل اللعب في السيرفر</p>
    ${sectionsHtml}
  </div>`;
}

function renderCommandsPage() {
  return `<div class="page active">
    <h1>⌨️ أوامر السيرفر</h1>
    <div class="search-box">
      <input type="text" id="command-search" placeholder="🔍 ابحث عن أمر..." oninput="searchCommands(this.value)">
    </div>
    <div id="commands-results">${renderCommandsList()}</div>
  </div>`;
}

function renderCommandsList() {
  const data = dataManager.data.commands;
  
  return data.sections.map(section => `
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
}

function searchCommands(query) {
  const container = document.getElementById('commands-results');
  if (!container) return;
  
  if (query.trim() === '') {
    container.innerHTML = renderCommandsList();
    return;
  }
  
  const results = dataManager.search(query);
  
  if (results.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: #b0b0b0;">لا توجد نتائج</p>';
    return;
  }
  
  let html = results.map(result => {
    if (result.type === 'command') {
      return `<div class="card">
        <h3>${result.section}</h3>
        <div class="command-item">
          <div class="command-code">${result.data.command}</div>
          <p style="margin-top: 0.5rem; color: #b0b0b0;">${result.data.description}</p>
        </div>
      </div>`;
    } else {
      return `<div class="card">
        <h3>${result.section}</h3>
        <p>✓ ${result.data}</p>
      </div>`;
    }
  }).join('');
  
  container.innerHTML = html;
}

function renderIntrosPage() {
  const data = dataManager.data.intros;
  
  let imagesHtml = data.images.map(img => `
    <div>
      <img src="${img.url}" alt="${img.caption}">
      <p style="margin-top: 0.5rem; text-align: center; color: #b0b0b0;">${img.caption}</p>
    </div>
  `).join('');
  
  return `<div class="page active">
    <h1>🎬 الانترو</h1>
    <p style="margin-bottom: 2rem; color: #b0b0b0;">صور الانترو الخاصة بالسيرفر</p>
    <div class="image-grid">${imagesHtml}</div>
  </div>`;
}

function renderChatPage() {
  return `<div class="page active">
    <h1>🤖 الرد التلقائي</h1>
    <p style="margin-bottom: 2rem; color: #b0b0b0;">اكتب سؤالك وسيرد عليك
