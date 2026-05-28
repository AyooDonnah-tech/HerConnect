// ─────────────────────────────────────────────
//  HerConnect — landingpage.js
//  Matches dashboard.js interaction style
// ─────────────────────────────────────────────

// ── Navbar scroll shadow ──────────────────────
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 16);
  }, { passive: true });
}

// ── Mega-menu dropdown ────────────────────────
const navItems = document.querySelectorAll('.nav-item.has-dropdown');

function closeAll(except) {
  navItems.forEach(item => {
    if (item !== except) {
      item.classList.remove('open');
      item.querySelector('.nav-btn')?.setAttribute('aria-expanded', 'false');
    }
  });
}

navItems.forEach(item => {
  const btn = item.querySelector('.nav-btn');
  btn?.addEventListener('click', e => {
    e.stopPropagation();
    const isOpen = item.classList.contains('open');
    closeAll(item);
    item.classList.toggle('open', !isOpen);
    btn.setAttribute('aria-expanded', String(!isOpen));
  });
});

// Close on outside click
document.addEventListener('click', () => closeAll(null));

// Close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeAll(null);
});

// ── Mobile hamburger ──────────────────────────
const hamburger = document.getElementById('navHamburger');
const navLinks  = document.getElementById('navLinks');
const navOverlay = document.getElementById('navOverlay');

function openMobileNav() {
  hamburger?.classList.add('open');
  navLinks?.classList.add('open');
  navOverlay?.classList.add('show');
  document.body.style.overflow = 'hidden';
  hamburger?.setAttribute('aria-expanded', 'true');
}

function closeMobileNav() {
  hamburger?.classList.remove('open');
  navLinks?.classList.remove('open');
  navOverlay?.classList.remove('show');
  document.body.style.overflow = '';
  hamburger?.setAttribute('aria-expanded', 'false');
  closeAll(null);
}

hamburger?.addEventListener('click', () => {
  navLinks?.classList.contains('open') ? closeMobileNav() : openMobileNav();
});
navOverlay?.addEventListener('click', closeMobileNav);

// ── Scroll-reveal animations ──────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const siblings = Array.from(el.parentNode.children).filter(c => c.classList.contains('animate'));
    const delay = siblings.indexOf(el) * 80;
    setTimeout(() => el.classList.add('animated'), delay);
    observer.unobserve(el);
  });
}, { threshold: 0.12 });

document.querySelectorAll('.animate').forEach(el => observer.observe(el));

// ── How it works steps ────────────────────────
document.querySelectorAll('.step').forEach(step => {
  step.addEventListener('click', () => {
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    step.classList.add('active');
  });
});

// ── Cohort cards ──────────────────────────────
document.querySelectorAll('.cohort-card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.cohort-card').forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  });
});

// ── Role tabs ─────────────────────────────────
function showRole(role) {
  document.querySelectorAll('.role-desc-block').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.rtab').forEach(t => t.classList.remove('active'));
  const block = document.getElementById('role-' + role);
  if (block) block.classList.add('active');
  // Find and activate the right tab button
  document.querySelectorAll('.rtab').forEach(tab => {
    if (tab.getAttribute('onclick')?.includes(`'${role}'`)) tab.classList.add('active');
  });
}

// Expose globally (used in onclick attributes in the HTML)
window.showRole = showRole;

// ── Smooth anchor scroll (accounts for fixed nav) ──
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    closeMobileNav();
    const top = target.getBoundingClientRect().top + window.scrollY - (parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 64) - 12;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});