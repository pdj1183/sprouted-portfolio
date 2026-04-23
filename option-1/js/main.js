/* ============================================
   OPTION 1: DARK/CLUB AESTHETIC - "NEON NIGHTS"
   Main JavaScript
   
   Features:
   - Navbar scroll effect (transparent → solid)
   - Mobile hamburger menu toggle
   - Scroll-triggered fade-in animations
   - Smooth scroll for anchor links
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Element References ----
  const navbar    = document.getElementById('navbar');
  const navToggle = document.getElementById('nav-toggle');
  const navLinks  = document.getElementById('nav-links');

  // ============================================
  // NAVBAR: Add background on scroll
  // CUSTOMIZE: Change the scroll threshold (50) to
  // trigger the background earlier or later
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
  // Elements with these classes will fade in when
  // they enter the viewport
  // 
  // CUSTOMIZE: Adjust 'threshold' (0.15) to change
  // how much of the element must be visible before
  // the animation triggers (0 = any part, 1 = fully visible)
  // ============================================
  const observerOptions = {
    root: null,           // viewport
    rootMargin: '0px',
    threshold: 0.15       // 15% visible triggers animation
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Stop observing once animated (one-time animation)
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements that should animate on scroll
  const animatedElements = document.querySelectorAll(
    '.about-card, .gallery-item, .social-link'
  );

  animatedElements.forEach(el => observer.observe(el));

  // ============================================
  // SMOOTH SCROLL: Ensure anchor links scroll smoothly
  // (Fallback for browsers that don't support CSS scroll-behavior)
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
