document.addEventListener('DOMContentLoaded', () => {
    // FUNÇÕES DE UTILIDADE PARA GERENCIAR O CARRINHO NO LOCAL STORAGE
    function getCarrinho() {
        // Tenta buscar o carrinho salvo, se não houver, retorna um array vazio.
        return JSON.parse(localStorage.getItem('glowshine_carrinho')) || [];
    }

    function setCarrinho(carrinho) {
        // Salva o array do carrinho no Local Storage
        localStorage.setItem('glowshine_carrinho', JSON.stringify(carrinho));
    }

    // LÓGICA DO BOTÃO DE ADICIONAR AO CARRINHO (CORAÇÃO)
    const cardElements = document.querySelectorAll('.card');

    cardElements.forEach(card => {
        const likeButton = card.querySelector('.like');
        
        // 1. Coleta os dados do produto
        // É CRUCIAL que o 'id' seja único. Aqui usamos o nome como ID temporário.
        const produto = {
            id: card.querySelector('h3').textContent.trim(), 
            nome: card.querySelector('h3').textContent.trim(),
            descricao: card.querySelector('.descricao').textContent.trim(),
            // Remove R$, substitui vírgula por ponto e converte para número
            preco: parseFloat(card.querySelector('.preco').textContent.replace('R$', '').replace(',', '.').trim()),
            imagemSrc: card.querySelector('.card-image-container img').getAttribute('src'),
            quantidade: 1, 
            selecionado: true
        };
        
        // Adiciona o preço antigo, se existir
        const precoAntigoEl = card.querySelector('.preco-antigo');
        if (precoAntigoEl) {
            produto.precoAntigo = precoAntigoEl.textContent.trim();
        }

        // 2. Inicializa o estado do ícone
        const carrinhoAtual = getCarrinho();
        if (carrinhoAtual.some(item => item.id === produto.id)) {
            likeButton.classList.add('fas'); // Coração preenchido (Adicionado)
            likeButton.classList.remove('far'); // Coração vazado
        }

        // 3. Adiciona o Listener de clique
        likeButton.addEventListener('click', () => {
            let carrinho = getCarrinho();
            const index = carrinho.findIndex(item => item.id === produto.id);

            if (index > -1) {
                // Produto JÁ ESTÁ no carrinho: Remove
                carrinho.splice(index, 1);
                likeButton.classList.add('far');
                likeButton.classList.remove('fas');
                alert(`${produto.nome} removido do carrinho.`);
            } else {
                // Produto NÃO ESTÁ no carrinho: Adiciona
                carrinho.push(produto);
                likeButton.classList.add('fas');
                likeButton.classList.remove('far');
                alert(`${produto.nome} adicionado ao carrinho!`);
            }
            
            setCarrinho(carrinho);
            
            // Opcional: Redirecionar para o carrinho após a adição (descomente se quiser)
            // window.location.href = 'carrinho.html';
        });
    });
});