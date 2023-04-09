let chave;
let qntCartas;
let nJogadas =0;
while(chave != 0){
    qntCartas = prompt('Quantas cartas tu queres? Escolha um número par entre 4 a 14!');
    qntCartas = Number(qntCartas);
    if ( isNaN(qntCartas)){
        alert('digite um numero!');
    } else if(qntCartas >= 4 && qntCartas<=14 ){
        if(qntCartas%2 == 1){
            alert('digite um número par!');
        } else{
            chave = 0;
        }
    }
}

let qntPares = qntCartas/2;

const listaImgs = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"]; 
let listaBase=[];
    let cont = 0;
    while(cont<7){
    listaBase[cont] = ` <div onclick="clicaVira(this)" class="card funcional" data-test="card">
                            <div class="nomeCarta">${listaImgs[cont]}</div>
                            <div class="front-face face">
                                <img data-test="face-down-image" src="./midia/Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png"/>
                            </div>
                            <div class="back-face face">
                                <img data-test="face-up-image" src="./midia/Arquivos Úteis - Projeto 04 - Parrot Card Game/${listaImgs[cont]}"/>
                            </div>
                        </div>
                        `;
    cont++;

    }
let listaDisplay = [];
cont = 0;
while(cont < qntPares){
    listaDisplay.push(listaBase[cont]);
    listaDisplay.push(listaBase[cont]);
    cont++;
}

listaDisplay.sort(misturar); // Após esta linha, a minhaArray estará embaralhada

// Esta função pode ficar separada do código acima, onde você preferir
function misturar() { 
	return Math.random() - 0.5; 
}


let containter = document.querySelector('.container');

cont= 0;
while(cont < listaDisplay.length) {
    containter.innerHTML += listaDisplay[cont];
    cont++;
}

let variavelBloqueio = document.querySelectorAll('.card');
let comparador = [];
let guardaTag = [];
let atualizaVirada = document.querySelectorAll('.virada');

function verificaIgualdade () {
    if(comparador[0] === comparador[1]){
        let variavelDevolve = document.querySelectorAll('.funcional');
        for(let i=0; i<variavelDevolve.length; i++){
            variavelDevolve[i].setAttribute('onclick',"clicaVira(this)");
        }
        comparador = [];
        guardaTag = [];

        if(atualizaVirada.length == listaDisplay.length){
            alert(`Você ganhou em ${nJogadas} jogadas!`);
        } 

    }else if(comparador[0]!== comparador[1]){
        guardaTag[0].classList.remove('virada');
        guardaTag[0].querySelector('.front-face').classList.remove('frontClick');
        guardaTag[0].querySelector('.back-face').classList.remove('backClick');
        guardaTag[1].classList.remove('virada');
        guardaTag[1].querySelector('.front-face').classList.remove('frontClick');
        guardaTag[1].querySelector('.back-face').classList.remove('backClick');

        guardaTag[0].classList.add('funcional');
        guardaTag[1].classList.add('funcional');

        let variavelDevolve = document.querySelectorAll('.funcional');
        for(let i=0; i<variavelDevolve.length; i++){
            variavelDevolve[i].setAttribute('onclick',"clicaVira(this)");
        }



        guardaTag = [];
        comparador= [];

        
    }

}

function clicaVira(CartaInteira){
    nJogadas++;
    let frente = CartaInteira.querySelector('.front-face')
    frente.classList.add('frontClick');
    let traseira = CartaInteira.querySelector('.back-face')
    traseira.classList.add('backClick');
    CartaInteira.classList.add('virada');
    atualizaVirada = document.querySelectorAll('.virada');
    console.log(atualizaVirada);

    let nomeCarta = CartaInteira.querySelector('.nomeCarta').innerHTML;

    CartaInteira.classList.remove('funcional');
    CartaInteira.removeAttribute('onclick');
    comparador.push(nomeCarta);
    guardaTag.push(CartaInteira);


    if(comparador.length > 1){

    for(let i = 0; i < listaDisplay.length; i++){
        variavelBloqueio[i].removeAttribute('onclick');
    }    

    setTimeout(verificaIgualdade, 1000);
    }
}

