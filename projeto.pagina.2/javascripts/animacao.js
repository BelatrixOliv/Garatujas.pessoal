const lampadaDadica = document.querySelector(".lampada")
const dica = document.getElementById('textoDica')
console.log(lampadaDadica)

function dicaAparecer(){
    dica.classList.remove('sumir')
}

function brilhar() {
    lampadaDadica.classList.add("brilhar")
}

function pararBrilhar() {
    lampadaDadica.classList.remove("brilhar")
}

lampadaDadica.addEventListener('mouseleave', pararBrilhar)
lampadaDadica.addEventListener('mouseover', brilhar)
lampadaDadica.addEventListener('click', dicaAparecer)