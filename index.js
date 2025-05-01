const setActiveNavItem = () => {
  const currentPage = window.location.pathname.split('/').pop();

  const PAGES = {
    'index.html': 'home',
    'experience.html': 'experience',
    'projects.html': 'projects',
  };

  const activeNavId = PAGES[currentPage];

  // If a matching nav-item ID is found, add the 'active' class
  if (activeNavId) {
    const activeNavItem = document.getElementById(activeNavId);
    if (activeNavItem) {
      activeNavItem.classList.add('rainbow-gradient-background');
    }
  }
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', setActiveNavItem);