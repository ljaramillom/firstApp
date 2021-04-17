// El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

const weight = prompt("What's your weight?");
const tall = prompt("How tall are you?");
let bmi = parseFloat(weight)/parseFloat(tall)**2;

console.log('Your BMI is: ' + bmi);

if(bmi < 18.5) {
  console.log('Bajo');
} else if (bmi > 18.5 && bmi < 24.9) {
  console.log('Normal');
} else if (bmi > 25 && bmi < 29.9) {
  console.log('Sobrepeso');
} else if (bmi >= 30) {
  console.log('Obeso');
} else {
  console.log('N/A');
}