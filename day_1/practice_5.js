// El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

var weight = prompt("What's your weight?");
var tall = prompt("How tall are you?");
var bmi = parseFloat(weight)/parseFloat(tall)**2;

console.log('Your BMI is: ' + bmi);