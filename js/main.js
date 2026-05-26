// ========== FUNCIÓN PARA EL BOTÓN DE INVITACIÓN AL GREMIO ==========
function initGuildInvitation() {
    const guildBtn = document.getElementById('guildInviteBtn');
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const modal = document.getElementById('registerModal');
    
    if (guildBtn) {
        guildBtn.addEventListener('click', () => {
            if (modal) {
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
                // Mostrar mensaje especial en consola
                console.log('🦄 Stephanie Romo agradece tu interés en el Gremio Unicornium');
            }
        });
    }
    
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', () => {
            // Mostrar alerta con más información
            alert('🌟 Beneficios del Gremio Premium:\n\n📜 Acceso a biblioteca digital de manuscritos\n🎓 Clases magistrales exclusivas\n🗺️ Guías de rutas mágicas\n🏅 Certificación oficial\n\nCompleta el registro para acceder a todo este conocimiento ancestral.');
        });
    }
}
