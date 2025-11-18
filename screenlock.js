// tempo em ms
const LOADING_TIME = 3000;

document.addEventListener('DOMContentLoaded', () => {
    const loading = document.getElementById('loading-screen');
    const login = document.getElementById('login-screen');
    const btnEntrar = document.getElementById('btn-entrar');

    // após LOADING_TIME faz a transição: loading fade-out, login fade-in
    setTimeout(() => {
        // fade out loading
        loading.style.transition = 'opacity 600ms ease, visibility 600ms';
        loading.classList.add('fade-out');

        // depois do mesmo tempo, esconder completamente e mostrar login
        setTimeout(() => {
            loading.style.display = 'none';
            login.classList.remove('hidden');
            login.classList.add('fade-in');
        }, 620);
    }, LOADING_TIME);

    // comportamento do botão Entrar — redireciona para index.html (mesma página)
    btnEntrar.addEventListener('click', () => {
        // redireciona para index.html (vai recarregar esta página se o arquivo atual for index.html)
        window.location.href = 'index.html';

        // se você quiser redirecionar para outra página, troque acima por:
        // window.location.href = 'pagina-inicial.html';
    });
});
