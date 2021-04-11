let phrase = prompt('Please, enter phrase: ');

phrase = phrase.split(' ');

for(let i=0; i<phrase.length; i++){
  phrase[i] = phrase[i].charAt(0).toUpperCase() + phrase[i].slice(1);
}

console.log(phrase.join(' '));