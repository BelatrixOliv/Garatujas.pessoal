const localPergunta = document.querySelector('label')
const localTexto = document.getElementById('perg')
const img = document.createElement('img')
const botao = document.querySelector('button')
const dica = document.querySelector('.dica')
const caixa = document.querySelector('.box')

console.log(caixa)

console.log(dica)

const perguntas = [
    "para começar, adicione seu gatinho usando a tag <img>",
    "Agora adicione um nome para seu gatinho como um titulo principal",
    "Vamos estilizar! mude a cor do nome do seu gatinho"

]

let etapaAtual = 0;

localPergunta.innerText = (perguntas[0])
dica.innerText = 'DICA: Coloque no src o caminho da imagem: "/imgs/whatsapp image 2026-07-27 at 15.57.06.jpeg-photoroom.png"'


function gerenciarPerguntas() {
    let respostaDousuario = localTexto.value.trim().toLowerCase();

    if (respostaDousuario === "") {
        alert("Voce esqueceu de digitar!")
        
    }

    if (etapaAtual === 0) {

        const respostaCerta1 = '<img src="/imgs/whatsapp image 2026-07-27 at 15.57.06.jpeg-photoroom.png"></img>'

        if (respostaDousuario === respostaCerta1.trim().toLowerCase()) {
            img.src = "/imgs/WhatsApp Image 2026-07-27 at 15.57.06.jpeg-Photoroom.png";
            document.querySelector('.box').appendChild(img);

            alert("Muito bem!");
            localPergunta.innerText = (perguntas[1]);
            localTexto.value = "";
            dica.innerText = 'Não se esqueça dos h!';
            etapaAtual++;
        }
        else {
            alert("Ops! voce deve ter esquecido algum caractere!")
        }


    } else if (etapaAtual === 1) {

        if (respostaDousuario.includes('<h1>')&&respostaDousuario.includes('</h1>')){
            respostaDousuario=respostaDousuario.replace(/<h1>/g, '')
            respostaDousuario=respostaDousuario.replace(/<\/h1>/g, '')
            const nomeh1 = document.createElement('h1');
            nomeh1.textContent = respostaDousuario;
            nomeh1.style.color = "white"
            caixa.appendChild(nomeh1);
            alert("muito bem!")
            etapaAtual++
        }
    } else if (etapaAtual===2) {

    }
    
    
}

botao.addEventListener("click", gerenciarPerguntas);


