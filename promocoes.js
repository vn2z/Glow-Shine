const likes = document.querySelectorAll('.like');
likes.forEach(like => {
    like.addEventListener('click', () => {
        like.classList.toggle('ativo');
        like.classList.toggle('fas');
        like.classList.toggle('far');
    });
});

const cards = document.querySelectorAll('.card');
cards.forEach((card, i) => {
    card.style.animationDelay = `${i * 0.15}s`;
});
document.addEventListener('DOMContentLoaded', () => {
    // 1. Função para carregar ou inicializar o carrinho
    function getCarrinho() {
        return JSON.parse(localStorage.getItem('glowshine_carrinho')) || [];
    }

    // 2. Função para salvar o carrinho
    function setCarrinho(carrinho) {
        localStorage.setItem('glowshine_carrinho', JSON.stringify(carrinho));
    }

    // 3. Lógica do Botão de Adicionar (Coração)
    const cardElements = document.querySelectorAll('.card');

    cardElements.forEach(card => {
        const likeButton = card.querySelector('.like');
        
        // Coleta os dados do produto (use IDs reais para produção)
        const produto = {
            id: card.querySelector('h3').textContent.replace(/\s/g, ''), // ID de exemplo
            nome: card.querySelector('h3').textContent,
            descricao: card.querySelector('.descricao').textContent,
            preco: parseFloat(card.querySelector('.preco').textContent.replace('R$', '').replace(',', '.')),
            imagemSrc: card.querySelector('.card-image-container img').getAttribute('src'),
            quantidade: 1, // Adiciona 1 por padrão
            selecionado: true // Selecionado por padrão no carrinho
        };

        // Verifica se já está no carrinho para inicializar o ícone
        const carrinhoAtual = getCarrinho();
        if (carrinhoAtual.some(item => item.id === produto.id)) {
            likeButton.classList.add('ativo');
        }

        likeButton.addEventListener('click', () => {
            let carrinho = getCarrinho();
            const index = carrinho.findIndex(item => item.id === produto.id);

            if (index > -1) {
                // Produto já está no carrinho: Remove
                carrinho.splice(index, 1);
                likeButton.classList.remove('ativo');
                alert(`${produto.nome} removido do carrinho.`);
            } else {
                // Produto não está no carrinho: Adiciona
                carrinho.push(produto);
                likeButton.classList.add('ativo');
                alert(`${produto.nome} adicionado ao carrinho!`);
            }
            
            setCarrinho(carrinho);
        });
    });
});