/* =============================================
   METAVERA LTD — Shared JavaScript
   ============================================= */

// ---- Nav Scroll Behavior ----
const nav = document.getElementById('mainNav');
if (nav && !nav.classList.contains('scrolled')) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

// ---- Mobile Nav ----
const hamburger    = document.getElementById('hamburgerBtn');
const mobileNav    = document.getElementById('mobileNav');
const mobileClose  = document.getElementById('mobileNavClose');

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    mobileNav.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
}
if (mobileClose && mobileNav) {
  mobileClose.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  });
}

// ---- Scroll Reveal ----
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length > 0) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => revealObserver.observe(el));
}

// ---- Counter Animation ----
function animateCounter(el, target) {
  let start = 0;
  const suffix = el.dataset.suffix || '';
  const isDecimal = String(target).includes('.');
  const duration = 1800;
  const step = 16;
  const increment = target / (duration / step);

  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      start = target;
      clearInterval(timer);
    }
    el.textContent = (isDecimal ? start.toFixed(1) : Math.floor(start)).toLocaleString() + suffix;
  }, step);
}

const counters = document.querySelectorAll('[data-count]');
if (counters.length > 0) {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target, parseFloat(entry.target.dataset.count));
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(el => counterObserver.observe(el));
}

// ---- Form Success Toast ----
function showToast(msg) {
  const existing = document.getElementById('meta-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'meta-toast';
  toast.style.cssText = `
    position: fixed; bottom: 32px; left: 50%; transform: translateX(-50%) translateY(80px);
    background: #1B3A2D; color: white; padding: 16px 28px; border-radius: 8px;
    font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 500;
    box-shadow: 0 8px 32px rgba(0,0,0,0.22); z-index: 9999;
    transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s;
    display: flex; align-items: center; gap: 10px; opacity: 0;
  `;
  toast.innerHTML = `<span style="color:#C9973B;font-size:20px;">✓</span> ${msg}`;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.transform = 'translateX(-50%) translateY(0)';
    toast.style.opacity = '1';
  });

  setTimeout(() => {
    toast.style.transform = 'translateX(-50%) translateY(80px)';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 500);
  }, 4000);
}

// ---- Hook All Forms ----
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      form.reset();
      const formId = form.id;
      if (formId === 'inspectionForm') {
        showToast('Inspection request received! We\'ll be in touch within 24 hours.');
      } else if (formId === 'interestForm') {
        showToast('Interest submitted! Our team will reach out shortly.');
      } else {
        showToast('Message sent successfully! We\'ll respond within 24 hours.');
      }
    }, 1200);
  });
});

// ---- Smooth active link state ----
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav__links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});
