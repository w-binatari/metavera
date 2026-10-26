/* Metavera — shared client script */

function closeMobileNav() {
  const mobileNav = document.getElementById('mobileNav');
  const hamburger = document.getElementById('hamburgerBtn');
  if (!mobileNav) return;
  mobileNav.classList.remove('open');
  mobileNav.hidden = true;
  mobileNav.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
}

function openMobileNav() {
  const mobileNav = document.getElementById('mobileNav');
  const hamburger = document.getElementById('hamburgerBtn');
  if (!mobileNav) return;
  mobileNav.hidden = false;
  mobileNav.classList.add('open');
  mobileNav.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  const closeBtn = document.getElementById('mobileNavClose');
  closeBtn?.focus();
}

const nav = document.getElementById('mainNav');
if (nav && nav.dataset.navSolid !== 'true') {
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 60);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

const hamburger = document.getElementById('hamburgerBtn');
const mobileNav = document.getElementById('mobileNav');
const mobileClose = document.getElementById('mobileNavClose');

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    if (mobileNav.classList.contains('open')) closeMobileNav();
    else openMobileNav();
  });
}
if (mobileClose) mobileClose.addEventListener('click', closeMobileNav);

mobileNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => closeMobileNav());
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMobileNav();
});

const revealEls = document.querySelectorAll('.reveal');
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReduced) {
  revealEls.forEach((el) => el.classList.add('visible'));
} else if (revealEls.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  revealEls.forEach((el) => revealObserver.observe(el));
}

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
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target, parseFloat(entry.target.dataset.count));
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );
  counters.forEach((el) => counterObserver.observe(el));
}

function showToast(msg) {
  const existing = document.getElementById('meta-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'meta-toast';
  toast.className = 'meta-toast';
  toast.setAttribute('role', 'status');
  toast.setAttribute('aria-live', 'polite');
  toast.innerHTML = `<span class="meta-toast__icon" aria-hidden="true">✓</span> ${msg}`;
  document.body.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add('meta-toast--visible'));

  setTimeout(() => {
    toast.classList.remove('meta-toast--visible');
    setTimeout(() => toast.remove(), 500);
  }, 4000);
}

const LABEL_MAP = {
  formType: 'Request',
  name: 'Name',
  firstName: 'First Name',
  lastName: 'Last Name',
  phone: 'Phone',
  email: 'Email',
  interest: 'Interest',
  subject: 'Subject',
  property: 'Property',
  project: 'Project',
  unitType: 'Unit Type',
  estate: 'Estate',
  date: 'Preferred Date',
  message: 'Message',
};

function formatFormType(value) {
  const map = {
    contact: 'Contact Inquiry',
    inspection: 'Site Inspection Booking',
    interest: 'Property Interest',
    'hero-reachout': 'Callback Request',
  };
  return map[value] || value;
}

function buildWhatsAppMessage(payload) {
  const lines = ['Hello Metavera,', '', 'I just submitted a request from your website:', ''];

  Object.entries(payload).forEach(([key, value]) => {
    if (!value || String(value).trim() === '') return;
    const label = LABEL_MAP[key] || key;
    const display = key === 'formType' ? formatFormType(String(value)) : String(value);
    lines.push(`${label}: ${display}`);
  });

  lines.push('', 'Please get back to me. Thank you.');
  return lines.join('\n');
}

function submitForm(form) {
  const submitBtn = form.querySelector('[type="submit"]');
  const originalText = submitBtn?.textContent;
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = 'Opening WhatsApp...';
  }

  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());
  const whatsapp =
    form.dataset.whatsapp ||
    document.body.dataset.whatsapp ||
    '2348033167061';
  const message = buildWhatsAppMessage(payload);
  const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;

  try {
    window.open(url, '_blank', 'noopener,noreferrer');
    form.reset();
    showToast('Opening WhatsApp with your message. Send it there to reach our team.');
  } catch {
    showToast('Could not open WhatsApp. Please call or message us directly.');
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText || 'Submit';
    }
  }
}

document.querySelectorAll('form[data-lead-form]').forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitForm(form);
  });
});

/* Project filters */
const tabs = document.querySelectorAll('.filter-tab');
const cards = document.querySelectorAll('.project-card[data-type]');
const emptyState = document.getElementById('emptyState');

function applyFilter(filter) {
  let visibleCount = 0;
  cards.forEach((card) => {
    const type = card.dataset.type;
    const status = card.dataset.status;
    const matches =
      filter === 'all' ||
      filter === type ||
      (filter === 'completed' && (status === 'completed' || status === 'sold')) ||
      (filter === 'construction' && status === 'construction');
    card.hidden = !matches;
    if (matches) visibleCount++;
  });
  if (emptyState) emptyState.hidden = visibleCount !== 0;
}

if (tabs.length) {
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      applyFilter(tab.dataset.filter || 'all');
    });
  });

  const params = new URLSearchParams(window.location.search);
  const initial = params.get('filter') || 'all';
  const initialTab = [...tabs].find((t) => t.dataset.filter === initial) || tabs[0];
  if (initialTab) {
    tabs.forEach((t) => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    initialTab.classList.add('active');
    initialTab.setAttribute('aria-selected', 'true');
    applyFilter(initial);
  }
}
