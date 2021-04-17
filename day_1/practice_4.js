// Escribe un programa que le pida al usuario su año de nacimiento e imprima su edad actual en la consola con la frase "Tienes X años"

var age = prompt("What's your year of birth?");
var yearCurrent = new Date().getFullYear();
var ageCurrent = parseInt(yearCurrent) - parseInt(age);

console.log('Your current age is: ' + ageCurrent);