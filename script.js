// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// WhatsApp Order Logic
function orderWhatsApp(comboName) {
    const phoneNumber = "5491124031773";
    const baseMessage = "Hola! Vi la página web y me gustaría pedir el ";
    const finalMessage = encodeURIComponent(baseMessage + comboName);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${finalMessage}`;
    
    window.open(whatsappUrl, '_blank');
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active'); // Add active class to trigger CSS transition
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Initialize fadeInUp elements
document.querySelectorAll('.fadeInUp, .menu-card, .feature-card, .info-item').forEach(el => {
    observer.observe(el);
});

// Dynamic Hero Animation Trigger
document.addEventListener('DOMContentLoaded', () => {
    const heroH1 = document.querySelector('.hero h1');
    const heroP = document.querySelector('.hero p');
    const heroBtns = document.querySelector('.hero-btns');

    setTimeout(() => {
        heroH1.style.opacity = '1';
        heroH1.classList.add('fade-in');
    }, 100);

    setTimeout(() => {
        heroP.style.opacity = '1';
        heroP.classList.add('fade-in-delay');
    }, 400);

    setTimeout(() => {
        heroBtns.style.opacity = '1';
        heroBtns.classList.add('fade-in-delay');
    }, 700);
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const menuClose = document.getElementById('menuClose');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    });
}

if (menuClose && mobileMenu) {
    menuClose.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

// Close menu when a link is clicked
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});
