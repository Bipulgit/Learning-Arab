sanmark-learning/
│
├── index.html                          # Homepage
├── about-us.html                       # About page
├── gallery.html                        # Gallery page  
├── contact-us-1.html                   # Contact page 1
├── contact-us-2.html                   # Contact page 2 (Join form)
├── header.html                         # Header component
├── footer.html                         # Footer component
├── README.md                           # Project documentation
│
├── assets/                             # Static assets folder [3]
│   ├── components.js                   # Component loader JavaScript
│   ├── style.css                       # Global styles
│   ├── images/                         # Image assets [1]
│   │   ├── logos/
│   │   │   ├── fulllogo_transparent_nobuffer-1.png
│   │   │   └── logo-favicon.ico
│   │   ├── home-img/
│   │   │   ├── home-1.jpeg
│   │   │   ├── home-2.jpg
│   │   │   └── home-1.1.jpg
│   │   ├── course-banners/
│   │   │   ├── pmp-banner.jpg
│   │   │   ├── itil-banner.jpg
│   │   │   └── six-sigma-banner.jpg
│   │   ├── gallery/
│   │   │   ├── gallery-1.jpg
│   │   │   ├── gallery-2.jpg
│   │   │   └── gallery-3.jpg
│   │   └── icons/
│   │       ├── certification-icon.svg
│   │       └── training-icon.svg
│   │
│   ├── css/                           # Additional stylesheets [1]
│   │   ├── components.css             # Component-specific styles
│   │   ├── responsive.css             # Media queries
│   │   └── animations.css             # Animation styles
│   │
│   └── js/                            # JavaScript files [1]
│       ├── main.js                    # Main application JS
│       ├── slider.js                  # Hero slider functionality
│       ├── form-validation.js         # Form validation
│       └── utils.js                   # Utility functions
│
├── courses/                           # Courses section [2]
│   ├── index.html                     # All courses listing
│   │
│   ├── business-analysis/             # Business Analysis courses
│   │   ├── index.html                 # Category page
│   │   ├── cbap.html                  # CBAP course details
│   │   ├── ccba.html                  # CCBA course details
│   │   ├── cpoa.html                  # CPOA course details
│   │   └── cbda.html                  # CBDA course details
│   │
│   ├── project-management/            # Project Management courses
│   │   ├── index.html                 # Category page
│   │   ├── pmp.html                   # PMP course details
│   │   ├── prince2.html               # PRINCE2 course details
│   │   ├── capm.html                  # CAPM course details
│   │   ├── p3o.html                   # P3O course details
│   │   └── rmp.html                   # RMP course details
│   │
│   ├── it-security/                   # IT Security courses
│   │   ├── index.html                 # Category page
│   │   ├── itil-4.html                # ITIL 4 course details
│   │   ├── cissp.html                 # CISSP course details
│   │   ├── cisa.html                  # CISA course details
│   │   ├── cism.html                  # CISM course details
│   │   ├── crisc.html                 # CRISC course details
│   │   └── comptia.html               # CompTIA course details
│   │
│   ├── six-sigma/                     # Six Sigma courses
│   │   ├── index.html                 # Category page
│   │   ├── black-belt.html            # Black Belt course
│   │   ├── green-belt.html            # Green Belt course
│   │   └── yellow-belt.html           # Yellow Belt course
│   │
│   ├── microsoft-training/            # Microsoft courses
│   │   ├── index.html                 # Category page
│   │   ├── microsoft-365-admin.html   # Microsoft 365 Admin
│   │   ├── teams-admin.html           # Teams Administrator
│   │   ├── azure-az-305.html          # Azure AZ-305
│   │   └── devops-az-400.html         # DevOps AZ-400
│   │
│   ├── cisco-training/                # Cisco courses
│   │   ├── index.html                 # Category page
│   │   ├── ccnp.html                  # CCNP course
│   │   ├── ccna.html                  # CCNA course
│   │   └── ccie.html                  # CCIE course
│   │
│   ├── leed-training/                 # LEED courses
│   │   ├── index.html                 # Category page
│   │   ├── leed-ga.html               # LEED GA
│   │   ├── leed-building-design.html  # Building Design
│   │   ├── leed-operations.html       # Operations & Maintenance
│   │   └── leed-interior-design.html  # Interior Design
│   │
│   ├── supply-chain/                  # Supply Chain courses
│   │   ├── index.html                 # Category page
│   │   ├── cscp.html                  # CSCP course
│   │   ├── cpim.html                  # CPIM course
│   │   └── cltd.html                  # CLTD course
│   │
│   ├── finance-management/            # Finance & Management courses
│   │   ├── index.html                 # Category page
│   │   ├── ccp-aace.html              # CCP course
│   │   ├── cep-aace.html              # CEP course
│   │   ├── cfm.html                   # CFM course
│   │   ├── cpfa-analyst.html          # CPFA Analyst
│   │   └── cpfa-accountant.html       # CPFA Accountant
│   │
│   ├── iso-training/                  # ISO Training courses
│   │   ├── index.html                 # Category page
│   │   ├── iso-9001.html              # ISO 9001
│   │   └── iso-50001.html             # ISO 50001
│   │
│   ├── scrum-agile/                   # Scrum & Agile courses
│   │   ├── index.html                 # Category page
│   │   ├── scrum-fundamentals.html    # Scrum Fundamentals
│   │   ├── scrum-master.html          # Scrum Master
│   │   └── product-owner.html         # Product Owner
│   │
│   ├── digital-marketing/             # Digital Marketing courses
│   │   ├── index.html                 # Category page
│   │   └── cdmp.html                  # CDMP course
│   │
│   └── facility-management/           # Facility Management courses
│       ├── index.html                 # Category page
│       ├── cfm-imfa.html              # CFM course
│       └── fmp-imfa.html              # FMP course
│
├── footer-content/                    # Footer pages [2]
│   ├── privacy-policy.html            # Privacy Policy
│   ├── refund-policy.html             # Refund Policy
│   ├── reschedule-policy.html         # Reschedule Policy
│   ├── terms-conditions.html          # Terms & Conditions
│   └── cookies-policy.html            # Cookies Policy
│
├── auth/                              # Authentication pages
│   ├── login.html                     # Login page
│   ├── register.html                  # Registration page
│   └── forgot-password.html           # Password recovery
│
├── blog/                              # Blog section (optional)
│   ├── index.html                     # Blog listing
│   └── posts/                         # Individual blog posts
│       ├── post-1.html
│       └── post-2.html
│
└── docs/                              # Documentation
    ├── setup.md                       # Setup instructions
    ├── deployment.md                  # Deployment guide
    └── style-guide.md                 # Design system guide
