let numRandom = Math.floor(Math.random() * 10) + 1;
let numUser = parseInt(prompt('Please, enter a number: '));

if(numRandom === numUser) {
  console.log("Very good! That's the correct number");
} else {
  console.log("Try again");
}