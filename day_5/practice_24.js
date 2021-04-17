// Escribe un programa que le pida una frase al usuario y le muestre el número de caracteres "a" que hay en la frase

const phrase = prompt('Please, enter phrase: ');
let count = 0;

for(let i=0;i<phrase.length;i++){
  if(phrase[i] === 'a') {
    count++;
  }
}

console.log('Phrase with '+ count +' letters "a"');