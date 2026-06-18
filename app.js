// ============================================
// صفحة الرد التلقائي - نسخة مبسطة
// ============================================

function renderChatPage() {
  return `
    <div class="page active">
      <h1>🤖 الرد التلقائي</h1>
      <p style="margin-bottom: 2rem; color: #b0b0b0;">
        اكتب سؤالك وسيرد عليك المساعد الآلي
      </p>
      
      <!-- واجهة الشات -->
      <div class="card" style="height: 500px; display: flex; flex-direction: column;">
        <div id="chat-page-messages" class="chat-messages" style="flex: 1; overflow-y: auto; margin-bottom: 1rem;">
          <div class="chat-message bot">
            أهلاً! أنا المساعد الآلي، كيف يمكنني مساعدتك؟
          </div>
        </div>
        <div style="display: flex; gap: 0.5rem;">
          <input type="text" id="chat-page-input" placeholder="اكتب سؤالك هنا..." style="flex: 1; margin-bottom: 0;">
          <button class="btn" onclick="sendChatPageMessage()">إرسال</button>
        </div>
      </div>
    </div>
  `;
}
