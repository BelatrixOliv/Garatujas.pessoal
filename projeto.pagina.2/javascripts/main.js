//------------------------------------------------- variaveis e constantes
const textarea = document.querySelector('.resposta');
const pronto = document.getElementById('pronto');
const labelperg = document.querySelector('label');
const box = document.querySelector('.box');
const iniciar = document.getElementById('iniciar')

const totalDePerguntas = [
    "Primeiro, adicione um titulo principal com o nome do seu gatinho",//0
    "agora transforme esse nome em um titulo principal",//1 
]
let numeroDaPergunta = 0;
//------------------------------------------------- codigos 



function mudarPerguntaEverificar() {

    labelperg.innerText = totalDePerguntas[numeroDaPergunta];
    
    let regraTitulo = /^<h1>.*<\/h1>$/;
    let nomeDogato = textarea.value;

    if (regraTitulo.test(nomeDogato)) {
        alert('muito bem!')
        box.innerHTML = nomeDogato;
        nomeDogato.style.color = 'blue'
        numeroDaPergunta++;

    }

    if (numeroDaPergunta >= totalDePerguntas.length) {
        numeroDaPergunta = 0;
    }



}

pronto.addEventListener('click', mudarPerguntaEverificar)
mudarPerguntaEverificar();
