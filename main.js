// ===== Nav scroll state & mobile toggle =====
const nav = document.getElementById('nav');
const navLinks = document.getElementById('navLinks');
const navToggle = document.getElementById('navToggle');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 12);
});

navToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== Typed search queries in hero console =====
const queries = [
  'Searching NBFC Product Manager, Pune...',
  'Sourcing SAP FICO Consultant, PAN India...',
  'Matching ITSM Specialist, Mumbai...',
  'Finding QA Automation Lead, Contract...'
];
const typedEl = document.getElementById('typedQuery');
let qIndex = 0, charIndex = 0, deleting = false;

function typeLoop() {
  if (!typedEl) return;
  const current = queries[qIndex];

  if (!deleting) {
    charIndex++;
    typedEl.textContent = current.slice(0, charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    charIndex--;
    typedEl.textContent = current.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      qIndex = (qIndex + 1) % queries.length;
    }
  }
  setTimeout(typeLoop, deleting ? 22 : 38);
}
typeLoop();

// ===== Scroll reveal =====
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// ===== Footer year =====
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== Contact form (front-end only demo) =====
function handleSubmit() {
  const note = document.getElementById('formNote');
  const name = document.getElementById('name').value.trim();
  if (!name) return;
  note.textContent = 'Thanks — we\'ll get back to you shortly. For urgent requirements, call +91 93094 99180.';
  note.style.color = '#f2941c';
  document.getElementById('contactForm').reset();
}
