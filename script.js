/*
let lista =document.querySelector('.c-banco');
let carta = ` <div class="card">
                <div class="front-face face">
                    <img src="./midia/Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png"/>
                </div>
                <div class="back-face face">
                    <img src="./midia/Arquivos Úteis - Projeto 04 - Parrot Card Game/bobrossparrot.gif"/>

                </div>
            </div>
            `
lista.innerHTML = carta;
*/

let chave;
let qntCartas;
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

const listaImgs = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "tripletsparrot.gif"]; 
let listaBase=[];
    let cont = 0;
    while(cont<7){
    listaBase[cont] = ` <div onclick="clicaVira(this)" class="card">
                            <div class="front-face face">
                                <img src="./midia/Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png"/>
                            </div>
                            <div class="back-face face">
                                <img src="./midia/Arquivos Úteis - Projeto 04 - Parrot Card Game/${listaImgs[cont]}"/>

                            </div>
                        </div>
                        `;
    cont++;

    }
console.log(listaBase);
console.log(listaImgs);
let listaDisplay = [];
cont = 0;
while(cont < qntPares){
    listaDisplay.push(listaBase[cont]);
    listaDisplay.push(listaBase[cont]);
    cont++;
}
console.log(listaDisplay);
let containter = document.querySelector('.container');

cont= 0;
while(cont < listaDisplay.length) {
    containter.innerHTML += listaDisplay[cont];
    cont++;
}
console.log();

function clicaVira(CartaInteira){
    const frente = CartaInteira.querySelector('.front-face')
    frente.classList.add('frontClick');
    const traseira = CartaInteira.querySelector('.back-face')
    traseira.classList.add('backClick');

}