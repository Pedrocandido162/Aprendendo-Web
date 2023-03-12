
const botoesCarrossel=document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
botoesCarrossel.forEach((botao, indice)=>{
    botao.addEventListener('click',()=>{
        desativarBotaoSelecionado();
        SelecionarBotaoCarrossel(botao);
        
        EscondeImagemAtiva();
        MostrarImagemDeFundo(indice);
    })
})

function EscondeImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function MostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function SelecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
