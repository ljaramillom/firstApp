var weight = prompt("What's your weight?");
var tall = prompt("How tall are you?");
var bmi = parseFloat(weight)/parseFloat(tall)**2;

console.log('Your BMI is: ' + bmi);