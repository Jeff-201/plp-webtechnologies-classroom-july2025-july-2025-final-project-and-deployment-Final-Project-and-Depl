// main.js — small site behaviors: mobile nav, year injection, form validation, simple on-scroll reveal

document.addEventListener('DOMContentLoaded', () => {
  // Inject current year
  const years = document.querySelectorAll('#year, #year-2, #year-3, #year-4');
  years.forEach(el => { if (el) el.textContent = new Date().getFullYear(); });

  // Mobile nav toggle (works with repeated header on each page)
  document.querySelectorAll('#nav-toggle').forEach(toggle => {
    const nav = document.getElementById('primary-nav');
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      if (nav) nav.style.display = expanded ? '' : 'block';
    });
  });

  // Simple on-scroll reveal
  const reveals = document.querySelectorAll('.feature, .card, .hero-image');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  reveals.forEach(r => observer.observe(r));

  // Contact form validation + mock submission
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('#name');
      const email = form.querySelector('#email');
      const message = form.querySelector('#message');
      let valid = true;

      // clear errors
      form.querySelectorAll('.error').forEach(el => el.textContent = '');

      if (!name.value || name.value.trim().length < 2) {
        document.getElementById('error-name').textContent = 'Please enter your name (2+ characters).';
        valid = false;
      }
      if (!email.value || !/^\S+@\S+\.\S+$/.test(email.value)) {
        document.getElementById('error-email').textContent = 'Please enter a valid email.';
        valid = false;
      }
      if (!message.value || message.value.trim().length < 10) {
        document.getElementById('error-message').textContent = 'Message must be at least 10 characters.';
        valid = false;
      }

      if (!valid) return;

      const status = document.getElementById('form-status');
      status.textContent = 'Sending…';

      // Mock sending (replace with real API or Netlify Forms)
      setTimeout(() => {
        status.textContent = 'Thanks! Your message has been sent.';
        form.reset();
      }, 900);
    });
  }
});
// main.js — small site behaviors: mobile nav, year injection, form validation, simple on-scroll reveal

document.addEventListener('DOMContentLoaded', () => {
  // Inject current year
  const years = document.querySelectorAll('#year, #year-2, #year-3, #year-4');
  years.forEach(el => { if (el) el.textContent = new Date().getFullYear(); });