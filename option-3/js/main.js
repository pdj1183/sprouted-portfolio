/* ============================================
   OPTION 3: BOLD/COLORFUL - "ELECTRIC ENERGY"
   Main JavaScript
   
   Features:
   - Navbar scroll effect (glassmorphism)
   - Mobile hamburger menu toggle
   - Scroll-triggered fade-in animations
   - Smooth scroll for anchor links
   - Parallax effect on floating blobs
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Element References ----
  const navbar    = document.getElementById('navbar');
  const navToggle = document.getElementById('nav-toggle');
  const navLinks  = document.getElementById('nav-links');

  // ============================================
  // NAVBAR: Add glassmorphism background on scroll
  // CUSTOMIZE: Change the scroll threshold (50)
  // ============================================
  const SCROLL_THRESHOLD = 50;

  window.addEventListener('scroll', () => {
    if (window.scrollY > SCROLL_THRESHOLD) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ============================================
  // MOBILE MENU: Toggle hamburger menu
  // ============================================
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close mobile menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // ============================================
  // SCROLL ANIMATIONS: Intersection Observer
  // Elements with .fade-in class will animate
  //
  // CUSTOMIZE: Adjust 'threshold' (0.15) to change
  // when the animation triggers
  // ============================================
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // ============================================
  // PARALLAX: Subtle parallax on floating blobs
  // The blobs move slightly based on scroll position
  //
  // CUSTOMIZE: Adjust the multiplier (0.3) to make
  // the parallax effect more or less pronounced
  // ============================================
  const blobs = document.querySelectorAll('.blob');
  const PARALLAX_SPEED = 0.3;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    blobs.forEach((blob, index) => {
      // Each blob moves at a slightly different speed
      const speed = PARALLAX_SPEED * (index + 1) * 0.5;
      blob.style.transform = `translateY(${scrollY * speed}px)`;
    });
  });

  // ============================================
  // SMOOTH SCROLL: Anchor link scrolling
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
