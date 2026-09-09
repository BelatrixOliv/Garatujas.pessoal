const localPergunta = document.querySelector('label')
const divDasperguntas = document.querySelector('.perguntas')
const localTexto = document.getElementById('perg')
const img = document.createElement('img')
const botao = document.querySelector('button')
const caixa = document.querySelector('.box')
const nomeh1 = document.createElement('h1')
const paragrafoDadica = document.getElementById('textoDica')
const divInivisivel = document.getElementById('div')




const perguntas = [
    "Para começar, adicione seu gatinho usando a tag <img>",//0
    "Agora adicione um nome para seu gatinho como um titulo principal",//1
    //mesma pergunta:
    "Vamos estilizar com CSS! Primeiro, comece selecionando o seu h1",//2
    "Agora dentro do CSS do h1, use a propriedade: 'color'",//3
    //mesma pergunta:
    "Vamos estilizar de novo com CSS, selecione a caixa que seu gatinho está. use a classe: '.box'",//4
    "Agora vamos mudar a cor do background, use a propriedade: 'background-color'", //5
    //mesma pergunta:
    "Além dessa caixa onde seu gatinho está, ele também está dentro de outra caixa, que é uma div (digite 'ok' e pressione o botão pronto para continuar) ", //6
    "Essa div possui a classe '.minhaDiv', vamos começar então selecionando ela com CSS no nosso código", //7
    "Adicione uma borda azul ou amarela do tipo: 'solida' na sua div. lembre-se que no CSS há uma propriedade para adicionar bordas e ela possui uma estrutura que deve ser seguida",//8
    "Parabéns! você conclui esse nível. agora, se desejar, poderá ir para o próximo e avançar seus conhecimentos :) "
]

let etapaAtual = 0;
let corDousuario;
let respostaFixa;
const cor1 = 'yellow'
const cor2 = 'blue'


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
            divInivisivel.appendChild(img);
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
            divInivisivel.appendChild(nomeh1);
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
                localTexto.value = ""
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

        if (respostaDousuario.includes('background-color:') && respostaDousuario.includes(';')) {
            if (respostaDousuario.includes('.box{') && respostaDousuario.includes('}')) {

                respostaDousuario = respostaDousuario.replace(/background-color:/g, '')
                respostaDousuario = respostaDousuario.replace(/;/g, '')
                respostaDousuario = respostaDousuario.replace(/\.box{/g, '')
                respostaDousuario = respostaDousuario.replace(/}/g, '')

                alert("Você está indo muito bem!")
                corDousuario = respostaDousuario
                caixa.style.backgroundColor = corDousuario
                localTexto.value = ""
                localPergunta.innerText = (perguntas[6])
                etapaAtual++;

            } else {
                alert("Não apague nada da sua resposta anterior! ela é crucial para essa parte funcionar.")
            }
        } else {
            alert("Cheque se não esqueceu algum caractere!")
        }


    } else if (etapaAtual === 6) {
        let respostaCerta2 = 'ok'

        if (respostaDousuario.toLowerCase() == respostaCerta2) {
            localPergunta.innerText = (perguntas[7])
            localTexto.value = ''
            etapaAtual++;
        }

    } else if (etapaAtual === 7) {

        if (respostaDousuario.includes('.minhaDiv{') && respostaDousuario.includes('}')) {
            alert("Ótimo! vamos para o próximo passo agora")
            respostaFixa = respostaDousuario;
            localTexto.value = respostaFixa
            localPergunta.innerText = (perguntas[8])
            paragrafoDadica.innerText = "Lembre-se: border: tipo da borda, tamanho em px, cor;"
            etapaAtual++

        } else {
            alert("Cheque se não esqueceu algum caractere, ou se a classe está escrita corretamente")
        }

    } else if (etapaAtual === 8) {

        //paragrafoDadica.innerText = "Lembre-se: border: tipo da borda, tamanho em px, cor"
        if (respostaDousuario.includes('.minhaDiv{') && respostaDousuario.includes('}')) {
            if (respostaDousuario.includes('border:')) {
                if (respostaDousuario.includes('solid')) {
                    if (/\d+/.test(respostaDousuario) && respostaDousuario.includes('px')) {
                        if (respostaDousuario.includes(cor1) || respostaDousuario.includes(cor2)) {
                            alert("Muito bem! isso que apareceu em volta do seu gatinho é a borda da div onde seu gatinho está! no html, divs são caixas que servem para agrupar outros elementos do html, que nesse caso, é o seu gatinho e o nome dele.")

                            respostaDousuario = respostaDousuario.replace(/\.minhaDiv{/g, '')
                            respostaDousuario = respostaDousuario.replace(/}/g, '')
                            respostaDousuario = respostaDousuario.replace(/border:/g, '')
                            respostaDousuario = respostaDousuario.replace(/solid/g, '')

                            if (respostaDousuario.includes(cor1)) {
                                divInivisivel.style.borderColor = cor1
                                respostaDousuario = respostaDousuario.replace(/yellow/g, '')
                            } else {
                                divInivisivel.style.borderColor = cor2
                                respostaDousuario = respostaDousuario.replace(/blue/g, '')
                            }

                            divInivisivel.style.borderWidth = respostaDousuario
                            divInivisivel.classList.add('minhaDiv')
                            localPergunta.innerText = (perguntas[9])
                            botao.innerText = 'próximo nível'


                        } else {
                            alert("você esqueceu de colocar uma das cores!")
                        }

                    } else {
                        alert("Você não adicionou o tamanho em pixels!")

                    }
                } else {
                    alert("Você esqueceu do tipo da borda: 'solid'")
                }
            } else {
                alert("Você esqueceu de colocar o: 'border:', ou dos dois pontos")
            }
        }

    }
}

botao.addEventListener("click", gerenciarPerguntas);
