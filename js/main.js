// ========== DATOS DE LA GALERÍA ==========
const galleryImages = [
    {
        src: 'assets/img/tapiz-unicornio.jpg',
        alt: 'Tapiz medieval del unicornio',
        title: 'Tapiz "La caza del unicornio" • Museo Cluny'
    },
    {
        src: 'assets/img/bestiario.jpg',
        alt: 'Bestiario inglés con unicornio',
        title: 'Bestiario de Rochester • S. XIII'
    },
    {
        src: 'assets/img/doncella-unicornio.jpg',
        alt: 'Unicornio y doncella medieval',
        title: 'Miniatura francesa • S. XV'
    },
    {
        src: 'assets/img/cuerno-unicornio.jpg',
        alt: 'Cuerno de unicornio (alicorne)',
        title: 'El "alicorne" • propiedad real'
    }
];

// ========== CARGAR GALERÍA DINÁMICAMENTE ==========
function loadGallery() {
    const galleryContainer = document.getElementById('imageGrid');
    if (!galleryContainer) return;
    
    galleryImages.forEach(image => {
        const card = document.createElement('div');
        card.className = 'img-card';
        card.innerHTML = `
            <img src="${image.src}" alt="${image.alt}" loading="lazy">
            <p>${image.title}</p>
        `;
        galleryContainer.appendChild(card);
    });
}

// ========== MODAL DE REGISTRO ==========
function initModal() {
    const modal = document.getElementById('registerModal');
    const openBtns = document.querySelectorAll('#openRegisterBtn, #openRegisterBtn2');
    const closeBtn = document.getElementById('closeModalBtn');
    const registerForm = document.getElementById('registerForm');
    
    if (!modal) return;
    
    function openModal() {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
    
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    openBtns.forEach(btn => {
        if (btn) btn.addEventListener('click', openModal);
    });
    
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name')?.value || '';
            const email = document.getElementById('email')?.value || '';
            
            // Aquí es donde conectarás con tu back-end
            // Ejemplo de fetch para cuando tengas el API:
            /*
            fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password: document.getElementById('password')?.value })
            })
            .then(response => response.json())
            .then(data => console.log('Success:', data))
            .catch(error => console.error('Error:', error));
            */
            
            alert(`✨ Gracias ${name || 'viajero'}, tu registro fue recibido.\nEn breve conectaremos con el servidor para guardar tus datos. (Back-end pendiente)`);
            closeModal();
            registerForm.reset();
        });
    }
}

// ========== SCROLL SUAVE ==========
function initSmoothScroll() {
    const exploreBtn = document.getElementById('exploreBtn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            const gallerySection = document.getElementById('galeria');
            if (gallerySection) {
                gallerySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }
    
    // Scroll suave para todos los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ========== MENÚ MÓVIL ==========
function initMobileMenu() {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
    }
}

// ========== SCROLL REVEAL (ANIMACIONES) ==========
function initScrollReveal() {
    const elements = document.querySelectorAll('.glass-card, .bestiary-card, .img-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '50px' });
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ========== NAVBAR SCROLL EFFECT ==========
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.background = 'rgba(10, 10, 26, 0.95)';
            navbar.style.backdropFilter = 'blur(12px)';
        } else {
            navbar.style.background = 'rgba(10, 10, 26, 0.8)';
        }
        
        lastScroll = currentScroll;
    });
}

// ========== PARALLAX EFFECT ==========
function initParallax() {
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        if (hero) {
            const scrolled = window.pageYOffset;
            hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
        }
    });
}

// ========== INICIALIZAR TODO AL CARGAR ==========
document.addEventListener('DOMContentLoaded', () => {
    loadGallery();
    initModal();
    initSmoothScroll();
    initMobileMenu();
    initScrollReveal();
    initNavbarScroll();
    initParallax();
    
    console.log('🦄 Página de unicornios medievales inicializada — Back-end listo para conectar en /api/register');
});

// ========== PRELOADER (OPCIONAL) ==========
window.addEventListener('load', () => {
    // Pequeño delay para asegurar que todo está cargado
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
