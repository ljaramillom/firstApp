let numRandom = Math.floor(Math.random() * 10) + 1;
console.log(numRandom)
let numUser = parseInt(prompt('Please, enter a number: '));

while(numUser !== numRandom) {
  numUser = parseInt(prompt('Please, enter a number: '));
}
console.log('Yeah! Good job');