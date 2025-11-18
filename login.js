// Animação da caixa de login
window.addEventListener('load', () => {
    const box = document.getElementById('loginBox');
    // Configura a transição
    box.style.transition = 'transform 1s cubic-bezier(0.25, 1.25, 0.5, 1), opacity 1s ease-out';
    // Aplica o estado final
    box.style.transform = 'translateY(0)';
    box.style.opacity = '1';
});
    