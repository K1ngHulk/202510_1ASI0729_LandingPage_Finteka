// JavaScript para navegación suave
    document.querySelectorAll('nav a, .btn').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        // Verificar si el href apunta a una sección
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(href);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
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
