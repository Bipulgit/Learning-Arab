/**
 * SanMark Learning - Hero Slider
 * Functional vanilla JavaScript slider with touch support
 */

class HeroSlider {
    constructor(container) {
        this.container = typeof container === 'string' ? document.querySelector(container) : container;
        if (!this.container) return;

        // Configuration
        this.config = {
            autoPlay: true,
            autoPlayInterval: 5000,
            animationDuration: 1000,
            enableTouch: true,
            enableKeyboard: true,
            pauseOnHover: true,
            showNavigation: true,
            showDots: true
        };

        // Initialize
        this.currentSlide = 0;
        this.slides = [];
        this.totalSlides = 0;
        this.isPlaying = true;
        this.autoPlayTimer = null;
        this.isAnimating = false;

        this.init();
    }

    init() {
        this.createSliderStructure();
        this.bindEvents();
        this.startAutoPlay();
        
        // Show first slide
        this.showSlide(0, false);
        
        console.log(`✅ Hero Slider initialized with ${this.totalSlides} slides`);
    }

    createSliderStructure() {
        // Get all slides from the container
        this.slides = Array.from(this.container.querySelectorAll('.hero-slide'));
        this.totalSlides = this.slides.length;

        if (this.totalSlides === 0) {
            console.warn('No slides found in hero slider');
            return;
        }

        // Create slider wrapper
        const sliderWrapper = document.createElement('div');
        sliderWrapper.className = 'slider-wrapper relative w-full h-full overflow-hidden';
        
        // Move slides to wrapper
        this.slides.forEach((slide, index) => {
            slide.className = `hero-slide absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${index === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`;
            sliderWrapper.appendChild(slide);
        });

        // Clear container and add wrapper
        this.container.innerHTML = '';
        this.container.appendChild(sliderWrapper);

        // Create navigation if enabled
        if (this.config.showNavigation) {
            this.createNavigation();
        }

        // Create dots if enabled  
        if (this.config.showDots) {
            this.createDots();
        }

        // Create progress bar
        this.createProgressBar();
    }

    createNavigation() {
        // Previous button
        const prevBtn = document.createElement('button');
        prevBtn.className = 'slider-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110';
        prevBtn.innerHTML = '<i class="fas fa-chevron-left text-lg"></i>';
        prevBtn.setAttribute('aria-label', 'Previous slide');

        // Next button
        const nextBtn = document.createElement('button');
        nextBtn.className = 'slider-next absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110';
        nextBtn.innerHTML = '<i class="fas fa-chevron-right text-lg"></i>';
        nextBtn.setAttribute('aria-label', 'Next slide');

        this.container.appendChild(prevBtn);
        this.container.appendChild(nextBtn);

        this.prevBtn = prevBtn;
        this.nextBtn = nextBtn;
    }

    createDots() {
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'slider-dots absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3';

        for (let i = 0; i < this.totalSlides; i++) {
            const dot = document.createElement('button');
            dot.className = `slider-dot w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-all duration-300 ${i === 0 ? 'bg-white scale-125' : ''}`;
            dot.setAttribute('data-slide', i);
            dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
            dotsContainer.appendChild(dot);
        }

        this.container.appendChild(dotsContainer);
        this.dots = dotsContainer.querySelectorAll('.slider-dot');
    }

    createProgressBar() {
        const progressBar = document.createElement('div');
        progressBar.className = 'slider-progress absolute bottom-0 left-0 w-full h-1 bg-black/20 z-30';
        
        const progressFill = document.createElement('div');
        progressFill.className = 'slider-progress-fill h-full bg-white transition-all duration-100 ease-linear';
        progressFill.style.width = '0%';
        
        progressBar.appendChild(progressFill);
        this.container.appendChild(progressBar);
        
        this.progressFill = progressFill;
    }

    bindEvents() {
        // Navigation buttons
        if (this.prevBtn && this.nextBtn) {
            this.prevBtn.addEventListener('click', () => this.previousSlide());
            this.nextBtn.addEventListener('click', () => this.nextSlide());
        }

        // Dots
        if (this.dots) {
            this.dots.forEach((dot, index) => {
                dot.addEventListener('click', () => this.goToSlide(index));
            });
        }

        // Pause on hover
        if (this.config.pauseOnHover) {
            this.container.addEventListener('mouseenter', () => this.pauseAutoPlay());
            this.container.addEventListener('mouseleave', () => this.resumeAutoPlay());
        }

        // Keyboard navigation
        if (this.config.enableKeyboard) {
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') this.previousSlide();
                if (e.key === 'ArrowRight') this.nextSlide();
                if (e.key === ' ') {
                    e.preventDefault();
                    this.toggleAutoPlay();
                }
            });
        }

        // Touch support
        if (this.config.enableTouch) {
            this.bindTouchEvents();
        }

        // Visibility API - pause when tab is not active
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.pauseAutoPlay();
            } else {
                this.resumeAutoPlay();
            }
        });
    }

    bindTouchEvents() {
        let startX = 0;
        let startY = 0;
        let endX = 0;
        let endY = 0;

        this.container.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        }, { passive: true });

        this.container.addEventListener('touchmove', (e) => {
            // Prevent scroll if horizontal swipe
            if (Math.abs(e.touches[0].clientX - startX) > Math.abs(e.touches[0].clientY - startY)) {
                e.preventDefault();
            }
        });

        this.container.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;
            this.handleSwipe(startX, startY, endX, endY);
        });
    }

    handleSwipe(startX, startY, endX, endY) {
        const deltaX = endX - startX;
        const deltaY = endY - startY;
        const minSwipeDistance = 50;

        // Only process horizontal swipes
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
            if (deltaX > 0) {
                this.previousSlide();
            } else {
                this.nextSlide();
            }
        }
    }

    showSlide(index, animate = true) {
        if (this.isAnimating && animate) return;
        if (index < 0 || index >= this.totalSlides) return;

        this.isAnimating = animate;
        this.currentSlide = index;

        // Update slides
        this.slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.opacity = '1';
                slide.style.transform = 'scale(1)';
                slide.style.zIndex = '2';
            } else {
                slide.style.opacity = '0';
                slide.style.transform = 'scale(1.05)';
                slide.style.zIndex = '1';
            }
        });

        // Update dots
        if (this.dots) {
            this.dots.forEach((dot, i) => {
                if (i === index) {
                    dot.classList.add('bg-white', 'scale-125');
                    dot.classList.remove('bg-white/50');
                } else {
                    dot.classList.remove('bg-white', 'scale-125');
                    dot.classList.add('bg-white/50');
                }
            });
        }

        // Animate text content
        this.animateSlideContent(this.slides[index]);

        // Reset animation flag
        if (animate) {
            setTimeout(() => {
                this.isAnimating = false;
            }, this.config.animationDuration);
        }
    }

    animateSlideContent(slide) {
        // Reset and animate text elements
        const textElements = slide.querySelectorAll('.slide-content > *');
        textElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(50px)';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200 + 500);
        });
    }

    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.totalSlides;
        this.goToSlide(nextIndex);
    }

    previousSlide() {
        const prevIndex = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.goToSlide(prevIndex);
    }

    goToSlide(index) {
        if (index !== this.currentSlide) {
            this.showSlide(index);
            this.resetProgressBar();
        }
    }

    startAutoPlay() {
        if (!this.config.autoPlay) return;
        
        this.autoPlayTimer = setInterval(() => {
            this.nextSlide();
        }, this.config.autoPlayInterval);

        this.startProgressBar();
    }

    pauseAutoPlay() {
        if (this.autoPlayTimer) {
            clearInterval(this.autoPlayTimer);
            this.autoPlayTimer = null;
        }
        this.pauseProgressBar();
        this.isPlaying = false;
    }

    resumeAutoPlay() {
        if (this.isPlaying || !this.config.autoPlay) return;
        this.startAutoPlay();
        this.isPlaying = true;
    }

    toggleAutoPlay() {
        if (this.isPlaying) {
            this.pauseAutoPlay();
        } else {
            this.resumeAutoPlay();
        }
    }

    startProgressBar() {
        if (!this.progressFill) return;
        
        this.progressFill.style.transition = `width ${this.config.autoPlayInterval}ms linear`;
        this.progressFill.style.width = '100%';
    }

    pauseProgressBar() {
        if (!this.progressFill) return;
        
        const computedWidth = window.getComputedStyle(this.progressFill).width;
        this.progressFill.style.transition = 'none';
        this.progressFill.style.width = computedWidth;
    }

    resetProgressBar() {
        if (!this.progressFill) return;
        
        this.progressFill.style.transition = 'none';
        this.progressFill.style.width = '0%';
        
        setTimeout(() => {
            if (this.isPlaying) {
                this.startProgressBar();
            }
        }, 50);
    }

    // Public methods
    destroy() {
        if (this.autoPlayTimer) {
            clearInterval(this.autoPlayTimer);
        }
        
        // Remove event listeners
        document.removeEventListener('keydown', this.keyboardHandler);
        document.removeEventListener('visibilitychange', this.visibilityHandler);
        
        console.log('Hero slider destroyed');
    }

    addSlide(slideHTML, index = -1) {
        // Method to dynamically add slides
        const slideElement = document.createElement('div');
        slideElement.className = 'hero-slide absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out opacity-0 scale-105';
        slideElement.innerHTML = slideHTML;
        
        const wrapper = this.container.querySelector('.slider-wrapper');
        if (index >= 0 && index < this.totalSlides) {
            wrapper.insertBefore(slideElement, this.slides[index]);
            this.slides.splice(index, 0, slideElement);
        } else {
            wrapper.appendChild(slideElement);
            this.slides.push(slideElement);
        }
        
        this.totalSlides = this.slides.length;
        
        // Recreate dots
        if (this.config.showDots) {
            this.container.querySelector('.slider-dots').remove();
            this.createDots();
            this.bindDotEvents();
        }
    }

    bindDotEvents() {
        this.dots = this.container.querySelectorAll('.slider-dot');
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
    }
}

// Auto-initialize hero slider when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const heroSliderContainer = document.querySelector('#hero-slider');
    if (heroSliderContainer) {
        window.heroSlider = new HeroSlider('#hero-slider');
    }
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HeroSlider;
}
