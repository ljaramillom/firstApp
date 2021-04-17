// Escribe un programa que le pida al usuario ingresar un número.

// Si el número es múltiplo de 3 debe imprimir en la consola "bing".
// Si el número es múltiplo de 5 debe imprimir en la consola "bong".
// Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola "bingbong".
// Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.

let numUser = parseInt(prompt('Please, enter a number: '));
let text = '';

if ((numUser % 3) === 0) {
  text += 'bing'
}
if ((numUser % 5) === 0) {
  text += 'bong'
}

console.log(text === '' ? numUser : text)
