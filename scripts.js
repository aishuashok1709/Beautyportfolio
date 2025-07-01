const sections = document.querySelectorAll('.scroll-item');
const navLinks = document.querySelectorAll('nav a');

// Highlight active link on scroll
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    const bottom = top + sec.offsetHeight;
    navLinks.forEach(a => a.classList.remove('active'));
    if (y >= top && y < bottom) {
      document.querySelector(`nav a[href="#${sec.id}"]`)?.classList.add('active');
    }
  });
});

// Auto-scroll up to About
let lastY = window.pageYOffset;
window.addEventListener('scroll', () => {
  const current = window.pageYOffset;
  if (lastY - current > 80) {
    document.getElementById('about')
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  lastY = current;
});

// Contact form submission simulation
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  const status = document.getElementById('form-status');
  status.textContent = 'Sending…';
  setTimeout(() => {
    status.textContent = 'Thank you! We’ll reach out soon.';
    e.target.reset();
  }, 1500);
});
