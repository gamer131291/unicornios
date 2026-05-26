// Datos de la galería
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

// Cargar galería
function loadGallery() {
    const galleryContainer = document.getElementById('imageGrid');
    if (!galleryContainer) return;
    
    galleryImages.forEach(image => {
        const card = document.createElement('div');
        card.className = 'img-card';
        card.innerHTML = `
            <img src="${image.src}" alt="${image.alt}" loading="lazy" onerror="this.src='https://placehold.co/600x500/2a1e3a/ffffff?text=Imagen+Medieval+de+Unicornio'">
            <p>${image.title}</p>
        `;
        galleryContainer.appendChild(card);
    });
}

// Modal de registro
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
            
            alert(`✨ ¡Bienvenido/a ${name} al Gremio Unicornium!\n\nStephanie Romo, nuestra Socia Fundadora, te da la más cordial bienvenida. En breve recibirás acceso al conocimiento premium de unicornios.`);
            closeModal();
            registerForm.reset();
        });
    }
}

// Invitación al gremio
function initGuildInvitation() {
    const guildBtn = document.getElementById('guildInviteBtn');
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const modal = document.getElementById('registerModal');
    
    if (guildBtn) {
        guildBtn.addEventListener('click', () => {
            if (modal) {
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        });
    }
    
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', () => {
            alert('🌟 Beneficios del Gremio Premium:\n\n📜 Acceso a biblioteca digital de manuscritos\n🎓 Clases magistrales exclusivas\n🗺️ Guías de rutas mágicas\n🏅 Certificación oficial\n\nCompleta el registro para acceder a este conocimiento ancestral.');
        });
    }
}

// Scroll suave
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

// Menú móvil
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

// Scroll reveal
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
    }, { threshold: 0.1 });
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Navbar scroll
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            navbar.style.background = 'rgba(10, 10, 26, 0.95)';
        } else {
            navbar.style.background = 'rgba(10, 10, 26, 0.8)';
        }
    });
}

// Inicializar todo
document.addEventListener('DOMContentLoaded', () => {
    loadGallery();
    initModal();
    initGuildInvitation();
    initSmoothScroll();
    initMobileMenu();
    initScrollReveal();
    initNavbarScroll();
    
    console.log('🦄 Gremio de unicornios medievales inicializado — Stephanie Romo, Fundadora');
});
