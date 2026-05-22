// ─── Logo swap ────────────────────────────────────────────────────────────
// On dark pages (home), use logo-mustard until scrolled; then logo-sage.
// On light pages, use logo-sage always.
const LOGO_DARK  = 'assets/images/logo-sage.png';   // visible on dark bg (nav before scroll)
const LOGO_LIGHT = 'assets/images/logo-indigo.png'; // visible on light bg (nav after scroll)

const isDarkPage = document.body.dataset.page === 'home';

function setLogos(scrolled) {
  const src = (isDarkPage && !scrolled) ? LOGO_DARK : LOGO_LIGHT;
  const nav    = document.getElementById('navLogoImg');
  const footer = document.getElementById('footerLogoImg');
  if (nav)    nav.src    = LOGO_DARK;   // nav: context-aware
  if (footer) footer.src = LOGO_DARK;   // footer: always on dark bg
  if (nav) nav.src = src;
}

// Scroll: frosted nav + logo swap
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 40;
  document.getElementById('mainNav').classList.toggle('scrolled', scrolled);
  setLogos(scrolled);
});

// Mark active nav link
document.querySelectorAll('.nav-links a[data-p]').forEach(a => {
  if (a.dataset.p === document.body.dataset.page) a.classList.add('active');
});

// ─── Offerings tab navigation ─────────────────────────────────────────────
function showSub(sub) {
  document.querySelectorAll('.sub-page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.snb').forEach(b => b.classList.remove('active'));
  const el = document.getElementById('subpage-' + sub);
  if (el) el.classList.add('active');
  document.querySelectorAll('.snb').forEach(b => {
    const t = b.textContent.toLowerCase();
    if ((sub === 'forums'     && t.includes('forum'))     ||
        (sub === 'intensives' && t.includes('intensive')) ||
        (sub === 'coaching'   && t.includes('coaching'))  ||
        (sub === 'teams'      && t.includes('team'))) {
      b.classList.add('active');
    }
  });
}

// Handle hash on offerings page (e.g. offerings.html#intensives)
if (document.body.dataset.page === 'offerings') {
  const hash = window.location.hash.replace('#', '');
  if (hash) showSub(hash);
}

// ─── Scroll reveal ────────────────────────────────────────────────────────
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => obs.observe(el));
}

// ─── Testimonial carousel ─────────────────────────────────────────────────
let curT = 0;
function setT(i) {
  const testimonials = document.querySelectorAll('#testCarousel .testimonial');
  const dots         = document.querySelectorAll('#testNav .t-dot');
  testimonials.forEach(t => t.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));
  if (testimonials[i]) testimonials[i].classList.add('active');
  if (dots[i])         dots[i].classList.add('active');
  curT = i;
}
if (document.getElementById('testCarousel')) {
  setInterval(() => {
    setT((curT + 1) % document.querySelectorAll('#testCarousel .testimonial').length);
  }, 5000);
}

// ─── Mobile menu ──────────────────────────────────────────────────────────
function openMob() {
  document.getElementById('mobMenu').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMob() {
  document.getElementById('mobMenu').classList.remove('open');
  document.body.style.overflow = '';
}

// ─── Init ─────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  setLogos(false);
  initReveal();
});
