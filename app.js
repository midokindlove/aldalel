// ============================================
// صفحة الرد التلقائي - محسّنة
// ============================================

function renderChatPage() {
  return `<div class="page active">
    <h1>🤖 الرد التلقائي</h1>
    <p style="margin-bottom: 2rem; color: #b0b0b0;">اكتب سؤالك وسيرد عليك المساعد الآلي</p>
    
    <div class="chat-page-container">
      <div class="chat-page-messages" id="chat-page-messages">
        <div class="chat-message bot">
          <div class="message-avatar">🤖</div>
          <div class="message-content">
            <strong>المساعد الآلي</strong>
            <p>أهلاً! كيف يمكنني مساعدتك؟</p>
          </div>
        </div>
      </div>
      
      <div class="chat-page-input">
        <input type="text" id="chat-page-input" placeholder="اكتب سؤالك هنا...">
        <button class="btn" onclick="sendChatPageMessage()">إرسال</button>
      </div>
    </div>
  </div>`;
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
  
  // إظهار "جاري الكتابة..."
  const messagesContainer = document.getElementById('chat-page-messages');
  const typingDiv = document.createElement('div');
  typingDiv.className = 'chat-message bot typing';
  typingDiv.id = 'typing-indicator';
  typingDiv.innerHTML = `
    <div class="message-avatar">🤖</div>
    <div class="message-content">
      <strong>المساعد الآلي</strong>
      <div class="typing-dots">
        <span></span><span></span><span></span>
      </div>
    </div>
  `;
  messagesContainer.appendChild(typingDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
  
  setTimeout(() => {
    // حذف مؤشر الكتابة
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) typingIndicator.remove();
    
    const reply = dataManager.getAutoReply(message);
    addChatPageMessage(reply, 'bot');
  }, 800);
}

function addChatPageMessage(text, sender) {
  const messagesContainer = document.getElementById('chat-page-messages');
  if (!messagesContainer) return;
  
  const messageDiv = document.createElement('div');
  messageDiv.className = `chat-message ${sender}`;
  
  if (sender === 'bot') {
    // تنسيق الرد بشكل أفضل مع دعم الأسطر المتعددة
    const formattedText = text.split('\n').map(line => `<p>${line}</p>`).join('');
    
    messageDiv.innerHTML = `
      <div class="message-avatar">🤖</div>
      <div class="message-content">
        <strong>المساعد الآلي</strong>
        <div class="message-text">${formattedText}</div>
      </div>
    `;
  } else {
    messageDiv.innerHTML = `
      <div class="message-content">
        <div class="message-text">${text}</div>
      </div>
      <div class="message-avatar user">👤</div>
    `;
  }
  
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}
