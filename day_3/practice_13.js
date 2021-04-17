// Escribe un programa que le pida al usuario una frase y un número. El programa debe imprimir la frase en la consola el número de veces que ingresó el usuario.

const data = prompt('Please, enter a phrase: ');
let size = prompt('Please, enter a number: ');
size = Number(size);

for (let i=0; i<size; i++){
  console.log(data);
}