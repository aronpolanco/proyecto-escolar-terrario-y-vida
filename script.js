document.addEventListener('DOMContentLoaded', () => { // Ejecuta el código cuando el DOM está listo
    // Manejo del formulario
    const form = document.getElementById('miFormulario');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita el envío real del formulario (recarga de página)
            
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            
            // Validación básica
            if (!nombre || !email) {
                alert('Por favor, completa todos los campos obligatorios.');
                return;
            }
            
            // Simulación de envío
            const button = form.querySelector('button[type="submit"]');
            const originalText = button.textContent;
            
            button.textContent = 'Enviando...';
            button.disabled = true; // Deshabilita el botón durante el "envío"
            
            setTimeout(() => { // Simula un tiempo de espera (envío)
                alert(`¡Gracias ${nombre}! Tu mensaje ha sido enviado correctamente. Te contactaremos en ${email} pronto.`);
                form.reset(); // Limpia el formulario
                button.textContent = originalText;
                button.disabled = false;
            }, 1500);
        });
    }

    // Navegación suave (smooth scroll) para enlaces internos (#)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Solo para enlaces internos
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight - 20; // Ajuste por el header fijo
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth' // Desplazamiento suave
                    });
                    
                    // Cerrar menú móvil si está abierto
                    const navList = document.querySelector('.nav-list');
                    if (navList && navList.classList.contains('active')) {
                        navList.classList.remove('active');
                    }
                }
            }
        });
    });

    // Menú hamburguesa para móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active'); // Agrega o quita la clase 'active'
        });
        
        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav') && !e.target.closest('.menu-toggle')) {
                navList.classList.remove('active');
            }
        });
    }

    // Efecto de carga para las tarjetas (animación secuencial)
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s, transform 0.5s';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index); // Retardo escalonado para cada tarjeta
    });

    // Año actual en footer (dinámico)
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
