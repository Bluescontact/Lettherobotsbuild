/* Sidebar JS — hamburger toggle, active nav state (hub only) */
(function() {
  'use strict';

  var hamburger = document.getElementById('hamburger');
  var sidebar = document.getElementById('sidebar');
  var overlay = document.getElementById('overlay');

  if (!hamburger || !sidebar || !overlay) return;

  function toggleMenu() {
    hamburger.classList.toggle('open');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
  }

  hamburger.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);

  // Close sidebar on nav click (mobile)
  sidebar.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 840) {
        hamburger.classList.remove('open');
        sidebar.classList.remove('open');
        overlay.classList.remove('open');
      }
    });
  });

  // Active nav state (scroll tracking for anchor links)
  var navLinks = sidebar.querySelectorAll('a[href^="#"]');
  var sectionEls = [];
  navLinks.forEach(function(link) {
    var id = link.getAttribute('href').substring(1);
    var el = document.getElementById(id);
    if (el) sectionEls.push({ el: el, link: link });
  });

  function updateActive() {
    var scrollY = window.scrollY + 120;
    var current = null;
    sectionEls.forEach(function(item) {
      if (item.el.offsetTop <= scrollY) {
        current = item;
      }
    });
    navLinks.forEach(function(l) { l.classList.remove('active'); });
    if (current) current.link.classList.add('active');
  }

  window.addEventListener('scroll', updateActive, { passive: true });
  updateActive();
})();
