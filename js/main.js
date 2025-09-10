// Miss Li Personal Brand Website JavaScript

// Smooth scrolling function
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth'
    });
  }
}

// Mobile menu toggle
function toggleMobileMenu() {
  const navLinks = document.querySelector('.nav-links');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (navLinks.style.display === 'flex') {
    navLinks.style.display = 'none';
    mobileMenu.classList.remove('active');
  } else {
    navLinks.style.display = 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '100%';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = 'rgba(75, 0, 130, 0.98)';
    navLinks.style.padding = '20px';
    navLinks.style.borderRadius = '0 0 10px 10px';
    mobileMenu.classList.add('active');
  }
}

// Form submission handler
function handleFormSubmit(event) {
  event.preventDefault();
  
  // Get form data
  const formData = new FormData(event.target);
  const data = {
    name: formData.get('name'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    service: formData.get('service'),
    message: formData.get('message')
  };
  
  // Validate required fields
  if (!data.name || !data.phone || !data.service) {
    alert('请填写必填项目！\nPlease fill in all required fields!');
    return;
  }
  
  // Show success message
  alert(`感谢您的预约！我们将尽快与您联系。\n\nThank you for your booking! We will contact you soon.\n\n预约信息：\nBooking Details:\n姓名/Name: ${data.name}\n电话/Phone: ${data.phone}\n服务类型/Service: ${data.service}`);
  
  // Reset form
  event.target.reset();
}

// Intersection Observer for fade-in animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });
}

// Navbar background change on scroll
function initNavbarScroll() {
  window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
      nav.style.background = 'rgba(75, 0, 130, 0.98)';
    } else {
      nav.style.background = 'rgba(75, 0, 130, 0.95)';
    }
  });
}

// Initialize parallax effect for hero section
function initParallaxEffect() {
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('#hero');
    const rate = scrolled * -0.5;
    
    if (hero) {
      hero.style.transform = `translateY(${rate}px)`;
    }
  });
}

// Image loading handler
function handleImageLoad(img) {
  img.style.opacity = '1';
  img.style.transform = 'scale(1)';
  // Hide placeholder text when image loads
  const placeholder = img.parentElement.querySelector('.placeholder-text');
  if (placeholder) {
    placeholder.style.display = 'none';
  }
}

// Image error handler
function handleImageError(img) {
  // Hide the image and show placeholder text
  img.style.display = 'none';
  const placeholder = img.parentElement.querySelector('.placeholder-text');
  if (placeholder) {
    placeholder.style.display = 'block';
  }
}

// Load profile images
function loadProfileImages() {
  // Hero section profile image
  const heroImageContainer = document.querySelector('#hero .image-container');
  if (heroImageContainer) {
    const heroImg = document.createElement('img');
    heroImg.src = 'images/profile/hero-photo.jpg';
    heroImg.alt = 'Miss Li Profile Photo';
    heroImg.className = 'profile-photo';
    heroImg.style.opacity = '0';
    heroImg.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    heroImg.style.transform = 'scale(1.05)';
    
    heroImg.onload = () => handleImageLoad(heroImg);
    heroImg.onerror = () => handleImageError(heroImg);
    
    // Insert image into container
    heroImageContainer.appendChild(heroImg);
  }
  
  // About section profile image
  const aboutImageContainer = document.querySelector('#about .about-image');
  if (aboutImageContainer) {
    const aboutImg = document.createElement('img');
    aboutImg.src = 'images/profile/about-photo.jpg';
    aboutImg.alt = 'Miss Li About Photo';
    aboutImg.className = 'about-photo';
    aboutImg.style.opacity = '0';
    aboutImg.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    aboutImg.style.transform = 'scale(1.05)';
    
    aboutImg.onload = () => handleImageLoad(aboutImg);
    aboutImg.onerror = () => handleImageError(aboutImg);
    
    // Insert image into container
    aboutImageContainer.appendChild(aboutImg);
  }
}

// Initialize all features when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu event listener
  const mobileMenuBtn = document.querySelector('.mobile-menu');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  }
  
  // Form submission event listener
  const contactForm = document.querySelector('#contact form');
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }
  
  // Initialize animations and effects
  initScrollAnimations();
  initNavbarScroll();
  initParallaxEffect();
  
  // Load profile images
  loadProfileImages();
  
  // Add click handlers for navigation links
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      scrollToSection(targetId);
      
      // Close mobile menu if open
      const navLinks = document.querySelector('.nav-links');
      if (window.innerWidth <= 768 && navLinks.style.display === 'flex') {
        toggleMobileMenu();
      }
    });
  });
});

// Export functions for global use
window.scrollToSection = scrollToSection;