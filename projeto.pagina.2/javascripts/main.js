//------------------------------------------------- variaveis e constantes
const textarea = document.querySelector('.resposta');
const pronto = document.getElementById('pronto');
const labelperg = document.querySelector('label');
const box = document.querySelector('.box');
const iniciar = document.getElementById('iniciar')

const totalDePerguntas = [
    "Adicione um nome para seu gatinho usando a tag h1", //0
    "Mude a cor do nome agora usando css",//1
    "Mude a cor do fundo com css",//2
]
let numeroDaPergunta = 0;
//------------------------------------------------- codigos 



function mudarPergunta() {
    if (numeroDaPergunta >= totalDePerguntas.length) {
        numeroDaPergunta = 0;
    } else {
        labelperg.innerText = totalDePerguntas[numeroDaPergunta];
        numeroDaPergunta++;
    }

}

pronto.addEventListener('click', mudarPergunta)
mudarPergunta();