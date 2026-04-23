/* ============================================
   Sprouted — "Electric Energy" Portfolio
   Main JavaScript

   Features:
   - Loads about, shows, and gallery from content.json
   - Navbar scroll effect (glassmorphism on scroll)
   - Mobile hamburger menu toggle (tap outside to close)
   - Scroll-triggered fade-in animations (IntersectionObserver)
   - Smooth scroll for anchor links

   No external libraries required — pure vanilla JS.
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Element References ----
  const navbar    = document.getElementById('navbar');
  const navToggle = document.getElementById('nav-toggle');
  const navLinks  = document.getElementById('nav-links');

  // ============================================
  // CONTENT: Load about + gallery from content.json
  // ============================================
  fetch('content.json')
    .then(res => res.json())
    .then(data => {
      buildAbout(data.about);
      buildShows(data.shows);
      buildGallery(data.gallery);
      // Observe newly created elements for fade-in
      document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    })
    .catch(err => console.error('Failed to load content.json:', err));

  function buildAbout(about) {
    const container = document.getElementById('about-content');
    if (!container || !about) return;

    const quote = document.createElement('blockquote');
    quote.className = 'about-quote';
    quote.textContent = about.quote;

    const body = document.createElement('p');
    body.className = 'about-body';
    body.textContent = about.body;

    container.appendChild(quote);
    container.appendChild(body);
  }

  function buildShows(shows) {
    const container = document.getElementById('timeline-content');
    if (!container || !shows) return;

    shows.forEach((show, i) => {
      const item = document.createElement('div');
      item.className = 'timeline-item fade-in';
      // Stagger the transition-delay per item
      item.style.transitionDelay = `${i * 0.1}s`;

      const dot = document.createElement('div');
      dot.className = 'timeline-dot';

      const content = document.createElement('div');
      content.className = 'timeline-content';

      const date = document.createElement('span');
      date.className = 'timeline-date';
      date.textContent = show.date;

      const venue = document.createElement('span');
      venue.className = 'timeline-venue';
      venue.textContent = show.venue;

      const city = document.createElement('span');
      city.className = 'timeline-city';
      city.textContent = show.city;

      content.appendChild(date);
      content.appendChild(venue);
      content.appendChild(city);
      item.appendChild(dot);
      item.appendChild(content);
      container.appendChild(item);
    });
  }

  function buildGallery(groups) {
    const container = document.getElementById('gallery-content');
    if (!container || !groups) return;

    groups.forEach((group, groupIndex) => {
      // Group title
      const title = document.createElement('h3');
      title.className = 'gallery-group-title fade-in';
      if (groupIndex === 0) title.classList.add('first');
      title.textContent = group.title;
      container.appendChild(title);

      // Grid
      const grid = document.createElement('div');
      grid.className = 'gallery-grid';
      container.appendChild(grid);

      group.photos.forEach(photo => {
        const item = document.createElement('div');
        // orientation drives the aspect-ratio box
        const orientClass = photo.orientation === 'vertical'
          ? 'gallery-vertical'
          : 'gallery-horizontal';
        item.className = `gallery-item ${orientClass} fade-in`;

        const img = document.createElement('img');
        img.src = photo.src;
        img.alt = photo.alt;
        img.loading = 'lazy';

        const overlay = document.createElement('div');
        overlay.className = 'gallery-overlay';

        item.appendChild(img);
        item.appendChild(overlay);
        grid.appendChild(item);
      });
    });
  }

  // ============================================
  // NAVBAR: Glass background on scroll
  // ============================================
  const SCROLL_THRESHOLD = 60;

  window.addEventListener('scroll', () => {
    if (window.scrollY > SCROLL_THRESHOLD) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  // ============================================
  // MOBILE MENU: Toggle hamburger
  // ============================================
  navToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // Close menu when tapping outside
  document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active') &&
        !navLinks.contains(e.target) &&
        !navToggle.contains(e.target)) {
      navToggle.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });

  // ============================================
  // SCROLL ANIMATIONS: IntersectionObserver
  // ============================================
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.12
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements already in the HTML
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // ============================================
  // SMOOTH SCROLL: Anchor links
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});
