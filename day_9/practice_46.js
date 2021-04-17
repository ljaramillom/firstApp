// Crea una función flecha y asígnala a una variable llamada hola. La función debe recibir un argumento name (con valor por defecto "Pedro") y debe retornar la frase "Hola " seguido del nombre y un signo de exclamación.

const hola = (name = 'Pedro') => `Hello! ${name}`;

//cases tests
console.log(hola()) // "Hola Pedro!"
console.log(hola("Maria")) // "Hola Maria!"