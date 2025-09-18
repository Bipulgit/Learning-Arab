/**
 * SanMark Learning - Main JavaScript
 * Global functionality and utilities
 */

class SanMarkLearning {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeAnimations();
        this.setupFormValidation();
        this.initializeLazyLoading();
        
        // Initialize when components are loaded
        document.addEventListener('componentsLoaded', () => {
            this.onComponentsReady();
        });
    }

    setupEventListeners() {
        // Smooth scroll for anchor links
        document.addEventListener('click', (e) => {
            if (e.target.matches('a[href^="#"]')) {
                e.preventDefault();
                const target = document.querySelector(e.target.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });

        // Window scroll events
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll() {
        const scrollTop = window.pageYOffset;
        
        // Show/hide back to top button
        const backToTop = document.getElementById('backToTop');
        if (backToTop) {
            if (scrollTop > 300) {
                backToTop.style.display = 'block';
            } else {
                backToTop.style.display = 'none';
            }
        }

        // Add scrolled class to header
        const header = document.querySelector('header');
        if (header) {
            if (scrollTop > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    }

    initializeAnimations() {
        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements with animation class
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }

    setupFormValidation() {
        // Email validation
        window.validateEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        };

        // Phone validation
        window.validatePhone = (phone) => {
            const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/;
            return phoneRegex.test(phone);
        };
    }

    initializeLazyLoading() {
        // Lazy loading for images
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('loading');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    onComponentsReady() {
        console.log('SanMark Learning: All components loaded and ready');
        
        // Initialize course search functionality
        this.initializeCourseSearch();
        
        // Setup newsletter subscription
        this.setupNewsletterSubscription();
    }

    initializeCourseSearch() {
        const searchInput = document.querySelector('[data-course-search]');
        if (searchInput) {
            searchInput.addEventListener('input', this.debounce((e) => {
                this.searchCourses(e.target.value);
            }, 300));
        }
    }

    searchCourses(query) {
        if (query.length < 2) return;
        
        // Mock search functionality - replace with actual search logic
        console.log('Searching for courses:', query);
    }

    setupNewsletterSubscription() {
        const newsletterForm = document.querySelector('[data-newsletter-form]');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleNewsletterSubscription(new FormData(e.target));
            });
        }
    }

    handleNewsletterSubscription(formData) {
        const email = formData.get('email');
        if (window.validateEmail(email)) {
            // Handle subscription - replace with actual API call
            console.log('Newsletter subscription for:', email);
            this.showNotification('Thank you for subscribing!', 'success');
        } else {
            this.showNotification('Please enter a valid email address.', 'error');
        }
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transform translate-x-full transition-transform duration-300 ${
            type === 'success' ? 'bg-green-500 text-white' :
            type === 'error' ? 'bg-red-500 text-white' :
            'bg-blue-500 text-white'
        }`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Show notification
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Hide and remove notification
        setTimeout(() => {
            notification.style.transform = 'translateX(full)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    // Utility function for debouncing
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    window.sanMarkLearning = new SanMarkLearning();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SanMarkLearning;
}
