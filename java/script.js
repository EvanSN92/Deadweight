
// DEADWEIGHT JAVASCRIPT
// Mobile menu, product filters, and form setup.

// 1. MOBILE MENU
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', function () {
  const isOpen = navLinks.classList.toggle('open');

  menuButton.setAttribute('aria-expanded', isOpen);
  menuButton.textContent = isOpen ? '✕' : '☰';
});

// Close menu when a navigation link is clicked.
navLinks.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    navLinks.classList.remove('open');

    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = '☰';
  });
});

// 2. PRODUCT FILTERS
const filterButtons = document.querySelectorAll('.filter');
const products = document.querySelectorAll('.product');

filterButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    const selected = button.dataset.filter;

    // Highlight the selected button.
    filterButtons.forEach(function (btn) {
      const isActive = btn === button;

      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive);
    });

    // Show matching products.
    products.forEach(function (product) {
      const matches =
        selected === 'all' ||
        product.dataset.category === selected;

      product.classList.toggle('hidden', !matches);
    });
  });
});

// 3. EMAIL FORM SETUP
const signupForm = document.querySelector('#signup-form');
const formMessage = document.querySelector('#form-message');

signupForm.addEventListener('submit', function (event) {
  if (signupForm.action.includes('YOUR_FORM_ID')) {
    event.preventDefault();

    formMessage.textContent =
      'Email signup is coming soon. Connect Formspree to activate it.';
  }
});

// Update copyright year automatically.
document.querySelector('#year').textContent =
  new Date().getFullYear();
