/* ============================================
   OPTION 2: CLEAN/MINIMAL - "PURE FOCUS"
   Main JavaScript
   
   Features:
   - Navbar scroll effect (shrink + shadow)
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
  // NAVBAR: Shrink and add border on scroll
  // CUSTOMIZE: Change the scroll threshold (50) to
  // trigger the effect earlier or later
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
  // when they enter the viewport
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

  // Observe all elements with .fade-in class
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

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
