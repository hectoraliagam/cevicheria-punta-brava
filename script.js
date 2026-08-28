document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };
    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);
    fadeElements.forEach(el => {
        appearOnScroll.observe(el);
    });
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', () => {
        alert("Navegación móvil: Aquí se desplegaría el menú. Para el diseño final, los clientes usarán principalmente los botones grandes de la pantalla (Hero).");
    });
});