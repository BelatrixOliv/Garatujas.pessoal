const textarea = document.querySelector('.resposta');
const pronto = document.getElementById('pronto');

function respostaPergunta1(){
   const resposta = textarea.value;

    if(resposta=="1"){
        alert("boa")
    }
}

pronto.addEventListener('click',respostaPergunta1);

console.log(textarea)
console.log(pronto)

//astolfo


