const lampadaDadica = document.querySelector(".lampada")
const dica = document.getElementById('textoDica')
console.log(lampadaDadica)

function dicaAparecer(){
    dica.classList.remove('sumir')
}

lampadaDadica.addEventListener('click', dicaAparecer)