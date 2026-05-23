// ── NAVBAR SCROLL ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 30);
});

// ── HAMBURGER MENU ──
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');
const navActions = document.querySelector('.nav-actions');
hamburger?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
  navActions?.classList.toggle('open');
  const [s1,s2,s3] = hamburger.querySelectorAll('span');
  hamburger.classList.toggle('active');
  if (hamburger.classList.contains('active')) {
    s1.style.transform = 'rotate(45deg) translate(5px,5px)';
    s2.style.opacity   = '0';
    s3.style.transform = 'rotate(-45deg) translate(5px,-5px)';
  } else {
    s1.style.transform = s2.style.opacity = s3.style.transform = '';
    s2.style.opacity = '1';
  }
});

// ── INTERSECTION OBSERVER – fade-in cards ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .testi-card').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = `opacity 0.6s ${i * 0.08}s ease, transform 0.6s ${i * 0.08}s ease, border-color 0.3s ease, box-shadow 0.3s ease`;
  observer.observe(el);
});

// Particle sparkles removed (animations disabled on home page)
