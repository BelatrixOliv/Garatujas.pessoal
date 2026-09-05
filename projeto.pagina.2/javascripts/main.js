const localPergunta = document.querySelector('label')
const localTexto = document.getElementById('perg')
const img = document.createElement('img')
const botao = document.querySelector('button')
const caixa = document.querySelector('.box')
const nomeh1 = document.createElement('h1')
const paragrafoDadica = document.getElementById('textoDica')



const perguntas = [
    "Para começar, adicione seu gatinho usando a tag <img>",//0
    "Agora adicione um nome para seu gatinho como um titulo principal",//1
    //mesme pergunta:
    "Vamos estilizar com CSS! Primeiro, comece selecionando o seu h1",//2
    "Agora dentro do CSS do h1, use a propriedade: 'color'",//3
    //------------------------------------------------------------------------
    //mesma pergunta:
    "Vamos estilizar de novo com CSS, selecione a caixa que seu gatinho está. use a classe: '.box'",//4
    "Agora vamos mudar a cor do background, use a propriedade: 'color' novamente" //5
]

let etapaAtual = 0;
let corDousuario;
let respostaFixa;


window.onload = function () {
    localTexto.value = ""
}


localPergunta.innerText = (perguntas[0])
paragrafoDadica.innerText = 'DICA: Coloque no src o caminho da imagem: "./imgs/gatinho"'


function gerenciarPerguntas() {
    let respostaDousuario = localTexto.value.replace(/\s+/g, '');

    if (respostaDousuario === "") {
        alert("Voce esqueceu de digitar!")
        return;
    }

    if (etapaAtual === 0) {

        const respostaCerta1 = '<img src="./imgs/gatinho"></img>'

        if (respostaDousuario === respostaCerta1.replace(/\s+/g, '')) {

            img.src = "/imgs/WhatsApp Image 2026-07-27 at 15.57.06.jpeg-Photoroom.png";
            document.querySelector('.box').appendChild(img);
            alert("Muito bem!");
            localPergunta.innerText = (perguntas[1]);
            localTexto.value = "";
            etapaAtual++;
            paragrafoDadica.innerText = 'Não se esqueça dos h1 ou de fechar a tag ;)';

        }
        else {
            alert("Ops! voce deve ter esquecido algum caractere!")
        }

    } else if (etapaAtual === 1) {

        if (respostaDousuario.includes('<h1>') && respostaDousuario.includes('</h1>')) {

            respostaDousuario = respostaDousuario.replace(/<h1>/g, '')
            respostaDousuario = respostaDousuario.replace(/<\/h1>/g, '')
            nomeh1.textContent = respostaDousuario;
            nomeh1.style.color = "white"
            caixa.appendChild(nomeh1);
            alert("muito bem!")
            localTexto.value = "";
            localPergunta.innerText = (perguntas[2])
            paragrafoDadica.innerText = 'Lembre-se: No CSS usamos o nome do elemento html ou a classe para seleciona-lo'
            etapaAtual++

        } else {
            alert("Cheque se não esqueceu algum caractere! você pode dar uma olhadinha na dica :D")
        }

    } else if (etapaAtual === 2) {

        if (respostaDousuario.includes('h1{') && respostaDousuario.includes('}')) {
            alert("Ótimo! agora vamos para o próximo passo")
            respostaFixa = respostaDousuario
            localTexto.value = respostaFixa
            localPergunta.innerText = (perguntas[3])
            paragrafoDadica.innerText = 'Lembre-se: no color, temos que colocar ":" depois do nome da propriedade e ";" para fechar ela'
            etapaAtual++;

        } else {
            alert("Você deve ter esquecido algum caractere")

        }

    } else if (etapaAtual === 3) {

        if (respostaDousuario.includes('color:') && respostaDousuario.includes(';')) {
            if (respostaDousuario.includes('h1{') && respostaDousuario.includes('}')) {

                respostaDousuario = respostaDousuario.replace(/color:/g, '', /;/g, '')
                respostaDousuario = respostaDousuario.replace(/;/g, '')
                respostaDousuario = respostaDousuario.replace(/h1{/g, '')
                respostaDousuario = respostaDousuario.replace(/}/g, '')

                alert("Muito bem! agora o nome do seu gatinho possui uma cor muito massa")
                corDousuario = respostaDousuario
                nomeh1.style.color = corDousuario
                localPergunta.innerText = (perguntas[4])
                paragrafoDadica.innerText = "Aqui é a mesma lógica de mudar a cor do nome, a diferença é que ao invés de h1, usamos o .box"
                etapaAtual++;

            } else {
                alert("Não apague nada da sua resposta anterior! ela é crucial para essa parte funcionar.")
            }
        } else {
            alert("Cheque se não esqueceu algum caractere!")
        }

    } else if (etapaAtual === 4) {

        if (respostaDousuario.includes('.box{') && respostaDousuario.includes('}')) {
            alert("Isso mesmo! agora vamos para o próximo passo")
            respostaFixa = respostaDousuario
            localTexto.value = respostaFixa
            localPergunta.innerText = (perguntas[5])
            paragrafoDadica.innerText = 'Lembre-se: color: sua cor aqui;'
            etapaAtual++;
        }
    } else if (etapaAtual === 5) {

        if (respostaDousuario.includes('background-color:')&&respostaDousuario.includes(';')) {
            if (respostaDousuario.includes('.box{')&&respostaDousuario.includes('}')) {

                respostaDousuario = respostaDousuario.replace(/background-color:/g, '')
                respostaDousuario = respostaDousuario.replace(/;/g, '')
                respostaDousuario = respostaDousuario.replace(/\.box{/g, '')
                respostaDousuario = respostaDousuario.replace(/}/g, '')

                alert("Você está indo muito bem!")
                corDousuario = respostaDousuario
                caixa.style.backgroundColor = corDousuario

            } else {
                alert("Não apague nada da sua resposta anterior! ela é crucial para essa parte funcionar.")
            }
        } else {
            alert("Cheque se não esqueceu algum caractere!")
        }

    }
}

botao.addEventListener("click", gerenciarPerguntas);


/*   if (respostaDousuario.includes('color:') && respostaDousuario.includes(';')) {

            console.log(corDousuario)
            respostaDousuario = respostaDousuario.replace(/color:/g, '')
            respostaDousuario = respostaDousuario.replace(/;/g, '')
            corDousuario = respostaDousuario
            nomeh1.style.color = corDousuario

            alert("Você está indo muito bem!")
            localTexto.value = ""

            etapaAtual++;

        } else {
            alert("você deve ter esquecido de adicionar as chaves ou selecionar seu h1!")
        }
    } */