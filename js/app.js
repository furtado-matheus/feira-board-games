function atualizarTextoPopup(texto) {
    var textoPopup = document.querySelector('.msgConfirmacao');
    textoPopup.textContent = texto;
}

function confirmarEntrega(imagem, botao) {
    var confirmacao = document.getElementById("confirmacao");

    confirmacao.style.display = "block";

    var btnConfirmar = document.getElementById("btnConfirmar");
    var btnCancelar = document.getElementById("btnCancelar");

    btnConfirmar.addEventListener("click", function () {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        confirmacao.style.display = "none";
    });

    btnCancelar.addEventListener("click", function () {
        confirmacao.style.display = "none";
    });
}

function confirmarAluguel(imagem, botao) {
    var confirmacao = document.getElementById("confirmacao");

    confirmacao.style.display = "block";

    var btnConfirmar = document.getElementById("btnConfirmar");
    var btnCancelar = document.getElementById("btnCancelar");

    btnConfirmar.addEventListener("click", function () {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        confirmacao.style.display = "none";
    });

    btnCancelar.addEventListener("click", function () {
        confirmacao.style.display = "none";
    });
}

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name').textContent;

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        atualizarTextoPopup(`Deseja confirmar a entrega do jogo ${nomeJogo}?`);
        confirmarEntrega(imagem, botao);
    } else {
        atualizarTextoPopup(`Deseja confirmar o aluguel do jogo ${nomeJogo}?`);
        confirmarAluguel(imagem, botao);
    }
}
