(function () {
  'use strict';

  var nav = document.getElementById('site-nav');
  var spacer = document.getElementById('nav-spacer');
  if (!nav) return;

  var menuBtn = nav.querySelector('.site-nav__menu-btn');
  var drawer = document.getElementById('site-nav-drawer');

  function syncSpacer() {
    if (spacer) spacer.style.height = nav.offsetHeight + 'px';
  }

  function onScroll() {
    nav.classList.toggle('scrolled', (window.scrollY || 0) > 8);
  }

  function setMenuOpen(open) {
    nav.classList.toggle('menu-open', open);
    if (menuBtn) {
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Menu');
    }
    if (drawer) drawer.hidden = !open;
    document.body.style.overflow = open ? 'hidden' : '';
    syncSpacer();
  }

  function closeMenu() {
    if (nav.classList.contains('menu-open')) setMenuOpen(false);
  }

  if (menuBtn && drawer) {
    menuBtn.addEventListener('click', function () {
      setMenuOpen(!nav.classList.contains('menu-open'));
    });

    drawer.querySelectorAll('a, button').forEach(function (el) {
      el.addEventListener('click', function () {
        if (el.tagName === 'BUTTON' && el === menuBtn) return;
        closeMenu();
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });

    document.addEventListener('click', function (e) {
      if (!nav.classList.contains('menu-open')) return;
      if (nav.contains(e.target)) return;
      closeMenu();
    });

    window.addEventListener('resize', function () {
      var desktopLinks = nav.querySelector('.site-nav__links--desktop');
      if (desktopLinks && window.getComputedStyle(desktopLinks).display !== 'none') {
        closeMenu();
      }
      syncSpacer();
    });
  }

  syncSpacer();
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', syncSpacer);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(syncSpacer);
  }
})();
