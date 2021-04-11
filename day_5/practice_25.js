let phrase = prompt('Please, enter phrase: ');
phrase = phrase.toLowerCase();
phrase = phrase.replace(/ /g,'');
phrase = phrase.replace(/a/g,'4');
phrase = phrase.replace(/e/g, '3');
phrase = phrase.replace(/i/g, '1');
phrase = phrase.replace(/o/g, '0');

console.log(phrase);