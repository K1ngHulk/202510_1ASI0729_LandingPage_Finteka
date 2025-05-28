// JavaScript para navegación suave
document.querySelectorAll('nav a, .btn').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        // Verificar si el href apunta a una sección
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(href);
            if (targetSection) {
                // Cerrar el menú móvil si está abierto
                if (navLinks.classList.contains('active')) {
                    closeMenu();
                }
                
                // Pequeño retraso para permitir que el menú se cierre antes de desplazarse
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

// Funcionalidad del menú hamburguesa
const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');
const navButtons = document.getElementById('nav-buttons');
const menuOverlay = document.getElementById('menu-overlay');

// Función para manejar el menú hamburguesa con teclado también
function toggleMenu() {
    const isActive = navLinks.classList.contains('active');
    navLinks.classList.toggle('active');
    navButtons.classList.toggle('active');
    hamburger.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    document.body.style.overflow = !isActive ? 'hidden' : '';
    
    // Actualizar atributos ARIA
    hamburger.setAttribute('aria-expanded', !isActive);
}

hamburger.addEventListener('click', toggleMenu);

// Permitir activación con teclado (accesibilidad)
hamburger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu();
    }
});

// Función para cerrar el menú
function closeMenu() {
    navLinks.classList.remove('active');
    navButtons.classList.remove('active');
    hamburger.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = '';
    
    // Actualizar atributos ARIA
    hamburger.setAttribute('aria-expanded', 'false');
}

// Cerrar el menú al hacer clic en el overlay
menuOverlay.addEventListener('click', closeMenu);

// Cerrar el menú con la tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        closeMenu();
    }
});

    // Destacar el enlace de navegación activo según la sección visible
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
