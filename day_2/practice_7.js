// Escribe un programa que piense un número de forma aleatoria del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el número es correcto debe imprimir en la consola "Felicitaciones, ese era!", de lo contrario debe imprimir "Lo siento, intenta nuevamente!"

let numRandom = Math.floor(Math.random() * 10) + 1;
let numUser = parseInt(prompt('Please, enter a number: '));

if(numRandom === numUser) {
  console.log("Very good! That's the correct number");
} else {
  console.log("Try again");
}