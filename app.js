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
     
