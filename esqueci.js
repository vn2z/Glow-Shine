// Animação de entrada igual às outras páginas
window.addEventListener('load', () => {
    const box = document.getElementById('recoverBox');
    box.style.transition = 'transform 1s cubic-bezier(0.25, 1.25, 0.5, 1), opacity 1s ease-out';
    box.style.transform = 'translateY(0)';
    box.style.opacity = '1';
});
