//------------------------------------------------- variaveis e constantes
const textarea = document.querySelector('.resposta');
const pronto = document.getElementById('pronto');
const labelperg = document.querySelector('label');
const box = document.querySelector('.box');
const iniciar = document.getElementById('iniciar')

const totalDePerguntas = [
    "Primeiro, digite um nome para o seu gatinho",//0
    "agora transforme esse nome em um titulo principal",//1 
]
let numeroDaPergunta = 0;
//------------------------------------------------- codigos 



function mudarPerguntaEverificar() {
    if (numeroDaPergunta >= totalDePerguntas.length) {
        numeroDaPergunta = 0;
    } else if (numeroDaPergunta) {
        labelperg.innerText = totalDePerguntas[numeroDaPergunta];
        numeroDaPergunta++;
    }



}

pronto.addEventListener('click', mudarPerguntaEverificar)
mudarPerguntaEverificar();
