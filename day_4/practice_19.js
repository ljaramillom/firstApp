// Escribe un programa que:

// Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número que el usuario ingrese (incluyéndolo)
// Elimine el segundo elemento.
// Recorra e imprima el arreglo.

let num = prompt('Please, enter a number: ');
let numbers = [];

for(let i=0; i<num; i++) {
  numbers[i] = i + 1;
}
numbers.splice(1,1);

for (let j=0; j<numbers.length; j++) {
  console.log(numbers[j]);
}