/*let numero = 0

while(numero <= 20) {
    
    //formula para saber si es numero par
    if (numero%2 ===0){
        console.log(numero)
    }
    numero++



}

console.log('fin numero:' + numero)
*/

/*for (let i=1; i <= 10; i++){
    resultado = (`6 x ${i} = ${6*i}`)
    console.log( resultado);
    }
*/

let gameCount = parseInt(prompt("Indica el numero de juegos"));

 while (gameCount > 0){

    let juegoUsuario = parseInt (prompt (`
Elija una opción:
1: piedra 
2: papel
3: tijera
`)
);
let min=1; 
let max=4;  
let random =Math.floor(Math.random() * (+max - +min)) + +min; 
console.log(random);

console.log(winner(random, juegoUsuario));
gameCount = gameCount -1;

 }

 function winner (random, juegoUsuario){
     if (random === 1 && juegoUsuario ===3){
         return "Perdiste";
     }else if (random === 2 && juegoUsuario === 1){
         return "Perdiste";
     }else if (random === 3 && juegoUsuario === 1){
         return "Perdiste";
     }else if (random === juegoUsuario){
         return "Empate";
     }
     return "Ganaste";
 }

    



