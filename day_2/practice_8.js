let numUser = parseInt(prompt('Please, enter a number: '));
let numMultFive = numUser % 5;

if(numMultFive === 0) {
  console.log("Yes, the number " + numUser + " is a multiple of 5");
} else {
  console.log("No, the number " + numUser + " is not a multiple of 5");
}