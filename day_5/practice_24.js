const phrase = prompt('Please, enter phrase: ');
let count = 0;

for(let i=0;i<phrase.length;i++){
  if(phrase[i] === 'a') {
    count++;
  }
}

console.log('Phrase with '+ count +' letters "a"');