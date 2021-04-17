// Escribe un programa que le pida dos frases al usuario e imprima los caracteres que tienen en común. Si no tienen caracteres en común debe imprimir "No se encontraron caracteres en común".

let phrase_1 = prompt('Please, enter phrase: ');
let phrase_2 = prompt('Please, enter other phrase: ');
let arrayLetters = [];

for(let i=0; i<phrase_1.length; i++) {
    if(phrase_1.includes(phrase_2[i])){
      arrayLetters.push(phrase_1[i]);
  }
}

const myUniqueArray = [...new Set(arrayLetters)];

if(myUniqueArray.length > 0){
    console.log('The characters in common: '+ myUniqueArray.join());
} else {
  console.log('No common characters found')
}