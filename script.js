// Smooth scroll for navigation
const navLinks = document.querySelectorAll('.nav-links a');
const navbar = document.querySelector('.navbar');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId.startsWith('#')) {
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = navbar ? navbar.offsetHeight : 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    }
  });
});

// Intersection Observer for Smooth "Jumping" Scroll Animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15 // Triggers when 15% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      // Elements animate slightly up and fade in smoothly
      observer.unobserve(entry.target); 
    }
  });
}, observerOptions);

// Observe all elements with the 'reveal' class
document.querySelectorAll('.reveal').forEach(element => {
  observer.observe(element);
});

console.log("Portfolio loaded with scroll animations.");