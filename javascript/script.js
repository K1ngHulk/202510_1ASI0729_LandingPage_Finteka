document.querySelectorAll('nav a, .btn').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(href);
            if (targetSection) {
                if (navLinks.classList.contains('active')) {
                    closeMenu();
                }
                
                setTimeout(() => {
                    window.scrollTo({
                        top: targetSection.offsetTop,
                        behavior: 'smooth'
                    });
                }, 100);
            }
        }
    });
});

const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');
const navButtons = document.getElementById('nav-buttons');
const menuOverlay = document.getElementById('menu-overlay');

function toggleMenu() {
    const isActive = navLinks.classList.contains('active');
    navLinks.classList.toggle('active');
    navButtons.classList.toggle('active');
    hamburger.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    document.body.style.overflow = !isActive ? 'hidden' : '';
    
    hamburger.setAttribute('aria-expanded', !isActive);
}

hamburger.addEventListener('click', toggleMenu);

hamburger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu();
    }
});

function closeMenu() {
    navLinks.classList.remove('active');
    navButtons.classList.remove('active');
    hamburger.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = '';
    
    hamburger.setAttribute('aria-expanded', 'false');
}

menuOverlay.addEventListener('click', closeMenu);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        closeMenu();
    }
});

    window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    let currentSection = '';

    sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - 100) {
    currentSection = section.getAttribute('id');
}
});

    navLinks.forEach(link => {
    link.style.color = 'white';
    if (link.getAttribute('href') === `#${currentSection}`) {
    link.style.color = '#4ecdc4';
}
});
});
