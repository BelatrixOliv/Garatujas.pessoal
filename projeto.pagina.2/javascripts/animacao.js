const lampadaDadica = document.querySelector(".lampada")
const dica = document.getElementById('textoDica')
const botaopronto = document.getElementById('pronto')

let contador = 0;

// fazer dica sumir e aparecer:
function dicaAparecerEsumir(){

    if (contador%2==0) {
        dica.classList.remove('sumir')
        contador++;
    } else {
        dica.classList.add('sumir')
        contador++;
    }
    
}

function dicasumirCombotao () {
      dica.classList.add('sumir')
}

//fazer lampada brilhar
function brilhar() {
    lampadaDadica.classList.add("brilhar")
}

function pararBrilhar() {
    lampadaDadica.classList.remove("brilhar")
}

lampadaDadica.addEventListener('mouseleave', pararBrilhar)
lampadaDadica.addEventListener('mouseover', brilhar)
lampadaDadica.addEventListener('click', dicaAparecerEsumir)
botaopronto.addEventListener('click', dicasumirCombotao)


