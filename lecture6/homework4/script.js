// Enhanced script.js
document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeBtn = document.getElementById('theme-btn');
    const body = document.body;
    const icon = themeBtn.querySelector('i');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        if (savedTheme === 'dark-mode') {
            icon.classList.replace('fa-moon', 'fa-sun');
        }
    }
    
    themeBtn.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            localStorage.setItem('theme', '');
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
        this.querySelector('i').classList.toggle('fa-bars');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenuBtn.querySelector('i').classList.replace('fa-times', 'fa-bars');
                }
            }
        });
    });

    // Feature items with animation
    const featureItems = document.querySelectorAll('.feature-item');
    
    featureItems.forEach((item, index) => {
        // Add delay for staggered animation
        item.style.animationDelay = `${index * 0.1}s`;
        
        item.addEventListener('click', function() {
            featureItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            this.classList.toggle('active');
        });
    });

    // Newsletter form with local storage
    const newsletterForm = document.getElementById('newsletter-form');
    const subscriptionMessage = document.getElementById('subscription-message');
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = document.getElementById('email-input');
        const email = emailInput.value.trim();
        
        if (email && email.includes('@')) {
            // Save to local storage
            const subscribers = JSON.parse(localStorage.getItem('newsletterSubscribers') || '[]');
            if (!subscribers.includes(email)) {
                subscribers.push(email);
                localStorage.setItem('newsletterSubscribers', JSON.stringify(subscribers));
            }
            
            subscriptionMessage.textContent = 'Thank you for subscribing!';
            subscriptionMessage.className = 'subscription-message success';
            emailInput.value = '';
            
            setTimeout(() => {
                subscriptionMessage.style.display = 'none';
            }, 5000);
        } else {
            subscriptionMessage.textContent = 'Please enter a valid email address';
            subscriptionMessage.className = 'subscription-message error';
        }
        
        subscriptionMessage.style.display = 'block';
    });

    // Contact form
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('contact-email').value,
            message: document.getElementById('message').value
        };
        
        // In a real app, you would send this to your server
        console.log('Form submitted:', formData);
        
        // Save to local storage
        const contacts = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
        contacts.push(formData);
        localStorage.setItem('contactSubmissions', JSON.stringify(contacts));
        
        // Show success message
        const subscriptionMessage = document.getElementById('subscription-message');
        subscriptionMessage.textContent = 'Your message has been sent! We\'ll get back to you soon.';
        subscriptionMessage.className = 'subscription-message success';
        subscriptionMessage.style.display = 'block';
        
        // Reset form
        contactForm.reset();
        
        setTimeout(() => {
            subscriptionMessage.style.display = 'none';
        }, 5000);
    });

    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Scroll animations
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate__animated');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.classList.add(element.getAttribute('data-animation'));
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load

    // Simple map placeholder with animation
    const mapElement = document.getElementById('map');
    if (mapElement) {
        mapElement.innerHTML = `
            <div class="map-placeholder animate__animated animate__fadeIn" 
                 style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#eee;color:#666;">
                <div class="map-marker" style="position:relative;">
                    <i class="fas fa-map-marker-alt" style="font-size:40px;color:#4a6bff;"></i>
                    <div class="pulse" style="position:absolute;top:0;left:0;width:40px;height:40px;background:rgba(74,107,255,0.4);border-radius:50%;animation:pulse 2s infinite;"></div>
                </div>
            </div>
        `;
    }
});