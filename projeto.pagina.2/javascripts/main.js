const textarea = document.querySelector('.resposta');
const pronto = document.getElementById('pronto');
const perguntaLabel = document.querySelector('label');
const box = document.querySelector('.box');

const perguntas = [
    "Adicione um nome para seu gatinho usando a tag h1",
    "Mude a cor do nome agora usando css",
    "Mude a cor do fundo com css",
]
let perguntaAtual = 0;

while (perguntaAtual <= 3) {
    function perguntasDolabel() {
        perguntaLabel.innerText = perguntas[perguntaAtual];
        perguntaAtual++;
    }

}

pronto.addEventListener('click', perguntasDolabel)
perguntasDolabel();
