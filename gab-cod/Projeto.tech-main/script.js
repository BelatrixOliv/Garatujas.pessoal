const facil = document.querySelector('.facil')
const medio = document.querySelector('.medio')
const dificil = document.querySelector('.dificil')
let cliquesf = 0,cliquesm=0,cliquesd=0;


facil.onclick = function() {
cliquesm = 0;
cliquesd = 0;
cliquesf++;
if(cliquesf == 2){
    window.location.href="http://127.0.0.1:5518/projeto.pagina.2/index.html"
    cliquesf=0;
}
}


medio.onclick = function() {
cliquesf = 0;
cliquesd = 0;
cliquesm++;
if(cliquesm == 2){
    window.location.href="https://opulent-space-cod-pjx7rr4ggv55h6wvv-5517.app.github.dev/gab-cod/Projeto.tech-main/projeto.html"
    cliquesm=0;
}
}


dificil.onclick = function() {
cliquesf = 0;
cliquesm = 0;
cliquesd++;
if(cliquesd == 2){
    window.location.href="https://opulent-space-cod-pjx7rr4ggv55h6wvv-5517.app.github.dev/gab-cod/Projeto.tech-main/projeto.html"
    cliquesd=0;
}
}
