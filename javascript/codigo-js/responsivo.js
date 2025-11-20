/*Esse codigo ira fazer os links de navegação irem pro header, quando for tamanho de tela menor que 768px*/
const header = document.querySelector(".header")
const containerMain = document.querySelector(".containerMain")
const links = document.querySelector(".links")

const mediaQuery = window.matchMedia("(max-width: 767px") /*verefica se o navegador atende a essa mediaQuery, se for menor que esse valor, ira ser TRUE, se for maior vai ser FALSE */ 

function moverLinks(px) { 

    if (px.matches) { /* o .matches, ira vereficar se o px, e true ou false*/
        header.appendChild(links) /* se for true ira add a variavel links no header*/
    } else {
        containerMain.insertBefore(links, containerMain.firstElementChild) /* se for  false, ira adicionar o links no containerMain*/
    }
}
moverLinks(mediaQuery) /*pega o valor da mediaquery e envia pra função*/

mediaQuery.addEventListener("change", moverLinks) /* ele ira vereficar se mudou algum evento, que verefica isso e o "change", se mudou ele aciona a função*/