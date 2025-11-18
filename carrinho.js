document.addEventListener("DOMContentLoaded", () => {
    const totalEl = document.getElementById("valor-total");
    const checkAll = document.getElementById("selecionar-tudo");
    const labelCheckAll = document.getElementById("label-selecionar-tudo");

    // Inicializa os itens, mas será refeito em atualizarTotal e nas funções de remoção
    let total = 0;

    function atualizarTotal() {
        total = 0;
        // Re-seleciona os itens para garantir que o array esteja sempre atualizado (após remoções)
        const itensAtuais = Array.from(document.querySelectorAll(".carrinho-item")); 
        
        itensAtuais.forEach(item => {
            const checkbox = item.querySelector(".item-checkbox");
            // Substitui R$, e troca vírgula por ponto para cálculo
            const precoText = item.querySelector(".item-preco").textContent.replace("R$", "").replace(",", "."); 
            const qtd = parseInt(item.querySelector("span").textContent);
            
            if (checkbox.checked) {
                total += parseFloat(precoText) * qtd;
            }
        });
        
        // Formata o total para exibir corretamente com R$ e vírgula
        totalEl.textContent = `R$ ${total.toFixed(2).replace(".", ",")}`;
    }

    // Função global para mudar a quantidade, chamada pelo onclick no HTML
    window.alterarQtd = (id, delta) => {
        // Busca o item pelo ID que está no parágrafo <p>ID: X</p>
        const item = Array.from(document.querySelectorAll(".carrinho-item")).find(i => i.querySelector("p").textContent.includes(`ID: ${id}`));
        if (!item) return;
        
        const qtdSpan = item.querySelector(".item-quantidade span");
        let qtd = parseInt(qtdSpan.textContent);
        
        // Garante que a quantidade mínima é 1
        qtd = Math.max(1, qtd + delta); 
        qtdSpan.textContent = qtd;
        
        atualizarTotal();
    };

    // Função global para remover o item, chamada pelo onclick no HTML
    window.remover = (id) => {
        // Busca o item pelo ID
        const item = Array.from(document.querySelectorAll(".carrinho-item")).find(i => i.querySelector("p").textContent.includes(`ID: ${id}`));
        
        if (item) {
            item.remove();
        }
        
        atualizarTotal();
    };

    // Evento para "Selecionar Tudo"
    checkAll.addEventListener("change", () => {
        const checked = checkAll.checked;
        document.querySelectorAll(".carrinho-item .item-checkbox").forEach(cb => cb.checked = checked);
        atualizarTotal();
    });

    // Evento para checkboxes individuais
    document.getElementById("lista-produtos-carrinho").addEventListener('change', (event) => {
        if (event.target.classList.contains('item-checkbox')) {
            atualizarTotal();
            
            // Atualiza o checkbox "Selecionar Tudo"
            const totalItems = document.querySelectorAll(".carrinho-item").length;
            const checados = document.querySelectorAll(".carrinho-item .item-checkbox:checked").length;
            checkAll.checked = (totalItems === checados);
        }
    });

    // Inicializa o total no carregamento da página
    atualizarTotal();
});