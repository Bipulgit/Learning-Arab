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
        in_saudi: "in Saudi Arabia",
        
        // Index page content
        popular_courses_title: "Popular Courses",
        popular_courses_subtitle: "Choose from our most sought-after certification programs designed for career advancement",
        course_bestseller: "Bestseller",
        course_new: "New",
        course_trending: "Trending",
        project_management_category: "Project Management",
        it_service_management_category: "IT Service Management",
        process_improvement_category: "Process Improvement",
        
        // PMP Course
        pmp_certification_title: "PMP Certification",
        pmp_course_description: "Project Management Professional certification for experienced project managers seeking career advancement",
        pmp_contact_hours: "35 Contact Hours",
        pmp_students_count: "8,500+ Students",
        pmp_rating: "4.8/5 Rating",
        
        // ITIL Course
        itil_foundation_title: "ITIL 4 Foundation",
        itil_course_description: "Learn IT service management best practices and modern digital transformation approaches",
        itil_contact_hours: "18 Contact Hours",
        itil_students_count: "3,200+ Students",
        itil_rating: "4.7/5 Rating",
        
        // Six Sigma Course
        six_sigma_black_belt_title: "Six Sigma Black Belt",
        six_sigma_course_description: "Master advanced process improvement methodologies and lead organizational transformation",
        six_sigma_contact_hours: "40 Contact Hours",
        six_sigma_students_count: "2,800+ Students",
        six_sigma_rating: "4.9/5 Rating",
        
        // Common buttons
        learn_more_btn: "Learn More",
        view_all_courses_btn: "View All 110+ Courses",
        
        // Hero Section Slides
        hero_slide1_title: "Welcome to SanMark Learning",
        hero_slide1_subtitle: "Excel Your Excellence With Our Globally Online Training Programs",
        hero_slide2_title: "Master Your Skills", 
        hero_slide2_subtitle: "With Our Worldwide Training Programs & Expert Instructors",
        hero_slide3_title: "Learn Anywhere",
        hero_slide3_subtitle: "Classroom, Online, or From Home - Choose Your Learning Style",
        
        // Hero Buttons
        start_learning_today: "Start Learning Today",
        browse_courses_btn: "Browse Courses",
        about_our_mission: "About Our Mission",
        contact_us_btn: "Contact Us",
        start_your_journey: "Start Your Journey",
        view_gallery: "View Gallery",
        
        // Why SanMark Learning Section
        why_sanmark_title: "Why SanMark Learning?",
        why_sanmark_subtitle: "Experience world-class training that transforms careers and unlocks potential through innovative learning approaches",
        
        // Feature Cards
        certified_trainers_title: "Certified Professional Trainers",
        certified_trainers_description: "Our faculties are certified professional experts with significant experience in their domain, ensuring you learn from the best in the industry.",
        expert_trainers_count: "15+ Expert Trainers",
        
        live_training_title: "Live Instructor Online Training",
        live_training_description: "We conduct live classes through Zoom, GoToMeeting and other live meeting software platforms for real-time interactive learning.",
        
        cloud_portal_title: "Cloud E-learning Portal",
        cloud_portal_description: "Get live class notifications, view class recordings, or practice questions all in one access through our advanced cloud platform.",
        access_24_7: "24/7 Access",
        mobile_app: "Mobile App",
        
        flexible_batch_title: "Flexible Batch Timings",
        flexible_batch_description: "We have multiple batches for all the training programs for all the time zones, making learning accessible worldwide.",
        
        // Testimonials Section
        testimonials_title: "WHAT PEOPLE",
        testimonials_say: "SAY",
        testimonials_subtitle: "These are some of our client's feedback after completing their training programs with us...",
        
        // Upcoming Batches Section
        upcoming_sessions: "Upcoming Training Sessions",
        upcoming_batches: "Upcoming", 
        batches: "Batches",
        upcoming_courses: "Upcoming Training Courses",
        
        // Stats and Features
        success_rate: "Success Rate",
        mentoring: "Mentoring",
        support: "Support",
        scroll_down: "Scroll Down",
        enroll_now_btn: "Enroll Now",
        
        // CBAP Course Page
        business_analysis_course: "Business Analysis Course",
        cbap_course_title: "CBAP Course Details",
        cbap_hero_description: "Master Business Analysis with our comprehensive CBAP certification training program",
        breadcrumb_home: "Home",
        breadcrumb_courses: "Courses", 
        breadcrumb_cbap: "CBAP Course Details",
        request_information_title: "Request for Information",
        form_name_placeholder: "Enter your Name",
        form_email_placeholder: "Enter your Email",
        form_mobile_placeholder: "Enter your Mobile No",
        form_query_placeholder: "Enter your Query",
        form_request_button: "Request Information",
        form_sending_message: "Sending your message...",
        cbap_training_title: "CBAP Training",
        cbap_description: "The Certified Business Analysis Professional (CBAP) is a globally recognized certification for experienced business analysts, awarded by the International Institute of Business Analysis (IIBA).",
        overview_title: "Overview",
        course_features_title: "Course Features",
        lectures_label: "Lectures",
        lectures_value: "10-12",
        quizzes_label: "Quizzes",
        quizzes_value: "Yes",
        duration_label: "Duration",
        duration_value: "30 hours",
        skill_level_label: "Skill Level",
        skill_level_value: "Beginner",
        language_label: "Language",
        language_value: "English",
        students_label: "Students",
        students_value: "15-20",
        assessments_label: "Assessments",
        assessments_value: "Yes",
        course_description_title: "Course Description",
        course_description_text: "The CBAP course is a comprehensive training program designed to prepare candidates for the CBAP exam by covering the IIBA's Business Analysis Body of Knowledge (BABOK).",
        training_highlights_title: "CBAP Training & Preparation Highlights:",
        highlight_1: "Earn <strong>30 Training hours with Live</strong>, Instructor-Led Sessions.",
        highlight_2: "5 Simulation <strong>Exams, Projects, 200+ Quizzes</strong>.",
        highlight_3: "Interactive Sessions with <strong>Activities</strong>.",
        highlight_4: "<strong>Real-World Simulations, Case Studies</strong>, and more.",
        highlight_5: "<strong>Expert trainers</strong> with <strong>quality management experience</strong>.",
        highlight_6: "<strong>Access Unlimited Classes</strong> with <strong>180-Day</strong> Grand Pass.",
        pricing_options_title: "Pricing Options",
        self_paced_badge: "SELF PACED TRAINING",
        exam_certification_title: "About exam & certification details:",
        faq_benefits_question: "👉 What are the Benefits of CBAP Certification?",
        faq_benefits_answer: "1. Recognition of advanced business analysis skills.<br>2. Improved career opportunities and higher earning potential.<br>3. Access to a global network of professionals and resources.<br>4. Credibility in the industry, which can help with leadership and strategic decision-making roles.",
        faq_requirements_question: "👉 What do I Need to Become a CBAP®?",
        faq_requirements_answer: "1. Complete a minimum of 7,500 hours of Business Analysis Work experience in the last 10 years.<br>2. Within this experience, a minimum of 900 hours completed in 4 of the 6 BABOK® Guide Knowledge Areas, for a total of at least 3,600 of the required 7,500 total.<br>3. Complete a minimum of 35 hours of Professional development in the last 4 years.<br>4. Provide two references.<br>5. Agree to Code of Conduct.<br>6. Agree to Terms and Conditions.<br>7. Pass the exam.",
        faq_process_question: "👉 What is the Process to Get CBAP Certified ?",
        faq_process_answer: "Step 1. Meet Eligibility Requirements.<br>Step 2. Apply for the Exam.<br>Step 3. Prepare and Take the Exam.",
        faq_fee_question: "👉 What is the Exam Fee for CBAP Exam?",
        faq_fee_answer: "The CBAP exam fee is $450 USD for IIBA members and $575 USD for non-members. Additionally, there is a non-refundable application fee of $125 USD that is required at the time of application submission.",
        faq_eligibility_question: "👉 What is the Eligibility Criteria for CBAP Certification ?",
        faq_eligibility_answer: "Work Experience: A minimum of 7,500 hours of work experience in business analysis over the last 10 years.<br>Knowledge Areas: Within the 7,500 hours, at least 900 hours should be in four of the six BABOK knowledge areas.<br>Professional Development: A minimum of 35 hours of professional development in business analysis in the past four years.<br>References: Two references from a career manager, client, or Certified Business Analysis Professional.",
        faq_duration_question: "👉 How Long is the CBAP Exam Duration ?",
        faq_duration_answer: "The CBAP certification exam duration is 3.5 hours (210 minutes), and it consists of 120 multiple-choice questions. These questions are case study-based and require analysis of real-world scenarios."
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
        in_saudi: "في المملكة العربية السعودية",
        
        // Index page content
        popular_courses_title: "الدورات الشائعة",
        popular_courses_subtitle: "اختر من أكثر برامج الشهادات المطلوبة المصممة للتقدم في الحياة المهنية",
        course_bestseller: "الأكثر مبيعاً",
        course_new: "جديد",
        course_trending: "رائج",
        project_management_category: "إدارة المشاريع",
        it_service_management_category: "إدارة خدمات تقنية المعلومات",
        process_improvement_category: "تحسين العمليات",
        
        // PMP Course
        pmp_certification_title: "شهادة PMP",
        pmp_course_description: "شهادة أخصائي إدارة المشاريع لمديري المشاريع ذوي الخبرة الساعين للتقدم الوظيفي",
        pmp_contact_hours: "35 ساعة تدريبية",
        pmp_students_count: "+8,500 طالب",
        pmp_rating: "4.8/5 تقييم",
        
        // ITIL Course
        itil_foundation_title: "أساسيات ITIL 4",
        itil_course_description: "تعلم أفضل ممارسات إدارة خدمات تقنية المعلومات ومناهج التحول الرقمي الحديثة",
        itil_contact_hours: "18 ساعة تدريبية",
        itil_students_count: "+3,200 طالب",
        itil_rating: "4.7/5 تقييم",
        
        // Six Sigma Course
        six_sigma_black_belt_title: "الحزام الأسود لستة سيجما",
        six_sigma_course_description: "إتقان منهجيات تحسين العمليات المتقدمة وقيادة التحول التنظيمي",
        six_sigma_contact_hours: "40 ساعة تدريبية",
        six_sigma_students_count: "+2,800 طالب",
        six_sigma_rating: "4.9/5 تقييم",
        
        // Common buttons
        learn_more_btn: "تعرف أكثر",
        view_all_courses_btn: "عرض جميع الدورات +110",
        
        // Hero Section Slides
        hero_slide1_title: "مرحباً بكم في سان مارك للتعلم",
        hero_slide1_subtitle: "تفوق في التميز مع برامجنا التدريبية العالمية عبر الإنترنت",
        hero_slide2_title: "أتقن مهاراتك", 
        hero_slide2_subtitle: "مع برامجنا التدريبية العالمية والمدربين الخبراء",
        hero_slide3_title: "تعلم في أي مكان",
        hero_slide3_subtitle: "في الفصل، عبر الإنترنت، أو من المنزل - اختر أسلوب التعلم الذي يناسبك",
        
        // Hero Buttons
        start_learning_today: "ابدأ التعلم اليوم",
        browse_courses_btn: "تصفح الدورات",
        about_our_mission: "حول مهمتنا",
        contact_us_btn: "اتصل بنا",
        start_your_journey: "ابدأ رحلتك",
        view_gallery: "عرض المعرض",
        
        // Why SanMark Learning Section
        why_sanmark_title: "لماذا سان مارك للتعلم؟",
        why_sanmark_subtitle: "اختبر التدريب على مستوى عالمي يحول المهن ويطلق الإمكانات من خلال أساليب التعلم المبتكرة",
        
        // Feature Cards
        certified_trainers_title: "مدربون محترفون معتمدون",
        certified_trainers_description: "أعضاء هيئة التدريس لدينا هم خبراء محترفون معتمدون بخبرة كبيرة في مجالهم، مما يضمن لك التعلم من الأفضل في الصناعة.",
        expert_trainers_count: "+15 مدرب خبير",
        
        live_training_title: "تدريب مباشر عبر الإنترنت مع المدرب",
        live_training_description: "نقوم بإجراء دروس مباشرة من خلال Zoom وGoToMeeting ومنصات برمجيات الاجتماعات المباشرة الأخرى للتعلم التفاعلي في الوقت الفعلي.",
        
        cloud_portal_title: "بوابة التعلم السحابية",
        cloud_portal_description: "احصل على إشعارات الدروس المباشرة، وشاهد تسجيلات الدروس، أو مارس الأسئلة كل ذلك في وصول واحد من خلال منصتنا السحابية المتقدمة.",
        access_24_7: "وصول 24/7",
        mobile_app: "تطبيق الهاتف",
        
        flexible_batch_title: "أوقات دفعات مرنة",
        flexible_batch_description: "لدينا دفعات متعددة لجميع برامج التدريب لجميع المناطق الزمنية، مما يجعل التعلم في متناول الجميع حول العالم.",
        
        // Testimonials Section
        testimonials_title: "ماذا يقول",
        testimonials_say: "الناس",
        testimonials_subtitle: "هذه بعض ملاحظات عملائنا بعد إكمال برامجهم التدريبية معنا...",
        
        // Upcoming Batches Section
        upcoming_sessions: "جلسات التدريب القادمة",
        upcoming_batches: "الدفعات", 
        batches: "القادمة",
        upcoming_courses: "الدورات التدريبية القادمة",
        
        // Stats and Features
        success_rate: "معدل النجاح",
        mentoring: "الإرشاد",
        support: "الدعم",
        scroll_down: "انتقل للأسفل",
        enroll_now_btn: "سجل الآن",
        
        // CBAP Course Page - Arabic translations
        business_analysis_course: "دورة تحليل الأعمال",
        cbap_course_title: "تفاصيل دورة CBAP",
        cbap_hero_description: "أتقن تحليل الأعمال مع برنامج التدريب الشامل لشهادة CBAP",
        breadcrumb_home: "الرئيسية",
        breadcrumb_courses: "الدورات",
        breadcrumb_cbap: "تفاصيل دورة CBAP",
        request_information_title: "طلب معلومات",
        form_name_placeholder: "أدخل اسمك",
        form_email_placeholder: "أدخل بريدك الإلكتروني",
        form_mobile_placeholder: "أدخل رقم هاتفك",
        form_query_placeholder: "أدخل استفسارك",
        form_request_button: "طلب معلومات",
        form_sending_message: "جارٍ إرسال رسالتك...",
        cbap_training_title: "تدريب CBAP",
        cbap_description: "شهادة محلل الأعمال المحترف المعتمد (CBAP) هي شهادة معترف بها عالمياً لمحللي الأعمال ذوي الخبرة، تمنحها المعهد الدولي لتحليل الأعمال (IIBA).",
        overview_title: "نظرة عامة",
        course_features_title: "مميزات الدورة",
        lectures_label: "المحاضرات",
        lectures_value: "10-12",
        quizzes_label: "الاختبارات",
        quizzes_value: "نعم",
        duration_label: "المدة",
        duration_value: "30 ساعة",
        skill_level_label: "مستوى المهارة",
        skill_level_value: "مبتدئ",
        language_label: "اللغة",
        language_value: "الإنجليزية",
        students_label: "الطلاب",
        students_value: "15-20",
        assessments_label: "التقييمات",
        assessments_value: "نعم",
        course_description_title: "وصف الدورة",
        course_description_text: "دورة CBAP هي برنامج تدريبي شامل مصمم لإعداد المرشحين لامتحان CBAP من خلال تغطية مجموعة معارف تحليل الأعمال (BABOK) الخاصة بـ IIBA.",
        training_highlights_title: "أبرز نقاط التدريب والإعداد لـ CBAP:",
        highlight_1: "احصل على <strong>30 ساعة تدريبية مع جلسات</strong> مباشرة بقيادة المدرب.",
        highlight_2: "5 امتحانات محاكاة، <strong>مشاريع، أكثر من 200 اختبار</strong>.",
        highlight_3: "جلسات تفاعلية مع <strong>الأنشطة</strong>.",
        highlight_4: "<strong>محاكاة العالم الحقيقي، دراسات الحالة</strong>، والمزيد.",
        highlight_5: "<strong>مدربون خبراء</strong> مع <strong>خبرة في إدارة الجودة</strong>.",
        highlight_6: "<strong>الوصول إلى فصول غير محدودة</strong> مع <strong>تصريح كبير لمدة 180 يوماً</strong>.",
        pricing_options_title: "خيارات التسعير",
        self_paced_badge: "التدريب الذاتي",
        exam_certification_title: "حول تفاصيل الامتحان والشهادة:",
        faq_benefits_question: "👉 ما هي فوائد شهادة CBAP؟",
        faq_benefits_answer: "1. الاعتراف بمهارات تحليل الأعمال المتقدمة.<br>2. تحسين الفرص المهنية وإمكانات الكسب الأعلى.<br>3. الوصول إلى شبكة عالمية من المهنيين والموارد.<br>4. المصداقية في الصناعة، والتي يمكن أن تساعد في أدوار القيادة واتخاذ القرارات الاستراتيجية.",
        faq_requirements_question: "👉 ماذا أحتاج لأصبح CBAP®؟",
        faq_requirements_answer: "1. إكمال ما لا يقل عن 7500 ساعة من خبرة عمل تحليل الأعمال في آخر 10 سنوات.<br>2. ضمن هذه الخبرة، ما لا يقل عن 900 ساعة مكتملة في 4 من 6 مجالات معرفة دليل BABOK®، لما لا يقل عن 3600 من إجمالي 7500 المطلوبة.<br>3. إكمال ما لا يقل عن 35 ساعة من التطوير المهني في آخر 4 سنوات.<br>4. تقديم مرجعين.<br>5. الموافقة على مدونة السلوك.<br>6. الموافقة على الشروط والأحكام.<br>7. اجتياز الامتحان.",
        faq_process_question: "👉 ما هي عملية الحصول على شهادة CBAP؟",
        faq_process_answer: "الخطوة 1. تلبية متطلبات الأهلية.<br>الخطوة 2. التقديم للامتحان.<br>الخطوة 3. التحضير وأداء الامتحان.",
        faq_fee_question: "👉 ما هي رسوم امتحان CBAP؟",
        faq_fee_answer: "رسوم امتحان CBAP هي 450 دولار أمريكي لأعضاء IIBA و575 دولار أمريكي لغير الأعضاء. بالإضافة إلى ذلك، هناك رسوم طلب غير قابلة للاسترداد قدرها 125 دولار أمريكي مطلوبة وقت تقديم الطلب.",
        faq_eligibility_question: "👉 ما هي معايير الأهلية لشهادة CBAP؟",
        faq_eligibility_answer: "خبرة العمل: ما لا يقل عن 7500 ساعة من خبرة العمل في تحليل الأعمال خلال آخر 10 سنوات.<br>مجالات المعرفة: ضمن 7500 ساعة، يجب أن تكون 900 ساعة على الأقل في أربعة من ستة مجالات معرفة BABOK.<br>التطوير المهني: ما لا يقل عن 35 ساعة من التطوير المهني في تحليل الأعمال في السنوات الأربع الماضية.<br>المراجع: مرجعان من مدير مهني أو عميل أو محلل أعمال محترف معتمد.",
        faq_duration_question: "👉 كم مدة امتحان CBAP؟",
        faq_duration_answer: "مدة امتحان شهادة CBAP هي 3.5 ساعة (210 دقيقة)، ويتكون من 120 سؤال متعدد الخيارات. هذه الأسئلة تعتمد على دراسة الحالة وتتطلب تحليل سيناريوهات العالم الحقيقي."
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
            
            // Fix relative paths based on the current page location
            const fixedHtml = this.fixRelativePaths(html, componentPath);
            element.innerHTML = fixedHtml;

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

    fixRelativePaths(html, componentPath) {
        // Determine how deep we are from root
        const currentPath = window.location.pathname;
        const depth = (currentPath.match(/\//g) || []).length - 1;
        
        // If we're in a subdirectory, fix relative paths to assets
        if (depth > 0) {
            const pathPrefix = '../'.repeat(depth);
            
            // Fix asset paths
            html = html.replace(/src="assets\//g, `src="${pathPrefix}assets/`);
            html = html.replace(/href="assets\//g, `href="${pathPrefix}assets/`);
            
            // Fix navigation links that should go to root
            html = html.replace(/href="index\.html"/g, `href="${pathPrefix}index.html"`);
            html = html.replace(/href="about-us\.html"/g, `href="${pathPrefix}about-us.html"`);
            html = html.replace(/href="gallery\.html"/g, `href="${pathPrefix}gallery.html"`);
            html = html.replace(/href="contact-us-1\.html"/g, `href="${pathPrefix}contact-us-1.html"`);
            html = html.replace(/href="contact-us-2\.html"/g, `href="${pathPrefix}contact-us-2.html"`);
            
            // Fix auth links
            html = html.replace(/href="auth\//g, `href="${pathPrefix}auth/`);
            
            // Fix course links - these need special handling for relative paths
            html = html.replace(/href="courses\//g, `href="${pathPrefix}courses/`);
        }
        
        return html;
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

        // Mobile dropdown functionality
        const mobileDropdownBtns = document.querySelectorAll('.mobile-dropdown-btn');
        mobileDropdownBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const content = btn.nextElementSibling;
                const icon = btn.querySelector('.fa-chevron-down');
                
                if (content && content.classList.contains('mobile-dropdown-content')) {
                    content.classList.toggle('hidden');
                    if (icon) {
                        icon.style.transform = content.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
                    }
                }
            });
        });

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
