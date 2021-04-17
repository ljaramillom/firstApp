// Escribe un programa que devuelva un número de forma aleatoria y le pida al usuario que lo trate de adivinar (como en uno de los ejercicios anteriores). La diferencia es que esta vez el usuario puede intentar indefinidamente hasta que encuentre el número.

let numRandom = Math.floor(Math.random() * 10) + 1;
console.log(numRandom)
let numUser = parseInt(prompt('Please, enter a number: '));

while(numUser !== numRandom) {
  numUser = parseInt(prompt('Please, enter a number: '));
}
console.log('Yeah! Good job');