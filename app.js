// ============================================
// صفحة الأوامر - محسّنة مع نسخ
// ============================================

function renderCommandsPage() {
  return `
    <div class="page active">
      <h1>⌨️ أوامر السيرفر</h1>
      <p style="margin-bottom: 2rem; color: #b0b0b0;">
        اضغط على أي أمر لنسخه تلقائياً 📋
      </p>
      
      <div class="search-box">
        <input type="text" id="command-search" placeholder="🔍 ابحث عن أمر..." oninput="searchCommands(this.value)">
      </div>
      
      <div id="commands-results">
        ${renderCommandsList()}
      </div>
    </div>
  `;
}

function renderCommandsList() {
  const data = dataManager.data.commands;
  
  return data.sections.map(section => `
    <div class="card">
      <h3>${section.title}</h3>
      <div class="commands-list">
        ${section.commands.map(cmd => `
          <div class="command-row" onclick="copyCommand('${cmd.command.replace(/'/g, "\\'")}', this)">
            <div class="command-name">
              <code class="command-code">${cmd.command}</code>
              <span class="copy-hint">📋 نسخ</span>
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
  
  // تجميع النتائج حسب القسم
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
            <div class="command-row" onclick="copyCommand('${cmd.command.replace(/'/g, "\\'")}', this)">
              <div class="command-name">
                <code class="command-code">${cmd.command}</code>
                <span class="copy-hint"> نسخ</span>
              </div>
              <div class="command-desc">${cmd.description}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
  
  container.innerHTML = html;
}

// ============================================
// نسخ الأمر
// ============================================

function copyCommand(command, element) {
  // نسخ إلى الحافظة
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
  // إزالة التأكيد السابق إن وجد
  const existing = document.querySelector('.copy-toast');
  if (existing) existing.remove();
  
  // تغيير مظهر الصف مؤقتاً
  element.classList.add('copied');
  
  // إنشاء إشعار منبثق
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
