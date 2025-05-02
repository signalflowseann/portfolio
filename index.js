const PAGES = {
  'index.html': 'home',
  'experience.html': 'experience',
  'projects.html': 'projects',
  'about.html': 'about'
}

const setActiveNavItem = () => {
  const currentPage = window.location.pathname.split('/').pop();
  const activeNavId = PAGES[currentPage];
  const navItem = activeNavId ? document.getElementById(activeNavId) : PAGES['index.html'];
  navItem.classList.add('rainbow-gradient-background');
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', setActiveNavItem);