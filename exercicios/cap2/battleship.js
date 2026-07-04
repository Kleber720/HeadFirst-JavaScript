
let randomLoc=Math.floor(Math.random()*5);

let localizacao1 = randomLoc;
let localizacao2 = localizacao1+1;
let localizacao3= localizacao2+1;


let acertos=0;
let palpite=0;
let tentativa= null;
let isSunk=false;

while(isSunk==false){
    palpite = prompt("Preparar, apontar, fogo!(digite um número de 0 a 6):");
    if(palpite < 0 || palpite > 6){
        alert("Por favor, insira um número válido!");
    }else{
        tentativa += 1;

        if(palpite == localizacao1 || palpite == localizacao2 || palpite == localizacao3){
            alert("ACERTOU!");
            acertos+=1;

            if(acertos==3){
            isSunk = true;
            alert("Você afundou meu navio de guerra!");
            }
        }else{
            alert("MISS");
        }
        
    }
}
let stats="Você pegou "+tentativa+ " palpites para afundar o navio de guerra, o que significa que sua precisão de tiro foi " +(3/tentativa);

alert(stats);