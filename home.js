// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize components
    initParticles();
    initServiceCards();
    initProjectCarousel();
    initTestimonialCarousel();
    initStatsCounter();
    initScrollAnimations();
    loadHeaderFooter();
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Load header and footer components
function loadHeaderFooter() {
    // Header content
    const headerHTML = `
        <header class="site-header">
            <div class="header-container">
                <div class="logo-small">
                    <a href="#hero">
                        <img src="WhatsApp Image 2025-04-19 at 04.41.39_79beee8f (1).png" alt="Wizpact">
                    </a>
                </div>
                <nav class="main-nav">
                    <ul>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#why">Why Us</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#contact" class="nav-cta">Contact</a></li>
                    </ul>
                </nav>
                <div class="mobile-menu-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    `;
    
    // Footer content
    const footerHTML = `
        <footer class="site-footer">
            <div class="footer-container">
                <div class="footer-top">
                    <div class="footer-logo">
                        <img src="assets/logo-small.png" alt="Wizpact">
                        <p>Building the future of digital experiences</p>
                    </div>
                    <div class="footer-links">
                        <div class="footer-column">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="#services">Web Development</a></li>
                                <li><a href="#services">Mobile Apps</a></li>
                                <li><a href="#services">UI/UX Design</a></li>
                                <li><a href="#services">Custom Software</a></li>
                            </ul>
                        </div>
                        <div class="footer-column">
                            <h3>Company</h3>
                            <ul>
                                <li><a href="#about">About Us</a></li>
                                <li><a href="#team">Our Team</a></li>
                                <li><a href="#careers">Careers</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                        <div class="footer-column">
                            <h3>Connect</h3>
                            <div class="social-links">
                                <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                                <a href="#" class="social-icon"><i class="fab fa-linkedin"></i></a>
                                <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                                <a href="#" class="social-icon"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="copyright">
                        <p>&copy; 2023 Wizpact. All rights reserved.</p>
                    </div>
                    <div class="footer-legal">
                        <a href="#privacy">Privacy Policy</a>
                        <a href="#terms">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    `;
    
    // Insert header and footer
    document.getElementById('header').innerHTML = headerHTML;
    document.getElementById('footer').innerHTML = footerHTML;
    
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    mobileMenuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
    });
}

// Particle animation for hero section
function initParticles() {
    const particleContainer = document.getElementById('particles');
    const particleCount = 100;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 5 + 1;
        
        // Random opacity
        const opacity = Math.random() * 0.5 + 0.1;
        
        // Random animation duration
        const duration = Math.random() * 20 + 10;
        
        // Apply styles
        particle.style.cssText = `
            left: ${posX}%;
            top: ${posY}%;
            width: ${size}px;
            height: ${size}px;
            opacity: ${opacity};
            animation-duration: ${duration}s;
            animation-delay: ${Math.random() * 5}s;
        `;
        
        particleContainer.appendChild(particle);
    }
}

// Service cards animation
function initServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        const delay = card.getAttribute('data-delay');
        
        // Set initial opacity and transform
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        // Animate cards with delay
        setTimeout(() => {
            card.style.transition = 'all 0.8s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, delay);
    });
}

// Project carousel functionality
function initProjectCarousel() {
    const carouselContainer = document.querySelector('.carousel-container');
    const prevBtn = document.querySelector('.projects-carousel .prev-btn');
    const nextBtn = document.querySelector('.projects-carousel .next-btn');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    const projectCards = document.querySelectorAll('.project-card');
    
    let currentIndex = 0;
    const cardWidth = projectCards[0].offsetWidth + 30; // Card width + gap
    
    // Update carousel position
    function updateCarousel() {
        carouselContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        
        // Update active dot
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Next button click
    nextBtn.addEventListener('click', () => {
        if (currentIndex < projectCards.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });
    
    // Previous button click
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    
    // Dot click
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });
    
    // Initialize carousel
    updateCarousel();
}

// Testimonial carousel functionality
function initTestimonialCarousel() {
    const testimonialsContainer = document.querySelector('.testimonials-container');
    const prevBtn = document.querySelector('.testimonial-nav .prev-btn');
    const nextBtn = document.querySelector('.testimonial-nav .next-btn');
    const dots = document.querySelectorAll('.testimonial-dots .dot');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    let currentIndex = 0;
    
    // Update carousel position
    function updateCarousel() {
        testimonialsContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update active dot
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Next button click
    nextBtn.addEventListener('click', () => {
        if (currentIndex < testimonialCards.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });
    
    // Previous button click
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    
    // Dot click
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });
    
    // Initialize carousel
    updateCarousel();
    
    // Auto-rotate testimonials
    setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonialCards.length;
        updateCarousel();
    }, 8000);
}

// Stats counter animation
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    let hasAnimated = false;
    
    function animateStats() {
        if (hasAnimated) return;
        
        statNumbers.forEach(stat => {
            const targetCount = parseInt(stat.getAttribute('data-count'));
            let currentCount = 0;
            const duration = 2000; // 2 seconds
            const increment = targetCount / (duration / 16); // 60fps
            
            const counter = setInterval(() => {
                currentCount += increment;
                
                if (currentCount >= targetCount) {
                    stat.textContent = targetCount;
                    clearInterval(counter);
                } else {
                    stat.textContent = Math.floor(currentCount);
                }
            }, 16);
        });
        
        hasAnimated = true;
    }
    
    // Check if stats section is in viewport
    function checkIfInView() {
        const statsSection = document.querySelector('.stats-section');
        const rect = statsSection.getBoundingClientRect();
        const isInViewport = (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
        
        if (isInViewport) {
            animateStats();
            window.removeEventListener('scroll', checkIfInView);
        }
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', checkIfInView);
    
    // Check on initial load
    checkIfInView();
}

// Scroll animations for various elements
function initScrollAnimations() {
    // Benefit items animation
    const benefitItems = document.querySelectorAll('.benefit-item');
    
    function animateBenefits() {
        benefitItems.forEach(item => {
            const delay = item.getAttribute('data-delay');
            const rect = item.getBoundingClientRect();
            const isInViewport = (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
            );
            
            if (isInViewport && !item.classList.contains('animated')) {
                setTimeout(() => {
                    item.classList.add('animated');
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, delay);
            }
        });
    }
    
    // Set initial state for benefit items
    benefitItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(50px)';
        item.style.transition = 'all 0.6s ease';
    });
    
    // Add scroll event listener
    window.addEventListener('scroll', animateBenefits);
    
    // Check on initial load
    animateBenefits();
    
    // Parallax effect for CTA waves
    const waves = document.querySelectorAll('.wave');
    
    function parallaxWaves() {
        const scrollPosition = window.pageYOffset;
        
        waves.forEach((wave, index) => {
            const speed = 0.1 * (index + 1);
            wave.style.transform = `translateY(${scrollPosition * speed}px)`;
        });
    }
    
    window.addEventListener('scroll', parallaxWaves);
}

// Add this to your home.html file
document.addEventListener('DOMContentLoaded', function() {
    // Function to load the header
    
    
    // Load the header
    loadHeader();
});