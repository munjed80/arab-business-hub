/**
 * Arab Business Hub - Main JavaScript
 * Minimal JavaScript for interactive elements
 */

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Inline SVG sprite to keep icons reliable on GitHub Pages
    const spriteContainer = document.createElement('div');
    spriteContainer.className = 'svg-sprite';
    spriteContainer.setAttribute('aria-hidden', 'true');
    document.body.prepend(spriteContainer);

    const inlineSprite = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><symbol id="icon-branding" viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="14" rx="2" /><path d="M9 5v14" /><path d="M4 12h16" /><circle cx="9" cy="12" r="1.1" /><path d="M12.5 9h5" /><path d="M12.5 15h4" /></symbol><symbol id="icon-web" viewBox="0 0 24 24"><rect x="4" y="5" width="7" height="5" rx="1.5" /><rect x="13" y="5" width="7" height="5" rx="1.5" /><rect x="8" y="14" width="8" height="5" rx="1.5" /><path d="M7.5 10v3c0 .8.7 1.5 1.5 1.5H10" /><path d="M16.5 10v3c0 .8-.7 1.5-1.5 1.5H14" /><path d="M12 10v2" /></symbol><symbol id="icon-growth" viewBox="0 0 24 24"><path d="M4.5 6h15l-5 6v4l-5 2v-6z" /><path d="M10 12h4.5" /><path d="M14.5 16.5H18" /></symbol><symbol id="icon-rocket" viewBox="0 0 24 24"><path d="M5 6h14" /><circle cx="9" cy="6" r="1" /><circle cx="15" cy="6" r="1" /><path d="M5 12h14" /><circle cx="11" cy="12" r="1" /><circle cx="17" cy="12" r="1" /><path d="M5 18h14" /><circle cx="8" cy="18" r="1" /><circle cx="14" cy="18" r="1" /><path d="M19 6v12" /></symbol><symbol id="icon-target" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3.5" /><path d="M12 4V2.5" /><path d="M20.5 12H19" /><path d="M12 20v1.5" /><path d="M4 12H3.5" /><path d="M12 8l4-2" /><path d="M16 6l2 3" /></symbol><symbol id="icon-eye" viewBox="0 0 24 24"><path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6z" /><path d="M12 12l2.5-5" /><path d="M12 12l-2.5 5" /><circle cx="12" cy="12" r="1.5" /></symbol><symbol id="icon-stack" viewBox="0 0 24 24"><rect x="5" y="5" width="14" height="5" rx="1.2" /><rect x="5" y="10.5" width="14" height="5" rx="1.2" /><rect x="5" y="16" width="14" height="3" rx="1" /><path d="M9 7.5h6" /><path d="M9 13h6" /></symbol><symbol id="icon-analytics" viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="14" rx="2" /><path d="M8 19V13" /><path d="M12 19V11" /><path d="M16 19v-6" /><path d="M8 10l3-3 3 2 2-2" /></symbol><symbol id="icon-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" /><path d="M12 8v4.5l2.5 1.5" /><path d="M12 12l-2.5 1.5" /></symbol><symbol id="icon-handshake" viewBox="0 0 24 24"><path d="M5 12l4-4a2 2 0 012.8 0l1.2 1.2a1.6 1.6 0 010 2.3L11 13.5" /><path d="M19 12l-4-4-2 2" /><path d="M5 12v3.5L8 19h3l1.5-1.5" /><path d="M19 12v3.5L16.5 19H14" /><path d="M11 15.5l2 2 2-2" /></symbol><symbol id="icon-mail" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M4 7l8 6 8-6" /></symbol><symbol id="icon-phone" viewBox="0 0 24 24"><path d="M5.5 4.5l3 1.5a2 2 0 011 1.7 11 11 0 005.8 5.8 2 2 0 011.7 1l1.5 3a1 1 0 01-1 1.5A15 15 0 014 5.5a1 1 0 011.5-1z" /></symbol><symbol id="icon-twitter" viewBox="0 0 24 24"><path d="M20 7.5a6.5 6.5 0 01-2 2.1 8.5 8.5 0 01-9.4 6.8A8 8 0 014 15s2.5.1 4.1-1.4A3.5 3.5 0 016 9.5s1.6.9 3 .2a3.5 3.5 0 01-1.2-4s2.7 3 6.1 3.2c0-.2-.1-.5-.1-.7A2.8 2.8 0 0116.5 5 3 3 0 0120 8.2" /></symbol><symbol id="icon-linkedin" viewBox="0 0 24 24"><rect x="4" y="9" width="4" height="11" rx="1" /><circle cx="6" cy="6" r="2" /><path d="M12 10h3a3 3 0 013 3v7h-4v-6a1.5 1.5 0 00-1.5-1.5H12z" /></symbol><symbol id="icon-instagram" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="12" r="3.5" /><circle cx="17" cy="7" r=".8" /></symbol><symbol id="icon-facebook" viewBox="0 0 24 24"><path d="M14 8h2V4h-2a4 4 0 00-4 4v3H8v3h2v6h3v-6h3v-3h-3V8a1 1 0 011-1z" /></symbol><symbol id="icon-globe" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a14 14 0 010 18" /><path d="M12 3a14 14 0 000 18" /></symbol></defs></svg>`;

    const spriteUrl = new URL('assets/icons.svg', document.baseURI).toString();

    fetch(spriteUrl)
        .then(response => response.ok ? response.text() : Promise.reject())
        .then(sprite => { spriteContainer.innerHTML = sprite; })
        .catch(() => { spriteContainer.innerHTML = inlineSprite; });

    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = navToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(10px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            });
        });
    }
    
    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            // Simulate form submission
            // In a real application, you would send this data to a server
            console.log('Form submitted:', data);
            
            // Show success message
            formMessage.className = 'form-message success';
            formMessage.textContent = 'شكراً لتواصلك معنا! سنرد على رسالتك خلال 24 ساعة.';
            
            // Reset form
            contactForm.reset();
            
            // Hide message after 5 seconds
            setTimeout(function() {
                formMessage.style.display = 'none';
                formMessage.className = 'form-message';
            }, 5000);
        });
    }
    
    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements with fade-in class
    const fadeElements = document.querySelectorAll('.service-card, .feature, .value-card, .pricing-card');
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add active class to current page in navigation
window.addEventListener('DOMContentLoaded', function() {
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (currentLocation === linkPath || 
            (currentLocation.endsWith('/') && linkPath.endsWith('index.html'))) {
            link.classList.add('active');
        }
    });
});
