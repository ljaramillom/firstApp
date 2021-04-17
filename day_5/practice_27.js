// Escribe un programa que le pida una frase al usuario e imprima cada palabra en una nueva línea.

let phrase = prompt('Please, enter phrase: ');

phrase = phrase.split(' ');

for(let i=0; i<phrase.length; i++){
  console.log(phrase[i]);
}