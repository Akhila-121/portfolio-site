// Smooth scroll for anchor links (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const section = document.querySelector(this.getAttribute('href'));
      section?.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Simple animation effect on scroll
  const sections = document.querySelectorAll('.container, .project, .about, .skills, .contact-info');
  
  const options = {
    threshold: 0.1
  };
  
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    });
  }, options);
  
  sections.forEach(section => {
    section.classList.add('hidden');
    appearOnScroll.observe(section);
  });
  