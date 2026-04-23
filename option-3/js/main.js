/* ============================================
   OPTION 3: BOLD/COLORFUL — "ELECTRIC ENERGY"
   Main JavaScript (Redesigned)

   Features:
   - Navbar scroll effect (glassmorphism on scroll)
   - Mobile hamburger menu toggle
   - Scroll-triggered fade-in animations (IntersectionObserver)
   - Smooth scroll for anchor links
   - Mouse-reactive gradient mesh (subtle parallax on hero)

   No external libraries required — pure vanilla JS.
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Element References ----
  const navbar    = document.getElementById('navbar');
  const navToggle = document.getElementById('nav-toggle');
  const navLinks  = document.getElementById('nav-links');
  const heroMesh  = document.querySelector('.hero-mesh');

  // ============================================
  // NAVBAR: Glass background on scroll
  // CUSTOMIZE: Change SCROLL_THRESHOLD to trigger
  // the background earlier or later
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
  navToggle.addEventListener('click', () => {
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

  // ============================================
  // MOUSE-REACTIVE MESH
  // The gradient mesh shifts subtly based on
  // cursor position for a living, breathing feel.
  //
  // CUSTOMIZE: Adjust MOVE_AMOUNT (px) for more
  // or less movement. Set to 0 to disable.
  // ============================================
  const MOVE_AMOUNT = 20; // max pixels of shift

  if (heroMesh && window.matchMedia('(hover: hover)').matches) {
    document.addEventListener('mousemove', (e) => {
      // Normalize mouse position to -1...1
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      // Apply a gentle transform to the mesh
      heroMesh.style.transform =
        `translate(${x * MOVE_AMOUNT}px, ${y * MOVE_AMOUNT}px)`;
    });
  }

  // ============================================
  // SCROLL ANIMATIONS: IntersectionObserver
  // Elements with .fade-in class will animate
  // when they scroll into view.
  //
  // CUSTOMIZE: Adjust threshold (0.12) to change
  // how much must be visible before triggering
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
