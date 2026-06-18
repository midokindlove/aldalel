/* ============================================
   chatbot.js
   منطق البوت الذكي للرد التلقائي
============================================ */

const ChatBot = {
  // البحث عن إجابة للسؤال
  getResponse(message, data) {
    if (!data || !message) return null;
    
    const msg = message.trim().toLowerCase();
    
    // 1. البحث في الاختصارات shortcuts
    if (data.shortcuts && Array.isArray(data.shortcuts)) {
      for (const s of data.shortcuts) {
        if (msg.includes(s.keyword.toLowerCase())) {
          return s.response;
        }
      }
    }
    
    // 2. البحث في الأوامر
    if (data.commands && Array.isArray(data.commands)) {
      for (const cat of data.commands) {
        if (!cat.items) continue;
        for (const item of cat.items) {
          const cmdName = item.cmd.toLowerCase().replace('/', '');
          // إذا كتب الأمر كاملاً أو جزء كبير منه
          if (msg.includes(cmdName) || msg.includes(item.cmd.toLowerCase())) {
            return `📌 <b>${item.cmd}</b>\n${item.desc}\n🎯 الاستخدام: <code>${item.usage}</code>\n👤 المستوى: ${item.level}`;
          }
        }
      }
    }
    
    // 3. البحث في القوانين
    if (msg.includes('قانون') || msg.includes('قوانين') || msg.includes('قاعده') || msg.includes('قواعد')) {
      const list = data.rules.slice(0, 5).map(r => `${r.id}. ${r.title}`).join('\n');
      return `⚖️ <b>أهم القوانين:</b>\n${list}\n\n📖 راجع صفحة القوانين للتفاصيل الكاملة.`;
    }
    
    // 4. البحث في الانترو
    if (msg.includes('انترو') || msg.includes('صور') || msg.includes('صوره')) {
      return `🎬 لدينا ${data.intros?.length || 0} انترو في المعرض. تفضل بزيارة صفحة الانترو لمشاهدتها.`;
    }
    
    // 5. كلمات الترحيب
    const greetings = ['مرحبا', 'اهلا', 'السلام', 'هاي', 'صباح', 'مساء'];
    for (const g of greetings) {
      if (msg.includes(g)) {
        return data.chatbot?.greeting || '👋 أهلاً وسهلاً! كيف أقدر أساعدك؟';
      }
    }
    
    // 6. المساعدة
    if (msg.includes('مساعده') || msg.includes('مساعدة') || msg.includes('help')) {
      return `🆘 <b>أقدر أساعدك في:</b>\n• اكتب "سيرفر" للحصول على رابط السيرفر\n• اكتب "ديسكورد" لرابط الديسكورد\n• اكتب "قوانين" لعرض القوانين\n• اكتب "اوامر" لصفحة الأوامر\n• اكتب اسم أي أمر مثل "heal" أو "car"`;
    }
    
    // 7. رسالة عدم الفهم
    return data.chatbot?.fallback || '🤔 عذراً، لم أفهم سؤالك.';
  },
  
  // إضافة رسالة للشات
  addMessage(container, text, isUser = false) {
    const div = document.createElement('div');
    div.className = 'chat-message ' + (isUser ? 'user' : 'bot');
    div.innerHTML = text.replace(/\n/g, '<br>');
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
  },
  
  // إرسال رسالة
  send(input, messagesContainer, data) {
    const text = input.value.trim();
    if (!text) return;
    
    this.addMessage(messagesContainer, this.escapeHtml(text), true);
    input.value = '';
    
    // تأخير بسيط ليبدو طبيعياً
    setTimeout(() => {
      const response = this.getResponse(text, data);
      this.addMessage(messagesContainer, response, false);
    }, 400);
  },
  
  // تنظيف HTML لمنع XSS
  escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
};

// دوال مساعدة عامة
function toggleChat() {
  const win = document.getElementById('chatWindow');
  if (!win) return;
  win.classList.toggle('active');
  
  // رسالة ترحيب عند أول فتح
  if (win.classList.contains('active') && !win.dataset.welcomed) {
    win.dataset.welcomed = 'true';
    const messages = document.getElementById('chatMessages');
    whenDataReady(data => {
      ChatBot.addMessage(messages, data.chatbot?.greeting || '👋 أهلاً بك!', false);
    });
  }
}

function sendChatMessage() {
  const input = document.getElementById('chatInput');
  const messages = document.getElementById('chatMessages');
  if (!input || !messages || !window.appData) return;
  ChatBot.send(input, messages, window.appData);
}

// ربط زر الشات العائم
document.addEventListener('DOMContentLoaded', () => {
  const fab = document.getElementById('chatFab');
  if (fab) fab.addEventListener('click', toggleChat);
});
