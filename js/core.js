/* Core JS — fade-in observer, expand/collapse handlers */
(function() {
  'use strict';

  // Intersection Observer for section fade-in
  var sections = document.querySelectorAll('.section');
  if (sections.length) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    sections.forEach(function(s) { observer.observe(s); });
  }

  // Vertex detail expand/collapse
  document.querySelectorAll('.vertex-detail-header').forEach(function(header) {
    header.addEventListener('click', function() {
      header.parentElement.classList.toggle('open');
    });
  });

  // Entry card expand/collapse (accordion)
  document.querySelectorAll('.entry-card').forEach(function(card) {
    card.addEventListener('click', function(e) {
      if (e.target.closest('a')) return;
      var wasOpen = card.classList.contains('open');
      document.querySelectorAll('.entry-card.open').forEach(function(c) {
        c.classList.remove('open');
      });
      if (!wasOpen) card.classList.add('open');
    });
  });

  // Thread card expand/collapse (accordion)
  document.querySelectorAll('.thread-card').forEach(function(card) {
    card.addEventListener('click', function() {
      var wasOpen = card.classList.contains('open');
      document.querySelectorAll('.thread-card.open').forEach(function(c) {
        c.classList.remove('open');
      });
      if (!wasOpen) card.classList.add('open');
    });
  });

  // Locator card expand/collapse (accordion)
  document.querySelectorAll('.locator-card').forEach(function(card) {
    card.addEventListener('click', function(e) {
      if (e.target.closest('a')) return;
      var wasOpen = card.classList.contains('open');
      document.querySelectorAll('.locator-card.open').forEach(function(c) {
        c.classList.remove('open');
      });
      if (!wasOpen) card.classList.add('open');
    });
  });
})();
