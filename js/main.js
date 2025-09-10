// Miss Li Personal Brand Website JavaScript

// EmailJS Configuration
const EMAILJS_CONFIG = {
  publicKey: 'DYURVWb1P5eK19AD4',
  serviceId: 'service_cj4kgy6',
  templateId: 'template_0riwfad'
};

// Initialize EmailJS
(function() {
  emailjs.init(EMAILJS_CONFIG.publicKey);
})();

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

// Form submission handler with EmailJS
function handleFormSubmit(event) {
  event.preventDefault();
  
  const form = event.target;
  const submitBtn = document.getElementById('submit-btn');
  const submitText = document.getElementById('submit-text');
  const statusDiv = document.getElementById('form-status');
  
  // Get form data
  const formData = new FormData(form);
  const data = {
    from_name: formData.get('from_name'),
    phone: formData.get('phone'),
    from_email: formData.get('from_email'),
    service: formData.get('service'),
    message: formData.get('message')
  };
  
  // Validate required fields
  if (!data.from_name || !data.phone || !data.service) {
    showFormStatus('error', '请填写必填项目！\nPlease fill in all required fields!');
    return;
  }
  
  // Show loading state
  showFormStatus('loading', '正在发送邮件，请稍候...\nSending email, please wait...');
  submitBtn.classList.add('loading');
  submitBtn.disabled = true;
  submitText.innerHTML = '<i class="fas fa-spinner"></i> 发送中... Sending...';
  
  // Prepare email template parameters
  const templateParams = {
    from_name: data.from_name,
    from_email: data.from_email || '未提供',
    phone: data.phone,
    service: data.service,
    message: data.message || '无额外留言',
    to_email: 'smlshangwuyingyu@soulmately.info',
    reply_to: data.from_email || 'noreply@example.com'
  };
  
  // Send email using EmailJS
  emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateId,
    templateParams
  )
  .then(function(response) {
    console.log('Email sent successfully:', response);
    showFormStatus('success', 
      `预约提交成功！我们将尽快与您联系。\n\nBooking submitted successfully! We will contact you soon.\n\n预约信息：\nBooking Details:\n姓名/Name: ${data.from_name}\n电话/Phone: ${data.phone}\n服务类型/Service: ${data.service}`
    );
    
    // Reset form after successful submission
    form.reset();
  })
  .catch(function(error) {
    console.error('Email sending failed:', error);
    showFormStatus('error', 
      '发送失败，请稍后重试或直接联系我们。\nSending failed, please try again later or contact us directly.\n\n错误信息: ' + (error.text || error.message || '未知错误')
    );
  })
  .finally(function() {
    // Reset button state
    submitBtn.classList.remove('loading');
    submitBtn.disabled = false;
    submitText.innerHTML = '<i class="fas fa-paper-plane"></i> 提交预约 Submit Booking';
  });
}

// Show form status message
function showFormStatus(type, message) {
  const statusDiv = document.getElementById('form-status');
  statusDiv.className = `form-status ${type}`;
  statusDiv.textContent = message;
  statusDiv.style.display = 'block';
  
  // Auto-hide success messages after 10 seconds
  if (type === 'success') {
    setTimeout(() => {
      statusDiv.style.display = 'none';
    }, 10000);
  }
  
  // Scroll to status message
  statusDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
  // Ensure WeChat modal is hidden on page load
  const wechatModal = document.getElementById('wechatModal');
  if (wechatModal) {
    wechatModal.style.display = 'none';
    wechatModal.style.opacity = '0';
    wechatModal.style.visibility = 'hidden';
    wechatModal.classList.remove('show');
  }
  
  // Mobile menu event listener
  const mobileMenuBtn = document.querySelector('.mobile-menu');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  }
  
  // Form submission event listener
  const contactForm = document.getElementById('contact-form');
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

// WeChat QR Code Modal Functions
function showWeChatQR() {
  const modal = document.getElementById('wechatModal');
  if (modal) {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }
}

function hideWeChatQR() {
  const modal = document.getElementById('wechatModal');
  if (modal) {
    modal.classList.remove('show');
    document.body.style.overflow = ''; // Restore scrolling
  }
}

// Export WeChat functions for global use
window.showWeChatQR = showWeChatQR;
window.hideWeChatQR = hideWeChatQR;

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    hideWeChatQR();
  }
});

// Additional safety check for GitHub Pages deployment
window.addEventListener('load', function() {
  // Double-check modal is hidden after all resources load
  setTimeout(function() {
    const wechatModal = document.getElementById('wechatModal');
    if (wechatModal && !wechatModal.classList.contains('show')) {
      wechatModal.style.display = 'none';
      wechatModal.style.opacity = '0';
      wechatModal.style.visibility = 'hidden';
    }
  }, 100);
});