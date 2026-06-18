// ============================================
// التطبيق الرئيسي - MTA Commands
// ============================================

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
    <p style="margin-bottom: 2rem; color: #b0b0b0;">اضغط على أي أمر لنسخه تلقائياً 📋</p>
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
      <div class="commands-list">
        ${section.commands.map(cmd => `
          <div class="command-row" data-command="${cmd.command}">
            <div class="command-name">
              <code class="command-code">${cmd.command}</code>
              <span class="copy-hint"> نسخ</span>
            </div>
            <div class="command-desc">${cmd.description}</div>
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
    container.innerHTML = '<p style="text-align: center; color: #b0b0b0; padding: 2rem;">لا توجد نتائج</p>';
    return;
  }
  
  const grouped = {};
  results.forEach(result => {
    if (result.type === 'command') {
      if (!grouped[result.section]) {
        grouped[result.section] = [];
      }
      grouped[result.section].push(result.data);
    }
  });
  
  let html = '';
  for (const sectionTitle in grouped) {
    html += `
      <div class="card">
        <h3>${sectionTitle}</h3>
        <div class="commands-list">
          ${grouped[sectionTitle].map(cmd => `
            <div class="command-row" data-command="${cmd.command}">
              <div class="command-name">
                <code class="command-code">${cmd.command}</code>
                <span class="copy-hint">📋 نسخ</span>
              </div>
              <div class="command-desc">${cmd.description}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
  
  container.innerHTML = html;
  
  // إضافة event listeners للعناصر الجديدة
  document.querySelectorAll('.command-row').forEach(row => {
    row.addEventListener('click', function() {
      const command = this.getAttribute('data-command');
      copyCommand(command, this);
    });
  });
}

function copyCommand(command, element) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(command).then(() => {
      showCopyFeedback(element, command);
    }).catch(() => {
      fallbackCopy(command, element);
    });
  } else {
    fallbackCopy(command, element);
  }
}

function fallbackCopy(text, element) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  
  try {
    document.execCommand('copy');
    showCopyFeedback(element, text);
  } catch (err) {
    console.error('فشل النسخ:', err);
  }
  
  document.body.removeChild(textarea);
}

function showCopyFeedback(element, command) {
  const existing = document.querySelector('.copy-toast');
  if (existing) existing.remove();
  
  element.classList.add('copied');
  
  const toast = document.createElement('div');
  toast.className = 'copy-toast';
  toast.innerHTML = `✅ تم نسخ: <code>${command}</code>`;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    element.classList.remove('copied');
  }, 600);
  
  setTimeout(() => {
    if (toast.parentNode) {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }
  }, 2000);
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
    <p style="margin-bottom: 2rem; color: #b0b0b0;">اكتب سؤالك وسيرد عليك المساعد الآلي</p>
    <div class="card" style="height: 500px; display: flex; flex-direction: column;">
      <div id="chat-page-messages" class="chat-messages" style="flex: 1; overflow-y: auto; margin-bottom: 1rem;">
        <div class="chat-message bot">أهلاً! أنا المساعد الآلي، كيف يمكنني مساعدتك؟</div>
      </div>
      <div style="display: flex; gap: 0.5rem;">
        <input type="text" id="chat-page-input" placeholder="اكتب سؤالك هنا..." style="flex: 1; margin-bottom: 0;">
        <button class="btn" onclick="sendChatPageMessage()">إرسال</button>
      </div>
    </div>
  </div>`;
}

function initChatPage() {
  const input = document.getElementById('chat-page-input');
  if (input) {
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendChatPageMessage();
    });
  }
}

function sendChatPageMessage() {
  const input = document.getElementById('chat-page-input');
  if (!input) return;
  
  const message = input.value.trim();
  if (!message) return;
  
  addChatPageMessage(message, 'user');
  input.value = '';
  
  setTimeout(() => {
    const reply = dataManager.getAutoReply(message);
    addChatPageMessage(reply, 'bot');
  }, 500);
}

function addChatPageMessage(text, sender) {
  const messagesContainer = document.getElementById('chat-page-messages');
  if (!messagesContainer) return;
  
  const messageDiv = document.createElement('div');
  messageDiv.className = `chat-message ${sender}`;
  messageDiv.textContent = text;
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function initChat() {
  const chatToggle = document.getElementById('chat-toggle');
  const chatBox = document.getElementById('chat-box');
  const chatClose = document.getElementById('chat-close');
  const chatSend = document.getElementById('chat-send');
  const chatInput = document.getElementById('chat-input-field');
  
  chatToggle.addEventListener('click', () => {
    chatBox.classList.toggle('hidden');
    if (!chatBox.classList.contains('hidden')) {
      const messagesContainer = document.getElementById('chat-messages');
      if (messagesContainer.children.length === 0) {
        addChatMessage('أهلاً! أنا المساعد الآلي، كيف يمكنني مساعدتك؟', 'bot');
      }
    }
  });
  
  chatClose.addEventListener('click', () => {
    chatBox.classList.add('hidden');
  });
  
  chatSend.addEventListener('click', sendChatMessage);
  
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendChatMessage();
  });
}

function sendChatMessage() {
  const input = document.getElementById('chat-input-field');
  const message = input.value.trim();
  
  if (!message) return;
  
  addChatMessage(message, 'user');
  input.value = '';
  
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

function initMenuToggle() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// إضافة event listeners للأوامر عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelectorAll('.command-row').forEach(row => {
      row.addEventListener('click', function() {
        const command = this.getAttribute('data-command');
        copyCommand(command, this);
      });
    });
  }, 100);
});
