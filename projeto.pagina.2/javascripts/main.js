const localPergunta = document.querySelector('label')
const localTexto = document.getElementById('perg')
const img = document.createElement('img')
const botao = document.querySelector('button')
const dica = document.querySelector('.dica')

console.log(dica)

const perguntas = [
    "para começar, adicione seu gatinho usando a tag <img>",
    "Agora adicione um nome para seu gatinho como um titulo principal"
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
            etapaAtual = 1;
        }
        else {
            alert("Ops! voce deve ter esquecido algum caractere!")
        }


    } else if (etapaAtual === 1) {

        if (respostaDousuario.includes('<h1>')&&respostaDousuario.includes('</h1>')){
            alert("muito bem!")
        }
    }
    
    
}

botao.addEventListener("click", gerenciarPerguntas);






















































// Selecionando os elementos do HTML
/*const box = document.querySelector('.box');
const labelPergunta = document.querySelector('label[for="perg"]');
const textarea = document.getElementById('perg');
const btnPronto = document.getElementById('pronto');

// Caminho do gatinho branco
const imgGatinho = '../imgs/WhatsApp Image 2026-07-27 at 15.57.06.jpeg-Photoroom.png';

// Sistema de Fases refatorado (Nível Fácil)
const fases = [
    {
        pergunta: `1. Coloque seu gatinho na caixa usando a tag &lt;img&gt; e o caminho:<br><b>${imgGatinho}</b>`,
        verificar: (codigo) => {
            const cod = codigo.toLowerCase();
            return cod.includes('<img') && cod.includes('src=');
        },
        mensagemErro: "Ops! Lembre-se de usar a tag <img> com o atributo src contendo o caminho da imagem."
    },
    {
        pergunta: "2. Agora adicione um nome para seu gatinho usando a tag &lt;h1&gt;.",
        verificar: (codigo) => {
            const cod = codigo.toLowerCase();
            return cod.includes('<h1>') && cod.includes('</h1>');
        },
        mensagemErro: "Não se esqueça de abrir &lt;h1&gt; e fechar &lt;/h1&gt; ao redor do nome!"
    },
    {
        pergunta: "3. Vamos estilizar! Mude a cor do nome do seu gatinho.",
        verificar: (codigo) => {
            const cod = codigo.toLowerCase();
            return cod.includes('color:') || cod.includes('color :');
        },
        mensagemErro: "Adicione a propriedade 'color' no CSS para mudar a cor do texto do h1!"
    },
    {
        pergunta: "4. Vamos também mudar a cor de fundo do seu espaço (a caixa do gatinho).",
        verificar: (codigo) => {
            const cod = codigo.toLowerCase();
            return cod.includes('background');
        },
        mensagemErro: "Use 'background-color' ou 'background' no CSS para mudar o fundo!"
    },
    {
        pergunta: "5. Para finalizar com chave de ouro, adicione uma borda arredondada no seu gatinho com 'border-radius'!",
        verificar: (codigo) => {
            const cod = codigo.toLowerCase();
            return cod.includes('border-radius');
        },
        mensagemErro: "Use 'border-radius' no estilo da sua tag img para arredondar as bordas!"
    }
];

let faseAtual = 0;

// Função para atualizar a pergunta atual no label
function carregarFase() {
    if (faseAtual < fases.length) {
        labelPergunta.innerHTML = fases[faseAtual].pergunta;
    } else {
        // Fim do Nível Fácil
        labelPergunta.innerHTML = "🎉 PARABÉNS! Você completou todas as tarefas do Nível Fácil!";
        textarea.classList.add('escondido');
        btnPronto.classList.add('escondido');
    }
}

// Ao clicar no botão "PRONTO"
btnPronto.addEventListener('click', () => {
    const codigoUsuario = textarea.value;

    // Atualiza a caixa com o código APENAS quando clica no botão
    box.innerHTML = codigoUsuario;

    // Checa se o código atende ao requisito da fase atual
    if (fases[faseAtual].verificar(codigoUsuario)) {
        alert("Excelente! Código correto ✨");
        faseAtual++;
        carregarFase();
    } else {
        alert(fases[faseAtual].mensagemErro);
    }
});

 Inicializa a primeira fase
*/carregarFase();