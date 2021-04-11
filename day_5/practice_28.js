let phrase_1 = prompt('Please, enter phrase: ');
let phrase_2 = prompt('Please, enter other phrase: ');
let arrayLetters = [];

for(let i=0; i<phrase_1.length; i++) {
  for(let j=0; j<phrase_2.length; j++) {
    if(phrase_1[i] === phrase_2[j]){
      arrayLetters.push(phrase_1[i]);
    }
  }
}

const myUniqueArray = [...new Set(arrayLetters)];

if(myUniqueArray.length > 0){
    console.log('The characters in common: '+ myUniqueArray.join());
} else {
  console.log('No common characters found')
}