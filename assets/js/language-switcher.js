// Enhanced Language Switcher for SanMark Learning - FIXED VERSION
class SanMarkLanguageSwitcher {
    constructor() {
        this.currentLang = localStorage.getItem('sanmark_language') || 'en';
        this.translations = {
            // Header translations
            email: {
                en: 'Info@sanmarklearning.com',
                ar: 'Info@sanmarklearning.com'
            },
            email_short: {
                en: 'Email Us',
                ar: 'راسلنا'
            },
            login: {
                en: 'Login',
                ar: 'تسجيل الدخول'
            },
            register: {
                en: 'Register',
                ar: 'التسجيل'
            },
            home: {
                en: 'Home',
                ar: 'الرئيسية'
            },
            courses: {
                en: 'Courses',
                ar: 'الدورات'
            },
            about_us: {
                en: 'About Us',
                ar: 'من نحن'
            },
            gallery: {
                en: 'Gallery',
                ar: 'المعرض'
            },
            contact_us: {
                en: 'Contact Us',
                ar: 'اتصل بنا'
            },
            join_now: {
                en: 'Join Now',
                ar: 'انضم الآن'
            },
            
            // Navigation
            browse_courses: {
                en: 'Browse Our Courses',
                ar: 'تصفح دوراتنا التدريبية'
            },
            course_subtitle: {
                en: 'Choose from our comprehensive range of professional certifications',
                ar: 'اختر من مجموعتنا الشاملة من الشهادات المهنية'
            },
            business_analysis: {
                en: 'Business Analysis',
                ar: 'تحليل الأعمال'
            },
            project_management: {
                en: 'Project Management',
                ar: 'إدارة المشاريع'
            },
            it_security: {
                en: 'IT Security',
                ar: 'أمن المعلومات'
            },
            six_sigma: {
                en: 'Six Sigma',
                ar: 'ستة سيجما'
            },
            microsoft_training: {
                en: 'Microsoft',
                ar: 'مايكروسوفت'
            },
            courses_available: {
                en: 'courses available across',
                ar: 'دورة متاحة عبر'
            },
            categories: {
                en: 'categories',
                ar: 'فئة'
            },
            view_all_courses: {
                en: 'View All Courses',
                ar: 'عرض جميع الدورات'
            },
            
            // Footer
            footer_title: {
                en: 'Sign Up For Online Training Programs',
                ar: 'سجل في برامجنا التدريبية عبر الإنترنت'
            },
            footer_description: {
                en: 'SanMark Learning offers certification courses designed to enhance professional skills. Master your skills with our worldwide training programs. Join newly launched batches every month.',
                ar: 'تقدم سان مارك للتعلم دورات الشهادات المصممة لتعزيز المهارات المهنية. أتقن مهاراتك مع برامجنا التدريبية العالمية. انضم إلى الدفعات المطلقة حديثاً كل شهر.'
            },
            quick_links: {
                en: 'Quick Links',
                ar: 'روابط سريعة'
            },
            legal: {
                en: 'Legal',
                ar: 'الشروط القانونية'
            },
            privacy_policy: {
                en: 'Privacy Policy',
                ar: 'سياسة الخصوصية'
            },
            refund_policy: {
                en: 'Refund Policy',
                ar: 'سياسة الاسترداد'
            },
            terms_conditions: {
                en: 'Terms & Conditions',
                ar: 'الأحكام والشروط'
            },
            follow_us: {
                en: 'Follow Us',
                ar: 'تابعنا'
            },
            subscribe: {
                en: 'Subscribe',
                ar: 'اشترك'
            },
            email_placeholder: {
                en: 'Enter your email',
                ar: 'أدخل بريدك الإلكتروني'
            },
            copyright: {
                en: 'Copyright © 2025 SanMark Learning. All rights reserved.',
                ar: 'حقوق الطبع والنشر © 2025 سان مارك للتعلم. جميع الحقوق محفوظة.'
            },
            made_with: {
                en: 'Made with',
                ar: 'صنع بـ'
            },
            in_saudi: {
                en: 'in Saudi Arabia',
                ar: 'في المملكة العربية السعودية'
            },
            
            // Popular Courses Section - FIXED TRANSLATIONS
            popular_courses_title: {
                en: 'Popular Courses',
                ar: 'الدورات الشائعة'
            },
            popular_courses_subtitle: {
                en: 'Choose from our most sought-after certification programs designed for career advancement',
                ar: 'اختر من أكثر برامج الشهادات المطلوبة المصممة للتقدم في الحياة المهنية'
            },
            
            // Course Labels
            course_bestseller: {
                en: 'Bestseller',
                ar: 'الأكثر مبيعاً'
            },
            course_new: {
                en: 'New',
                ar: 'جديد'
            },
            course_trending: {
                en: 'Trending',
                ar: 'رائج'
            },
            
            // Course Categories
            project_management_category: {
                en: 'Project Management',
                ar: 'إدارة المشاريع'
            },
            it_service_management_category: {
                en: 'IT Service Management',
                ar: 'إدارة خدمات تقنية المعلومات'
            },
            process_improvement_category: {
                en: 'Process Improvement',
                ar: 'تحسين العمليات'
            },
            
            // PMP Course
            pmp_certification_title: {
                en: 'PMP Certification',
                ar: 'شهادة PMP'
            },
            pmp_course_description: {
                en: 'Project Management Professional certification for experienced project managers seeking career advancement',
                ar: 'شهادة أخصائي إدارة المشاريع لمديري المشاريع ذوي الخبرة الساعين للتقدم الوظيفي'
            },
            pmp_contact_hours: {
                en: '35 Contact Hours',
                ar: '35 ساعة تدريبية'
            },
            pmp_students_count: {
                en: '8,500+ Students',
                ar: '+8,500 طالب'
            },
            pmp_rating: {
                en: '4.8/5 Rating',
                ar: '4.8/5 تقييم'
            },
            
            // ITIL Course
            itil_foundation_title: {
                en: 'ITIL 4 Foundation',
                ar: 'أساسيات ITIL 4'
            },
            itil_course_description: {
                en: 'Learn IT service management best practices and modern digital transformation approaches',
                ar: 'تعلم أفضل ممارسات إدارة خدمات تقنية المعلومات ومناهج التحول الرقمي الحديثة'
            },
            itil_contact_hours: {
                en: '18 Contact Hours',
                ar: '18 ساعة تدريبية'
            },
            itil_students_count: {
                en: '3,200+ Students',
                ar: '+3,200 طالب'
            },
            itil_rating: {
                en: '4.7/5 Rating',
                ar: '4.7/5 تقييم'
            },
            
            // Six Sigma Course
            six_sigma_black_belt_title: {
                en: 'Six Sigma Black Belt',
                ar: 'الحزام الأسود لستة سيجما'
            },
            six_sigma_course_description: {
                en: 'Master advanced process improvement methodologies and lead organizational transformation',
                ar: 'إتقان منهجيات تحسين العمليات المتقدمة وقيادة التحول التنظيمي'
            },
            six_sigma_contact_hours: {
                en: '40 Contact Hours',
                ar: '40 ساعة تدريبية'
            },
            six_sigma_students_count: {
                en: '2,800+ Students',
                ar: '+2,800 طالب'
            },
            six_sigma_rating: {
                en: '4.9/5 Rating',
                ar: '4.9/5 تقييم'
            },
            
            // Common Elements
            learn_more_btn: {
                en: 'Learn More',
                ar: 'تعرف أكثر'
            },
            view_all_courses_btn: {
                en: 'View All 110+ Courses',
                ar: 'عرض جميع الدورات +110'
            }
        };
        
        this.init();
    }

    init() {
        console.log('🚀 Initializing SanMark Language Switcher...');
        
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.setupLanguageSelector();
                this.setLanguage(this.currentLang);
                this.bindEvents();
            });
        } else {
            this.setupLanguageSelector();
            this.setLanguage(this.currentLang);
            this.bindEvents();
        }
        
        console.log('✅ SanMark Language Switcher initialized!');
    }

    setupLanguageSelector() {
        // Setup the existing header language selector
        const languageOptions = document.querySelectorAll('.language-option');
        
        console.log(`Found ${languageOptions.length} language options`);
        
        languageOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const selectedLang = option.getAttribute('data-lang');
                console.log(`Language selected: ${selectedLang}`);
                
                this.setLanguage(selectedLang);
                
                // Close the dropdown by removing hover states
                const dropdown = option.closest('.group');
                if (dropdown) {
                    dropdown.style.pointerEvents = 'none';
                    setTimeout(() => {
                        dropdown.style.pointerEvents = '';
                    }, 100);
                }
            });
        });
    }

    setLanguage(lang) {
        console.log(`🌐 Setting language to: ${lang}`);
        
        this.currentLang = lang;
        
        // Update document attributes
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        
        // Update body classes
        document.body.classList.remove('lang-en', 'lang-ar', 'rtl', 'ltr');
        document.body.classList.add(`lang-${lang}`, lang === 'ar' ? 'rtl' : 'ltr');
        
        // Update all translations - THIS IS THE KEY FIX
        this.updateTranslations();
        
        // Update current language display in header
        this.updateCurrentLanguageDisplay();
        
        // Save preference
        localStorage.setItem('sanmark_language', lang);
        
        // Dispatch event for other components
        document.dispatchEvent(new CustomEvent('sanmarkLanguageChanged', {
            detail: { 
                language: lang, 
                direction: lang === 'ar' ? 'rtl' : 'ltr',
                isRTL: lang === 'ar'
            }
        }));
        
        console.log(`✅ Language switched to: ${lang}`);
    }

    updateTranslations() {
        console.log('🔄 Updating translations...');
        
        // Find all elements with data-translate attributes
        const translatableElements = document.querySelectorAll('[data-translate]');
        
        console.log(`Found ${translatableElements.length} translatable elements`);
        
        translatableElements.forEach(element => {
            const key = element.getAttribute('data-translate');
            
            if (this.translations[key] && this.translations[key][this.currentLang]) {
                const translation = this.translations[key][this.currentLang];
                
                // Update the text content
                element.textContent = translation;
                
                console.log(`✅ Translated "${key}": "${translation}"`);
            } else {
                console.warn(`⚠️ Missing translation for key: "${key}" in language: "${this.currentLang}"`);
            }
        });
        
        // Handle placeholder translations
        const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
        placeholderElements.forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            if (this.translations[key] && this.translations[key][this.currentLang]) {
                element.setAttribute('placeholder', this.translations[key][this.currentLang]);
            }
        });
        
        console.log('✅ All translations updated!');
    }

    updateCurrentLanguageDisplay() {
        const currentLanguageSpan = document.getElementById('current-language');
        if (currentLanguageSpan) {
            currentLanguageSpan.textContent = this.currentLang === 'en' ? 'English' : 'العربية';
        }
    }

    bindEvents() {
        // Keyboard shortcut: Alt + L
        document.addEventListener('keydown', (e) => {
            if (e.altKey && e.key.toLowerCase() === 'l') {
                e.preventDefault();
                this.toggleLanguage();
            }
        });
    }

    toggleLanguage() {
        const newLang = this.currentLang === 'en' ? 'ar' : 'en';
        this.setLanguage(newLang);
    }

    // Add new translation
    addTranslation(key, translations) {
        this.translations[key] = translations;
    }

    // Get current language
    getCurrentLanguage() {
        return this.currentLang;
    }

    // Check if current language is RTL
    isRTL() {
        return this.currentLang === 'ar';
    }

    // Get translation for a key
    getTranslation(key) {
        return this.translations[key] ? this.translations[key][this.currentLang] : key;
    }
}

// Initialize immediately
console.log('📦 Loading SanMark Language Switcher...');

// Create global instance
window.sanmarkLang = new SanMarkLanguageSwitcher();

// Also initialize on DOMContentLoaded as backup
document.addEventListener('DOMContentLoaded', () => {
    if (!window.sanmarkLang) {
        console.log('🔄 Backup initialization...');
        window.sanmarkLang = new SanMarkLanguageSwitcher();
    }
});
