const header = document.querySelector('.header');
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

if (header && navToggle && navList) {
  const closeMenu = () => {
    header.classList.remove('is-menu-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open navigation menu');
  };

  navToggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('is-menu-open');

    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute(
      'aria-label',
      isOpen ? 'Close navigation menu' : 'Open navigation menu'
    );
  });

  navList.addEventListener('click', event => {
    if (event.target.closest('.nav-link')) {
      closeMenu();
    }
  });

  window.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });
}
