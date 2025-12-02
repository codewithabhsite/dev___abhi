// ============================================
// Theme Toggle Functionality
// ============================================
const themeToggle = document.getElementById('theme-toggle');
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {
    document.documentElement.classList.add('dark');
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

// Theme toggle click handler
themeToggle.addEventListener('click', function () {
    // Toggle icons
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // Toggle dark mode
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
});

// ============================================
// Mobile Menu Toggle
// ============================================
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
    });
}

// ============================================
// Dynamic Headline Text Cycling
// ============================================
const dynamicText = document.getElementById('dynamic-text');

if (dynamicText) {
    const headlines = [
        'Full-Stack Developer',
        'SaaS Builder',
        'Tech Innovator',
        'Agency Founder',
        'Problem Solver',
        'AI Enthusiast'
    ];

    let currentIndex = 0;

    function typeWriter(text, index, callback) {
        if (index < text.length) {
            dynamicText.textContent += text.charAt(index);
            setTimeout(() => typeWriter(text, index + 1, callback), 100);
        } else {
            setTimeout(callback, 2000);
        }
    }

    function eraseText(callback) {
        const currentText = dynamicText.textContent;
        if (currentText.length > 0) {
            dynamicText.textContent = currentText.substring(0, currentText.length - 1);
            setTimeout(() => eraseText(callback), 50);
        } else {
            callback();
        }
    }

    function cycleHeadlines() {
        typeWriter(headlines[currentIndex], 0, () => {
            eraseText(() => {
                currentIndex = (currentIndex + 1) % headlines.length;
                cycleHeadlines();
            });
        });
    }

    cycleHeadlines();
}

// ============================================
// Smooth Scrolling for Anchor Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// Navbar Scroll Effect
// ============================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('shadow-lg');
    } else {
        navbar.classList.remove('shadow-lg');
    }

    lastScroll = currentScroll;
});

// ============================================
// GSAP Animations
// ============================================
gsap.registerPlugin(ScrollTrigger);

// Hero section animation
if (document.querySelector('.hero-content')) {
    gsap.from('.hero-content', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    });
}

// Stat cards animation
gsap.utils.toArray('.stat-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.6,
        delay: i * 0.1
    });
});

// Project cards animation
gsap.utils.toArray('.project-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.6,
        delay: i * 0.1
    });
});

// Skill cards animation
gsap.utils.toArray('.skill-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        scale: 0.9,
        duration: 0.5,
        delay: i * 0.1
    });
});

// Timeline animation
gsap.utils.toArray('.timeline-item').forEach((item, i) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -50,
        duration: 0.6,
        delay: i * 0.15
    });
});

// Blog cards animation
gsap.utils.toArray('.blog-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.5,
        delay: i * 0.1
    });
});

// Skill progress bars animation
gsap.utils.toArray('.skill-progress-bar').forEach(bar => {
    const width = bar.getAttribute('data-width');
    gsap.to(bar, {
        scrollTrigger: {
            trigger: bar,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        width: width + '%',
        duration: 1.5,
        ease: 'power2.out'
    });
});

// Page header animation
if (document.querySelector('.page-header')) {
    gsap.from('.page-title', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
    });

    gsap.from('.page-subtitle', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out'
    });
}

// ============================================
// Contact Form Validation & Submission
// ============================================
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Show success message
        alert(`Thank you, ${name}! Your message has been sent successfully. I'll get back to you soon.`);

        // Reset form
        contactForm.reset();

        // In a real application, you would send the data to a server here
        console.log('Form submitted:', { name, email, message });
    });
}

// ============================================
// Active Navigation Link Highlighting
// ============================================
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Set active link on page load
setActiveNavLink();

// ============================================
// Read More / Less Functionality (for About page)
// ============================================
const readMoreBtn = document.getElementById('read-more-btn');
const extraContent = document.getElementById('extra-content');

if (readMoreBtn && extraContent) {
    readMoreBtn.addEventListener('click', function () {
        if (extraContent.classList.contains('hidden')) {
            extraContent.classList.remove('hidden');
            readMoreBtn.textContent = 'Read Less';
        } else {
            extraContent.classList.add('hidden');
            readMoreBtn.textContent = 'Read More';
        }
    });
}

// ============================================
// Filter Projects by Category
// ============================================
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', function () {
        const filter = this.getAttribute('data-filter');

        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        // Filter projects
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
                gsap.from(card, {
                    opacity: 0,
                    scale: 0.9,
                    duration: 0.4
                });
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// ============================================
// Counter Animation for Stats
// ============================================
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const suffix = element.textContent.replace(/[0-9]/g, '');

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 16);
}

// Trigger counter animation when stats come into view
const statNumbers = document.querySelectorAll('.stat-card div:first-child');
statNumbers.forEach(stat => {
    ScrollTrigger.create({
        trigger: stat,
        start: 'top 80%',
        once: true,
        onEnter: () => {
            const target = parseInt(stat.textContent);
            animateCounter(stat, target);
        }
    });
});

// ============================================
// Copy Email to Clipboard
// ============================================
const copyEmailBtn = document.getElementById('copy-email-btn');

if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', function () {
        const email = 'abhishek@karama.agency';
        navigator.clipboard.writeText(email).then(() => {
            const originalText = this.textContent;
            this.textContent = 'Copied!';
            setTimeout(() => {
                this.textContent = originalText;
            }, 2000);
        });
    });
}

// ============================================
// Lazy Loading Images
// ============================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    const lazyImages = document.querySelectorAll('img.lazy');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ============================================
// Console Welcome Message
// ============================================
console.log('%c👋 Hello there!', 'font-size: 24px; font-weight: bold; color: #1890ff;');
console.log('%cWelcome to Abhishek Shukla\'s Portfolio', 'font-size: 16px; color: #fa8c16;');
console.log('%cInterested in collaborating? Let\'s connect!', 'font-size: 14px; color: #666;');
console.log('%cEmail: abhishek@karama.agency', 'font-size: 14px; color: #1890ff;');
