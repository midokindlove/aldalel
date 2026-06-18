// ============================================
// الدليل - MTA Commands Guide
// التطبيق الرئيسي
// مع Lightbox لعرض صور الانترو
// ============================================

let currentPage = 'home';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initFloatChat();
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
      
      document.getElementById('navLinks').classList.remove('active');
    });
  });
}

function loadPage(page) {
  currentPage = page;
  const app = document.getElementById('app');
  
  switch(page) {
    case 'home':
      app.innerHTML = renderHomePage();
      break;
    case 'commands':
      app.innerHTML = renderCommandsPage();
      initCommandListeners();
      break;
    case 'rules':
      app.innerHTML = renderRulesPage();
      break;
    case 'intros':
      app.innerHTML = renderIntrosPage();
      initIntrosPage();
      break;
    case 'chat':
      app.innerHTML = renderChatPage();
      initChatPage();
      break;
    case 'admin':
      if (typeof renderAdminPage === 'function') {
        app.innerHTML = renderAdminPage();
        if (typeof initAdminLogin === 'function') {
          initAdminLogin();
        }
      } else {
        app.innerHTML = '<div class="admin-login"><h1>⚙️ لوحة الإدارة</h1><p>جاري التحميل...</p></div>';
      }
      break;
    default:
      app.innerHTML = '<h1>صفحة غير موجودة</h1>';
  }
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// الصفحة الرئيسية
// ============================================

function renderHomePage() {
  const data = dataManager.data.home;
  
  let shortcutsHtml = data.shortcuts.map(shortcut => {
    if (shortcut.url) {
      return `<a href="${shortcut.url}" target="_blank" class="shortcut-card">
        <span class="shortcut-icon">${shortcut.icon}</span>
        <span class="shortcut-title">${shortcut.title}</span>
      </a>`;
    } else {
      return `<div class="shortcut-card" onclick="loadPage('${shortcut.page}')">
        <span class="shortcut-icon">${shortcut.icon}</span>
        <span class="shortcut-title">${shortcut.title}</span>
      </div>`;
    }
  }).join('');
  
  return `
    <div class="hero-section">
      <h1>${data.welcomeMessage}</h1>
      <p>اكتشف جميع الأوامر والقوانين والانترو الخاصة بسيرفر MTA - سان أندرياس</p>
    </div>
    <div class="shortcuts-grid">
      ${shortcutsHtml}
    </div>
  `;
}

// ============================================
// صفحة الأوامر
// ============================================

function renderCommandsPage() {
  return `
    <h1 class="page-title">⌨️ أوامر السيرفر</h1>
    <p class="page-subtitle">اضغط على أي أمر لنسخه تلقائياً</p>
    <div class="search-box">
      <input type="text" id="command-search" placeholder="ابحث عن أمر...">
    </div>
    <div id="commands-results">${renderCommandsList()}</div>
  `;
}

function renderCommandsList() {
  const data = dataManager.data.commands;
  
  return data.sections.map(section => `
    <div class="section-card">
      <div class="section-header">
        <h3>${section.title}</h3>
      </div>
      <div class="commands-list">
        ${section.commands.map(cmd => `
          <div class="command-row" data-command="${cmd.command}">
            <div class="command-box">
              <code class="command-code">${cmd.command}</code>
            </div>
            <div class="desc-box">
              <span class="command-desc">${cmd.description}</span>
            </div>
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
    initCommandListeners();
    return;
  }
  
  const results = dataManager.search(query);
  
  if (results.length === 0) {
    container.innerHTML = '<div class="empty-state">لا توجد نتائج</div>';
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
      <div class="section-card">
        <div class="section-header">
          <h3>${sectionTitle}</h3>
        </div>
        <div class="commands-list">
          ${grouped[sectionTitle].map(cmd => `
            <div class="command-row" data-command="${cmd.command}">
              <div class="command-box">
                <code class="command-code">${cmd.command}</code>
              </div>
              <div class="desc-box">
                <span class="command-desc">${cmd.description}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
  
  container.innerHTML = html;
  initCommandListeners();
}

function initCommandListeners() {
  setTimeout(() => {
    document.querySelectorAll('.command-row').forEach(row => {
      row.addEventListener('click', function() {
        const command = this.getAttribute('data-command');
        copyCommand(command, this);
      });
    });
    
    const searchInput = document.getElementById('command-search');
    if (searchInput) {
      searchInput.addEventListener('input', function() {
        searchCommands(this.value);
      });
    }
  }, 50);
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
  toast.innerHTML = `تم نسخ: <code>${command}</code>`;
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

// ============================================
// صفحة القوانين
// ============================================

function renderRulesPage() {
  const data = dataManager.data.rules;
  
  let sectionsHtml = data.sections.map(section => `
    <div class="section-card">
      <div class="section-header">
        <h3>${section.title}</h3>
      </div>
      <ul class="rules-list">
        ${section.items.map(item => {
          const match = item.match(/^([A-Z0-9\-]+)\s*=\s*(.+)$/);
          if (match) {
            return `<li class="rule-item">
              <span class="rule-icon">✓</span>
              <span class="rule-text"><strong>${match[1]}</strong> = ${match[2]}</span>
            </li>`;
          }
          return `<li class="rule-item">
            <span class="rule-icon">✓</span>
            <span class="rule-text">${item}</span>
          </li>`;
        }).join('')}
      </ul>
    </div>
  `).join('');
  
  return `
    <h1 class="page-title">📜 قوانين السيرفر</h1>
    <p class="page-subtitle">يرجى قراءة القوانين بعناية قبل اللعب في السيرفر</p>
    ${sectionsHtml}
  `;
}

// ============================================
// صفحة الانترو - مع Lightbox
// ============================================

function renderIntrosPage() {
  const data = dataManager.data.intros;
  
  // تجميع الانترو حسب النوع
  const grouped = {};
  data.images.forEach(img => {
    const name = img.name || 'أخرى';
    if (!grouped[name]) {
      grouped[name] = [];
    }
    grouped[name].push(img);
  });
  
  let html = '';
  
  // عرض كل مجموعة
  for (const groupName in grouped) {
    html += `
      <div class="section-card">
        <div class="section-header">
          <h3>🏠 ${groupName} (${grouped[groupName].length})</h3>
        </div>
        <div class="intros-grid">
          ${grouped[groupName].map(img => `
            <div class="intro-card" onclick="openLightbox('${img.url}', '${img.caption.replace(/'/g, "\\'")}')">
              <img src="${img.url}" alt="${img.caption}" loading="lazy">
              <div class="intro-info">
                <h4>${img.caption}</h4>
                <p style="color: var(--primary); font-size: 0.8rem; margin-top: 0.3rem;">👆 اضغط للعرض الكامل</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
  
  return `
    <h1 class="page-title">🎬 الانترو</h1>
    <p class="page-subtitle">صور الانترو الخاصة بالسيرفر - اضغط على أي صورة لعرضها بحجم كامل</p>
    ${html}
  `;
}

function initIntrosPage() {
  // إضافة event listeners للصور
  setTimeout(() => {
    document.querySelectorAll('.intro-card').forEach(card => {
      card.style.cursor = 'pointer';
    });
  }, 50);
}

// ===== Lightbox - عرض الصور بحجم كامل =====

function openLightbox(url, caption) {
  // إنشاء الـ modal
  const modal = document.createElement('div');
  modal.className = 'lightbox-modal';
  modal.id = 'lightbox-modal';
  modal.innerHTML = `
    <div class="lightbox-backdrop" onclick="closeLightbox()"></div>
    <div class="lightbox-content">
      <button class="lightbox-close" onclick="closeLightbox()">✕</button>
      <button class="lightbox-nav lightbox-prev" onclick="navigateLightbox(-1)">‹</button>
      <button class="lightbox-nav lightbox-next" onclick="navigateLightbox(1)">›</button>
      <div class="lightbox-image-container">
        <img src="${url}" alt="${caption}" class="lightbox-image" id="lightbox-image">
      </div>
      <div class="lightbox-caption" id="lightbox-caption">${caption}</div>
    </div>
  `;
  
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
  
  // حفظ البيانات للتنقل
  window.lightboxData = {
    currentUrl: url,
    caption: caption,
    allImages: dataManager.data.intros.images
  };
  
  // إضافة event listener للـ keyboard
  document.addEventListener('keydown', handleLightboxKeys);
  
  // تأثير الظهور
  setTimeout(() => {
    modal.classList.add('active');
  }, 10);
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (modal) {
    modal.classList.remove('active');
    setTimeout(() => {
      modal.remove();
      document.body.style.overflow = '';
    }, 300);
  }
  
  document.removeEventListener('keydown', handleLightboxKeys);
  window.lightboxData = null;
}

function navigateLightbox(direction) {
  if (!window.lightboxData) return;
  
  const { currentUrl, allImages } = window.lightboxData;
  const currentIndex = allImages.findIndex(img => img.url === currentUrl);
  
  if (currentIndex === -1) return;
  
  let newIndex = currentIndex + direction;
  
  // Loop around
  if (newIndex < 0) newIndex = allImages.length - 1;
  if (newIndex >= allImages.length) newIndex = 0;
  
  const newImage = allImages[newIndex];
  
  // تحديث الصورة
  const imgElement = document.getElementById('lightbox-image');
  const captionElement = document.getElementById('lightbox-caption');
  
  if (imgElement && captionElement) {
    imgElement.style.opacity = '0';
    
    setTimeout(() => {
      imgElement.src = newImage.url;
      imgElement.alt = newImage.caption;
      captionElement.textContent = newImage.caption;
      imgElement.style.opacity = '1';
      
      window.lightboxData.currentUrl = newImage.url;
      window.lightboxData.caption = newImage.caption;
    }, 200);
  }
}

function handleLightboxKeys(e) {
  if (e.key === 'Escape') {
    closeLightbox();
  } else if (e.key === 'ArrowLeft') {
    navigateLightbox(1);
  } else if (e.key === 'ArrowRight') {
    navigateLightbox(-1);
  }
}

// ============================================
// صفحة الرد التلقائي
// ============================================

function renderChatPage() {
  return `
    <h1 class="page-title">🤖 الرد التلقائي</h1>
    <p class="page-subtitle">اكتب سؤالك وسيرد عليك المساعد الآلي</p>
    <div class="chat-container">
      <div class="chat-body" id="chat-page-messages">
        <div class="chat-message bot">
          <div class="msg-avatar">🤖</div>
          <div class="msg-bubble">
            <div class="msg-header">المساعد الآلي</div>
            <div class="msg-text"><p>أهلاً! كيف يمكنني مساعدتك؟</p></div>
          </div>
        </div>
      </div>
      <div class="chat-footer">
        <input type="text" id="chat-page-input" placeholder="اكتب سؤالك هنا...">
        <button class="btn" onclick="sendChatPageMessage()">إرسال</button>
      </div>
    </div>
  `;
}

function initChatPage() {
  const input = document.getElementById('chat-page-input');
  if (input) {
    input.focus();
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
  
  const messagesContainer = document.getElementById('chat-page-messages');
  const typingDiv = document.createElement('div');
  typingDiv.className = 'chat-message bot';
  typingDiv.id = 'typing-indicator';
  typingDiv.innerHTML = `
    <div class="msg-avatar">🤖</div>
    <div class="msg-bubble">
      <div class="msg-header">المساعد الآلي</div>
      <div class="msg-text"><div class="typing-indicator"><span></span><span></span><span></span></div></div>
    </div>
  `;
  messagesContainer.appendChild(typingDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
  
  setTimeout(() => {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) typingIndicator.remove();
    
    const reply = dataManager.getAutoReply(message);
    addChatPageMessage(reply, 'bot');
  }, 700);
}

function addChatPageMessage(text, sender) {
  const messagesContainer = document.getElementById('chat-page-messages');
  if (!messagesContainer) return;
  
  const messageDiv = document.createElement('div');
  messageDiv.className = `chat-message ${sender}`;
  
  if (sender === 'bot') {
    messageDiv.innerHTML = `
      <div class="msg-avatar">🤖</div>
      <div class="msg-bubble">
        <div class="msg-header">المساعد الآلي</div>
        <div class="msg-text">${text}</div>
      </div>
    `;
  } else {
    messageDiv.innerHTML = `
      <div class="msg-avatar">👤</div>
      <div class="msg-bubble">
        <div class="msg-header">أنت</div>
        <div class="msg-text"><p>${text}</p></div>
      </div>
    `;
  }
  
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// ============================================
// الشات العائم
// ============================================

function initFloatChat() {
  const chatBtn = document.getElementById('floatChatBtn');
  const chatBox = document.getElementById('floatChat');
  const chatClose = document.getElementById('floatChatClose');
  const chatSend = document.getElementById('floatChatSend');
  const chatInput = document.getElementById('floatChatInput');
  
  chatBtn.addEventListener('click', () => {
    chatBox.classList.toggle('hidden');
    if (!chatBox.classList.contains('hidden')) {
      const messagesContainer = document.getElementById('floatChatBody');
      if (messagesContainer.children.length === 0) {
        addFloatChatMessage('أهلاً! كيف يمكنني مساعدتك؟', 'bot');
      }
    }
  });
  
  chatClose.addEventListener('click', () => {
    chatBox.classList.add('hidden');
  });
  
  chatSend.addEventListener('click', sendFloatChatMessage);
  
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendFloatChatMessage();
  });
}

function sendFloatChatMessage() {
  const input = document.getElementById('floatChatInput');
  const message = input.value.trim();
  
  if (!message) return;
  
  addFloatChatMessage(message, 'user');
  input.value = '';
  
  setTimeout(() => {
    const reply = dataManager.getAutoReply(message);
    addFloatChatMessage(reply, 'bot');
  }, 600);
}

function addFloatChatMessage(text, sender) {
  const messagesContainer = document.getElementById('floatChatBody');
  if (!messagesContainer) return;
  
  const messageDiv = document.createElement('div');
  messageDiv.className = `chat-message ${sender}`;
  
  if (sender === 'bot') {
    messageDiv.innerHTML = `
      <div class="msg-avatar">🤖</div>
      <div class="msg-bubble">
        <div class="msg-text">${text}</div>
      </div>
    `;
  } else {
    messageDiv.innerHTML = `
      <div class="msg-bubble">
        <div class="msg-text"><p>${text}</p></div>
      </div>
    `;
  }
  
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// ============================================
// قائمة الموبايل
// ============================================

function initMenuToggle() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}
