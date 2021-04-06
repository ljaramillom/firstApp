var age = prompt("What's your year of birth?");
var yearCurrent = new Date().getFullYear();
var ageCurrent = parseInt(yearCurrent) - parseInt(age);

console.log('Your current age is: ' + ageCurrent);