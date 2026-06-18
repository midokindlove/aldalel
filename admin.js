/* ============================================
   إعادة تصميم كامل - MTA Commands
   تصميم احترافي حديث بـ Glassmorphism
   ============================================ */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary: #00ff88;
  --primary-dark: #00cc6a;
  --secondary: #00d4ff;
  --danger: #ff4757;
  --danger-dark: #ff3838;
  --bg-dark: #0a0e27;
  --bg-card: rgba(26, 26, 46, 0.7);
  --bg-hover: rgba(0, 255, 136, 0.05);
  --text-primary: #ffffff;
  --text-secondary: #b0b0b0;
  --border: rgba(0, 255, 136, 0.2);
  --shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  --shadow-glow: 0 0 30px rgba(0, 255, 136, 0.3);
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #0a0e27 0%, #1a1a2e 50%, #16213e 100%);
  color: var(--text-primary);
  min-height: 100vh;
  direction: rtl;
  line-height: 1.6;
  position: relative;
  overflow-x: hidden;
}

/* خلفية متحركة */
body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 50%, rgba(0, 255, 136, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 20%, rgba(255, 71, 87, 0.05) 0%, transparent 50%);
  pointer-events: none;
  z-index: 0;
}

/* ============================================
   شريط التنقل
   ============================================ */

.navbar {
  background: rgba(10, 14, 39, 0.95);
  backdrop-filter: blur(20px);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  border-bottom: 2px solid var(--primary);
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(0, 255, 136, 0.5);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 0.5rem;
}

.nav-links a {
  color: var(--text-secondary);
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  font-weight: 500;
  position: relative;
  overflow: hidden;
}

.nav-links a::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 255, 136, 0.2), transparent);
  transition: left 0.5s;
}

.nav-links a:hover::before {
  left: 100%;
}

.nav-links a:hover,
.nav-links a.active {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: var(--bg-dark);
  box-shadow: 0 4px 20px rgba(0, 255, 136, 0.4);
  transform: translateY(-2px);
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: var(--primary);
  font-size: 1.8rem;
  cursor: pointer;
  transition: transform 0.3s;
}

.menu-toggle:hover {
  transform: scale(1.1);
}

/* ============================================
   المحتوى الرئيسي
   ============================================ */

#app-content {
  max-width: 1400px;
  margin: 2rem auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.page {
  display: none;
  animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.page.active {
  display: block;
}

@keyframes fadeInUp {
  from { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

/* ============================================
   العناوين
   ============================================ */

h1, h2, h3 {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

h1 { 
  font-size: 3rem;
  text-shadow: 0 0 40px rgba(0, 255, 136, 0.3);
}

h2 { 
  font-size: 2.2rem;
}

h3 { 
  font-size: 1.6rem;
}

/* ============================================
   البطاقات
   ============================================ */

.card {
  background: var(--bg-card);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--shadow);
  position: relative;
  overflow: hidden;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  transform: scaleX(0);
  transition: transform 0.4s;
}

.card:hover::before {
  transform: scaleX(1);
}

.card:hover {
  border-color: var(--primary);
  box-shadow: var(--shadow), var(--shadow-glow);
  transform: translateY(-8px);
}

/* ============================================
   الأزرار
   ============================================ */

.btn {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: var(--bg-dark);
  border: none;
  padding: 0.875rem 2rem;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 1rem;
  box-shadow: 0 4px 15px rgba(0, 255, 136, 0.3);
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.btn:hover::before {
  width: 300px;
  height: 300px;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 255, 136, 0.5);
}

.btn:active {
  transform: translateY(-1px);
}

.btn-danger {
  background: linear-gradient(135deg, var(--danger), var(--danger-dark));
  box-shadow: 0 4px 15px rgba(255, 71, 87, 0.3);
}

.btn-danger:hover {
  box-shadow: 0 8px 25px rgba(255, 71, 87, 0.5);
}

.btn-sm {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

/* ============================================
   حقول الإدخال
   ============================================ */

input, textarea, select {
  background: rgba(10, 14, 39, 0.8);
  backdrop-filter: blur(10px);
  border: 2px solid var(--border);
  color: var(--text-primary);
  padding: 0.875rem 1.25rem;
  border-radius: 10px;
  width: 100%;
  font-size: 1rem;
  margin-bottom: 1rem;
  transition: all 0.3s;
}

input:focus, textarea:focus, select:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(0, 255, 136, 0.1);
  background: rgba(10, 14, 39, 0.95);
}

input::placeholder, textarea::placeholder {
  color: var(--text-secondary);
}

/* ============================================
   الشات العائم
   ============================================ */

#chat-toggle {
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border: none;
  font-size: 2rem;
  cursor: pointer;
  box-shadow: 0 8px 30px rgba(0, 255, 136, 0.5);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 999;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 8px 30px rgba(0, 255, 136, 0.5);
  }
  50% {
    box-shadow: 0 8px 50px rgba(0, 255, 136, 0.8);
  }
}

#chat-toggle:hover {
  transform: scale(1.15) rotate(10deg);
  box-shadow: 0 12px 40px rgba(0, 255, 136, 0.7);
}

.chat-box {
  position: fixed;
  bottom: 7rem;
  left: 2rem;
  width: 400px;
  height: 550px;
  background: rgba(10, 14, 39, 0.98);
  backdrop-filter: blur(20px);
  border: 2px solid var(--primary);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  z-index: 998;
  box-shadow: 0 20px 60px rgba(0, 255, 136, 0.3);
  animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.chat-box.hidden {
  display: none;
}

.chat-header {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: var(--bg-dark);
  padding: 1.25rem;
  border-radius: 18px 18px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  font-size: 1.1rem;
}

.chat-header button {
  background: rgba(0, 0, 0, 0.2);
  border: none;
  color: var(--bg-dark);
  font-size: 1.5rem;
  cursor: pointer;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.chat-header button:hover {
  background: rgba(0, 0, 0, 0.3);
  transform: rotate(90deg);
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
}

.chat-message {
  margin-bottom: 1rem;
  padding: 1rem 1.25rem;
  border-radius: 15px;
  max-width: 80%;
  animation: messageSlide 0.3s ease;
  word-wrap: break-word;
}

@keyframes messageSlide {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.chat-message.user {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: var(--bg-dark);
  margin-left: auto;
  text-align: left;
  font-weight: 600;
}

.chat-message.bot {
  background: rgba(26, 26, 46, 0.8);
  border: 1px solid var(--border);
  margin-right: auto;
  text-align: right;
}

.chat-input {
  display: flex;
  padding: 1.25rem;
  gap: 0.75rem;
  border-top: 1px solid var(--border);
  background: rgba(10, 14, 39, 0.5);
}

.chat-input input {
  flex: 1;
  margin-bottom: 0;
}

/* ============================================
   القائمة الجانبية للموبايل
   ============================================ */

@media (max-width: 768px) {
  .nav-links {
    display: none;
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    background: rgba(10, 14, 39, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    padding: 1rem;
    gap: 0.5rem;
    border-bottom: 2px solid var(--primary);
  }

  .nav-links.active {
    display: flex;
  }

  .menu-toggle {
    display: block;
  }

  .chat-box {
    width: calc(100% - 2rem);
    left: 1rem;
    right: 1rem;
  }

  h1 { font-size: 2rem; }
  h2 { font-size: 1.6rem; }
}

/* ============================================
   قائمة الأوامر
   ============================================ */

.command-item {
  background: rgba(26, 26, 46, 0.6);
  padding: 1.25rem;
  margin-bottom: 0.75rem;
  border-radius: 10px;
  border-right: 4px solid var(--primary);
  transition: all 0.3s;
}

.command-item:hover {
  background: rgba(26, 26, 46, 0.8);
  border-right-width: 6px;
  transform: translateX(-5px);
}

.command-code {
  font-family: 'Courier New', monospace;
  background: linear-gradient(135deg, rgba(0, 255, 136, 0.2), rgba(0, 212, 255, 0.2));
  padding: 0.5rem 1rem;
  border-radius: 6px;
  color: var(--primary);
  font-weight: 700;
  display: inline-block;
  border: 1px solid var(--border);
}

/* ============================================
   لوحة الإدارة - تصميم احترافي
   ============================================ */

.admin-login {
  max-width: 450px;
  margin: 4rem auto;
  text-align: center;
  background: var(--bg-card);
  backdrop-filter: blur(20px);
  padding: 3rem;
  border-radius: 20px;
  border: 2px solid var(--border);
  box-shadow: var(--shadow);
}

.admin-topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1.5rem 2rem;
  background: var(--bg-card);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
}

.admin-layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 2rem;
  min-height: calc(100vh - 200px);
}

/* Sidebar */
.admin-sidebar {
  background: var(--bg-card);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  border: 1px solid var(--border);
  padding: 1.5rem;
  height: fit-content;
  position: sticky;
  top: 100px;
  box-shadow: var(--shadow);
}

.sidebar-title {
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--border);
  font-weight: 700;
}

.sidebar-btn {
  width: 100%;
  background: transparent;
  border: none;
  color: var(--text-secondary);
  padding: 1rem 1.25rem;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  text-align: right;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.sidebar-btn:hover {
  background: var(--bg-hover);
  color: var(--primary);
  transform: translateX(-5px);
}

.sidebar-btn.active {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: var(--bg-dark);
  font-weight: 700;
  box-shadow: 0 4px 15px rgba(0, 255, 136, 0.3);
}

.sidebar-icon {
  font-size: 1.5rem;
}

/* Content Area */
.admin-content {
  min-height: 600px;
}

.admin-panel {
  background: var(--bg-card);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  border: 1px solid var(--border);
  padding: 2rem;
  box-shadow: var(--shadow);
  margin-bottom: 2rem;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid var(--border);
}

.panel-header h2 {
  margin: 0;
}

/* Search Box */
.search-box-inline {
  position: relative;
}

.search-box-inline input {
  padding-right: 3rem;
  margin: 0;
  width: 300px;
}

/* Tabs */
.tabs-container {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  padding: 1rem;
  background: rgba(10, 14, 39, 0.5);
  border-radius: 12px;
  border: 1px solid var(--border);
}

.tab-btn {
  background: transparent;
  border: 2px solid var(--border);
  color: var(--text-secondary);
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s;
  font-weight: 600;
}

.tab-btn:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.tab-btn.active {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  border-color: var(--primary);
  color: var(--bg-dark);
  box-shadow: 0 4px 15px rgba(0, 255, 136, 0.3);
}

/* Inline Forms */
.inline-form {
  background: rgba(10, 14, 39, 0.5);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid var(--border);
  margin-bottom: 2rem;
}

.inline-form h3 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.inline-form.compact {
  padding: 1rem;
  margin-bottom: 1rem;
}

.form-row {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.form-row input,
.form-row textarea {
  margin-bottom: 0;
}

/* Data Tables */
.data-table {
  background: rgba(10, 14, 39, 0.3);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border);
}

.table-header {
  display: flex;
  padding: 1rem 1.5rem;
  background: rgba(0, 255, 136, 0.1);
  font-weight: 700;
  color: var(--primary);
  border-bottom: 2px solid var(--border);
}

.table-row {
  display: flex;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--border);
  transition: all 0.3s;
  align-items: center;
}

.table-row:last-child {
  border-bottom: none;
}

.table-row:hover {
  background: var(--bg-hover);
}

/* Items List */
.items-list {
  margin-top: 1rem;
}

.list-item {
  display: flex;
  align-items: center;
  padding: 1rem;
  background: rgba(10, 14, 39, 0.3);
  border-radius: 8px;
  margin-bottom: 0.5rem;
  border: 1px solid var(--border);
  transition: all 0.3s;
}

.list-item:hover {
  background: var(--bg-hover);
  border-color: var(--primary);
  transform: translateX(-5px);
}

.list-item-icon {
  color: var(--primary);
  font-size: 1.5rem;
  margin-left: 1rem;
}

.list-item-text {
  flex: 1;
}

/* Section Blocks */
.section-block {
  background: rgba(10, 14, 39, 0.3);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid var(--border);
}

.section-block-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--border);
}

.section-block-header h3 {
  margin: 0;
}

/* Image Grid Admin */
.image-grid-admin {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.image-card-admin {
  background: rgba(10, 14, 39, 0.5);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border);
  transition: all 0.3s;
}

.image-card-admin:hover {
  border-color: var(--primary);
  transform: translateY(-5px);
  box-shadow: var(--shadow-glow);
}

.image-card-admin img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.image-card-info {
  padding: 1rem;
}

.image-card-info strong {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--primary);
}

.image-card-info small {
  color: var(--text-secondary);
  font-size: 0.875rem;
  word-break: break-all;
}

/* Tools Grid */
.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.tool-card {
  background: rgba(10, 14, 39, 0.5);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  border: 1px solid var(--border);
  transition: all 0.3s;
}

.tool-card:hover {
  border-color: var(--primary);
  transform: translateY(-5px);
  box-shadow: var(--shadow-glow);
}

.tool-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.tool-card h3 {
  margin-bottom: 0.5rem;
}

.tool-card p {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

/* Keyword Tags */
.keyword-tag {
  background: linear-gradient(135deg, rgba(0, 255, 136, 0.2), rgba(0, 212, 255, 0.2));
  color: var(--primary);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  border: 1px solid var(--border);
  display: inline-block;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 3rem;
  color: var(--text-secondary);
  font-size: 1.1rem;
}

/* Results Info */
.results-info {
  margin-top: 1.5rem;
  padding: 1rem;
  background: rgba(0, 255, 136, 0.1);
  border-radius: 8px;
  text-align: center;
  color: var(--primary);
  font-weight: 600;
}

/* Info Box */
.info-box {
  background: rgba(0, 212, 255, 0.1);
  border: 2px solid rgba(0, 212, 255, 0.3);
  border-radius: 12px;
  padding: 1.5rem;
  margin-top: 2rem;
}

.info-box h3 {
  color: var(--secondary);
  margin-bottom: 1rem;
}

.info-box ul {
  list-style: none;
  padding: 0;
}

.info-box li {
  padding: 0.5rem 0;
  padding-right: 1.5rem;
  position: relative;
}

.info-box li::before {
  content: '→';
  position: absolute;
  right: 0;
  color: var(--secondary);
  font-weight: bold;
}

/* Images Grid */
.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.image-grid img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 12px;
  border: 2px solid var(--border);
  transition: all 0.4s;
}

.image-grid img:hover {
  border-color: var(--primary);
  transform: scale(1.05);
  box-shadow: var(--shadow-glow);
}

/* Search Box */
.search-box {
  position: relative;
  margin-bottom: 2rem;
}

.search-box input {
  padding-right: 3.5rem;
  font-size: 1.1rem;
}

/* Stats Cards */
.admin-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: var(--bg-card);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s;
}

.stat-card:hover {
  border-color: var(--primary);
  transform: translateY(-5px);
  box-shadow: var(--shadow-glow);
}

.stat-icon {
  font-size: 3rem;
}

.stat-info {
  flex: 1;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary);
}

.stat-label {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: var(--bg-dark);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, var(--primary-dark), var(--primary));
}

/* Responsive */
@media (max-width: 1024px) {
  .admin-layout {
    grid-template-columns: 1fr;
  }
  
  .admin-sidebar {
    position: static;
  }
}

@media (max-width: 768px) {
  .panel-header {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
  
  .search-box-inline input {
    width: 100%;
  }
  
  .form-row {
    flex-direction: column;
  }
  
  .table-header,
  .table-row {
    flex-direction: column;
    align-items: stretch;
  }
  
  .table-header > div,
  .table-row > div {
    width: 100% !important;
    margin-bottom: 0.5rem;
  }
}
