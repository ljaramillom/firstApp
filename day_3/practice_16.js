// Escribe un programa para la consola que le pida al usuario dos números e imprima en la consola los números en ese rango. 

let init = prompt('Please, enter a number init: ');
init = Number(init);
let finish = prompt('Please, enter a number finish: ');
finish = Number(finish);


for (let i=init; i<=finish; i++){
  console.log(i);
}
