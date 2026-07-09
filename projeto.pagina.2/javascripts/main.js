const textoDousuario = document.getElementById("perg")
const botaoPronto = document.getElementById("pronto")
const caixaDogato = document.querySelector(".box")

console.log(textoDousuario)
console.log(botaoPronto)
console.log(caixaDogato)

botaoPronto.addEventListener('click', function(){
    let codigoDigitado = textoDousuario.value
    console.log(codigoDigitado)
})


