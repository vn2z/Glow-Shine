// Animação de entrada
window.addEventListener('load', () => {
    const box = document.getElementById('successBox');
    box.style.transition = 'transform 1s cubic-bezier(0.25, 1.25, 0.5, 1), opacity 1s ease-out';
    box.style.transform = 'translateY(0)';
    box.style.opacity = '1';

    // Redirecionamento automático após 4 segundos
    setTimeout(() => {
        window.location.href = "login.html";
    }, 4000);
});
