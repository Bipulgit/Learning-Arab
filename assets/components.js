/**
 * SanMark Learning - Multi-Language Component Loader
 * Supports English and Arabic with RTL functionality
 */

// Translation data
const translations = {
    en: {
        // Navigation
        home: "Home",
        courses: "Courses",
        about_us: "About Us",
        gallery: "Gallery", 
        contact_us: "Contact Us",
        login: "Login",
        register: "Register",
        join_now: "Join Now",
        
        // Header
        email: "Info@sanmarklearning.com",
        email_short: "Email Us",
        search_placeholder: "Search courses...",
        browse_courses: "Browse Our Courses",
        course_subtitle: "Choose from our comprehensive range of professional certifications",
        
        // Course Categories
        business_analysis: "Business Analysis",
        project_management: "Project Management",
        it_security: "IT Security & Data Protection",
        six_sigma: "Six Sigma Training",
        microsoft_training: "Microsoft Training",
        
        // Footer
        footer_title: "Sign Up For Online Training Programs",
        footer_description: "SanMark Learning offers certification courses designed to enhance professional skills. Master your skills with our worldwide training programs.",
        quick_links: "Quick Links",
        legal: "Legal Terms",
        privacy_policy: "Privacy Policy",
        refund_policy: "Refund Policy", 
        terms_conditions: "Terms & Conditions",
        get_in_touch: "Get In Touch",
        reach_us: "Reach Us",
        follow_us: "Follow Us",
        
        // Countries
        saudi: "Saudi Arabia",
        australia: "Australia",
        
        // Common
        view_all_courses: "View All Courses",
        courses_available: "courses available across",
        categories: "categories",
        subscribe: "Subscribe",
        email_placeholder: "Enter your email",
        copyright: "Copyright © 2025 SanMark Learning. All rights reserved.",
        made_with: "Made with",
        in_saudi: "in Saudi Arabia"
    },
    
    ar: {
        // Navigation - Arabic translations
        home: "الرئيسية",
        courses: "الدورات التدريبية", 
        about_us: "من نحن",
        gallery: "المعرض",
        contact_us: "تواصل معنا",
        login: "تسجيل الدخول",
        register: "إنشاء حساب",
        join_now: "انضم الآن",
        
        // Header
        email: "Info@sanmarklearning.com",
        email_short: "راسلنا",
        search_placeholder: "البحث في الدورات...",
        browse_courses: "تصفح دوراتنا التدريبية",
        course_subtitle: "اختر من مجموعتنا الشاملة من الشهادات المهنية",
        
        // Course Categories  
        business_analysis: "تحليل الأعمال",
        project_management: "إدارة المشاريع",
        it_security: "أمن المعلومات وحماية البيانات",
        six_sigma: "تدريب سيكس سيجما",
        microsoft_training: "تدريب مايكروسوفت",
        
        // Footer
        footer_title: "سجل في برامجنا التدريبية عبر الإنترنت",
        footer_description: "تقدم سان مارك للتعلم دورات الشهادات المصممة لتعزيز المهارات المهنية. أتقن مهاراتك مع برامجنا التدريبية العالمية.",
        quick_links: "روابط سريعة",
        legal: "الشروط القانونية",
        privacy_policy: "سياسة الخصوصية",
        refund_policy: "سياسة الاسترداد",
        terms_conditions: "الأحكام والشروط", 
        get_in_touch: "تواصل معنا",
        reach_us: "تواصل معنا",
        follow_us: "تابعنا",
        
        // Countries
        saudi: "المملكة العربية السعودية",
        australia: "أستراليا",
        
        // Common
        view_all_courses: "عرض جميع الدورات",
        courses_available: "دورة متاحة عبر",
        categories: "فئة",
        subscribe: "اشترك",
        email_placeholder: "أدخل بريدك الإلكتروني",
        copyright: "حقوق الطبع والنشر © 2025 سان مارك للتعلم. جميع الحقوق محفوظة.",
        made_with: "صنع بـ", 
        in_saudi: "في المملكة العربية السعودية"
    }
};

class ComponentLoader {
    constructor() {
        this.componentsLoaded = 0;
        this.totalComponents = 0;
        this.callbacks = [];
        this.currentLanguage = localStorage.getItem('language') || 'en';
        this.currentDirection = this.currentLanguage === 'ar' ? 'rtl' : 'ltr';
    }

    async loadComponent(componentId, componentPath, callback = null) {
        try {
            const element = document.getElementById(componentId);
            if (!element) {
                console.error(`Element with ID '${componentId}' not found`);
                return false;
            }

            element.innerHTML = this.getLoadingHTML(componentId);

            const response = await fetch(componentPath);
            if (!response.ok) {
                throw new Error(`Failed to load ${componentPath}: ${response.status}`);
            }

            const html = await response.text();
            element.innerHTML = html;

            if (callback && typeof callback === 'function') {
                callback();
            }

            this.componentsLoaded++;
            this.checkAllComponentsLoaded();

            console.log(`✓ Component loaded: ${componentId}`);
            return true;

        } catch (error) {
            console.error(`Error loading component ${componentId}:`, error);
            document.getElementById(componentId).innerHTML = this.getErrorHTML(componentId, error.message);
            return false;
        }
    }

    async loadAllComponents(components, allLoadedCallback = null) {
        this.totalComponents = Object.keys(components).length;
        this.componentsLoaded = 0;
        
        if (allLoadedCallback) {
            this.callbacks.push(allLoadedCallback);
        }

        const loadPromises = Object.entries(components).map(([componentId, componentPath]) => {
            return this.loadComponent(componentId, componentPath);
        });

        try {
            await Promise.all(loadPromises);
            this.initializeComponentsAfterLoad();
        } catch (error) {
            console.error('Error loading some components:', error);
        }
    }

    checkAllComponentsLoaded() {
        if (this.componentsLoaded === this.totalComponents && this.totalComponents > 0) {
            // Apply language and direction
            this.applyLanguage(this.currentLanguage);
            this.applyDirection(this.currentDirection);
            
            this.callbacks.forEach(callback => {
                if (typeof callback === 'function') {
                    callback();
                }
            });
            this.callbacks = [];
        }
    }

    initializeComponentsAfterLoad() {
        this.initializeHeader();
        this.initializeFooter();
        this.initializeLanguageToggle();
        this.initializeAnimations();
        this.initializeMicroInteractions();
    }

    // Language Management
    applyLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('language', lang);
        
        const direction = lang === 'ar' ? 'rtl' : 'ltr';
        this.applyDirection(direction);
        
        // Update all translated elements
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // Update placeholder texts
        document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            if (translations[lang] && translations[lang][key]) {
                element.setAttribute('placeholder', translations[lang][key]);
            }
        });
        
        // Update current language display
        const currentLangElement = document.getElementById('current-language');
        if (currentLangElement) {
            currentLangElement.textContent = lang === 'ar' ? 'العربية' : 'English';
        }
        
        // Update document language
        document.documentElement.lang = lang;
        
        console.log(`Language switched to: ${lang}`);
    }

    applyDirection(direction) {
        this.currentDirection = direction;
        document.documentElement.dir = direction;
        document.documentElement.setAttribute('dir', direction);
        
        // Toggle RTL classes
        if (direction === 'rtl') {
            document.body.classList.add('rtl');
            document.documentElement.classList.add('rtl');
        } else {
            document.body.classList.remove('rtl');
            document.documentElement.classList.remove('rtl');
        }
        
        console.log(`Direction set to: ${direction}`);
    }

    initializeLanguageToggle() {
        // Language selector functionality
        document.querySelectorAll('.language-option').forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = e.currentTarget.getAttribute('data-lang');
                const dir = e.currentTarget.getAttribute('data-dir');
                
                this.applyLanguage(lang);
                this.applyDirection(dir);
                
                // Add smooth transition effect
                document.body.style.transition = 'all 0.3s ease';
                setTimeout(() => {
                    document.body.style.transition = '';
                }, 300);
            });
        });
    }

    initializeAnimations() {
        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in-view');
                    
                    // Add staggered animation for child elements
                    const children = entry.target.querySelectorAll('.animate-child');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('animate-in-view');
                        }, index * 100);
                    });
                    
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements with animation classes
        document.querySelectorAll('.animate-on-scroll, .animate-slide-up, .animate-fade-in').forEach(el => {
            observer.observe(el);
        });
    }

    initializeMicroInteractions() {
        // Add ripple effect to buttons
        document.querySelectorAll('button, .btn, a[href*="contact"]').forEach(element => {
            element.addEventListener('click', this.createRippleEffect);
        });

        // Add hover animations to cards
        document.querySelectorAll('.card, .course-card, .feature-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px) scale(1.02)';
                card.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
                card.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
            });
        });

        // Parallax effect for hero sections
        window.addEventListener('scroll', this.handleParallax);
        
        // Add loading animations
        this.addLoadingAnimations();
    }

    createRippleEffect(e) {
        const button = e.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    handleParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }

    addLoadingAnimations() {
        // Skeleton loading for images
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.classList.add('loading-skeleton');
            
            const imageLoader = new Image();
            imageLoader.onload = () => {
                img.src = img.dataset.src;
                img.classList.remove('loading-skeleton');
                img.classList.add('loaded');
            };
            imageLoader.src = img.dataset.src;
        });
    }

    // Header specific functionality
    initializeHeader() {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                this.animateHamburgerMenu(mobileMenuBtn, !mobileMenu.classList.contains('hidden'));
            });
        }

        // Sticky header effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('main-header');
            if (header) {
                if (window.scrollY > 100) {
                    header.classList.add('header-scrolled');
                } else {
                    header.classList.remove('header-scrolled');
                }
            }
        });

        // Search functionality with debounce
        const searchInput = document.querySelector('input[data-translate-placeholder="search_placeholder"]');
        if (searchInput) {
            searchInput.addEventListener('input', this.debounce((e) => {
                this.performSearch(e.target.value);
            }, 300));
        }
    }

    animateHamburgerMenu(button, isOpen) {
        const spans = button.querySelectorAll('span');
        
        if (isOpen) {
            spans[0].style.transform = 'rotate(45deg) translateY(6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-6px)';
        } else {
            spans[0].style.transform = 'rotate(0deg) translateY(0px)';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'rotate(0deg) translateY(0px)';
        }
    }

    // Footer specific functionality
    initializeFooter() {
        // Back to top button
        const backToTop = document.getElementById('backToTop');
        
        if (backToTop) {
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    backToTop.classList.remove('opacity-0', 'invisible');
                    backToTop.classList.add('opacity-100', 'visible');
                } else {
                    backToTop.classList.add('opacity-0', 'invisible');
                    backToTop.classList.remove('opacity-100', 'visible');
                }
            });
            
            backToTop.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }

        // Newsletter subscription
        const newsletterForm = document.querySelector('[data-newsletter-form]');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleNewsletterSubscription(new FormData(e.target));
            });
        }
    }

    performSearch(query) {
        if (query.length < 2) return;
        
        // Add search suggestions dropdown
        console.log('Searching for:', query);
        // Implement actual search functionality here
    }

    handleNewsletterSubscription(formData) {
        const email = formData.get('email');
        
        // Add loading state
        const submitBtn = event.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = this.currentLanguage === 'ar' ? 'جاري الإرسال...' : 'Subscribing...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            this.showNotification(
                this.currentLanguage === 'ar' ? 
                'شكراً لك على الاشتراك!' : 
                'Thank you for subscribing!', 
                'success'
            );
            
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            event.target.reset();
        }, 2000);
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 ${this.currentDirection === 'rtl' ? 'left-4' : 'right-4'} z-50 p-4 rounded-lg shadow-lg transform translate-x-full transition-transform duration-300 ${
            type === 'success' ? 'bg-green-500 text-white' :
            type === 'error' ? 'bg-red-500 text-white' :
            'bg-blue-500 text-white'
        }`;
        notification.innerHTML = `
            <div class="flex items-center">
                <i class="fas ${type === 'success' ? 'fa-check' : type === 'error' ? 'fa-times' : 'fa-info'} mr-2 rtl:mr-0 rtl:ml-2"></i>
                <span>${message}</span>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Show notification
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Hide and remove notification
        setTimeout(() => {
            notification.style.transform = this.currentDirection === 'rtl' ? 'translateX(-400px)' : 'translateX(400px)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 4000);
    }

    // Utility functions
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

    getLoadingHTML(componentId) {
        const isHeader = componentId === 'header';
        const height = isHeader ? 'h-20' : 'h-32';
        
        return `
            <div class="animate-pulse ${height} bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 flex items-center justify-center">
                <div class="flex items-center space-x-2 rtl:space-x-reverse">
                    <div class="w-6 h-6 bg-primary rounded-full animate-spin opacity-60"></div>
                    <span class="text-gray-600">${this.currentLanguage === 'ar' ? 'جاري التحميل...' : 'Loading...'}</span>
                </div>
            </div>
        `;
    }

    getErrorHTML(componentId, errorMessage) {
        return `
            <div class="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                <div class="flex items-center justify-center text-red-600 mb-2">
                    <i class="fas fa-exclamation-triangle mr-2 rtl:mr-0 rtl:ml-2"></i>
                    <span class="font-semibold">${this.currentLanguage === 'ar' ? 'فشل في تحميل' : 'Failed to load'} ${componentId}</span>
                </div>
                <p class="text-red-500 text-sm">${errorMessage}</p>
                <button onclick="location.reload()" class="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors">
                    ${this.currentLanguage === 'ar' ? 'إعادة المحاولة' : 'Retry'}
                </button>
            </div>
        `;
    }
}

// Create global instance
const componentLoader = new ComponentLoader();

// Main function to load all components
function loadComponents() {
    const components = {
        'header': 'header.html',
        'footer': 'footer.html'
    };

    componentLoader.loadAllComponents(components, () => {
        console.log('🎉 All components loaded successfully!');
        
        // Dispatch custom event
        document.dispatchEvent(new CustomEvent('componentsLoaded', {
            detail: { 
                message: 'All components have been loaded and initialized',
                language: componentLoader.currentLanguage,
                direction: componentLoader.currentDirection
            }
        }));
    });
}

// Auto-load components when DOM is ready
document.addEventListener('DOMContentLoaded', loadComponents);

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ComponentLoader, loadComponents };
}
