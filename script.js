window.addEventListener('load', () => {
  const loader = document.getElementById('loader');

  if (loader) {
    setTimeout(() => {
      loader.classList.add('hidden');
      initReveal();
    }, 1600);
  } else {
    initReveal();
  }
});

function initReveal() {
  const reveals = document.querySelectorAll('.reveal:not(.visible)');

  if (!reveals.length || typeof IntersectionObserver === 'undefined') {
    reveals.forEach((el) => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  reveals.forEach((el) => observer.observe(el));
}

window.addEventListener('scroll', () => {
  const nav = document.getElementById('main-nav');
  if (nav) {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }
});

function toggleMobile() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.toggle('open');
  }
}

function closeMobile() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.remove('open');
  }
}
