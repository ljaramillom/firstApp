
const hola = (name = 'Pedro') => `Hello! ${name}`;

//cases tests
console.log(hola()) // "Hola Pedro!"
console.log(hola("Maria")) // "Hola Maria!"