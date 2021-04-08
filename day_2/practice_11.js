let numUser = parseInt(prompt('Please, enter a number: '));
let text = '';

if ((numUser % 3) === 0) {
  text += 'bing'
}
if ((numUser % 5) === 0) {
  text += 'bong'
}

console.log(text === '' ? numUser : text)
