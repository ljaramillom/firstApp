// Escribe un programa para la consola que le pida al usuario un número y sume todos los números desde 1 hasta ese número.

// Por ejemplo, si el usuario ingresa el número 5, el programa debe imprimir 15 (1+2+3+4+5). Si el usuario ingresa el número 10, el programa debe imprimir 55.

let num = prompt('Please, enter a number: ');
num = Number(num);
let sum = 0;

for (let i=1; i<=num; i++){
  sum=sum+i;
}

console.log(sum);