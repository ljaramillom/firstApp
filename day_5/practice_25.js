// Escribe un programa que le pida una frase al usuario y le muestre una nueva frase con los siguientes cambios:

// Las mayúsculas se reemplazan por minúsculas.
// Se eliminan los espacios en blanco.
// Reemplaza el caracter "a" por "4".
// Reemplaza el caracter "e" por "3".
// Reemplaza el caracter "i" por "1".
// Reemplaza el caracter "o" por "0".

let phrase = prompt('Please, enter phrase: ');
phrase = phrase.toLowerCase();
phrase = phrase.replace(/ /g,'');
phrase = phrase.replace(/a/g,'4');
phrase = phrase.replace(/e/g, '3');
phrase = phrase.replace(/i/g, '1');
phrase = phrase.replace(/o/g, '0');

console.log(phrase);