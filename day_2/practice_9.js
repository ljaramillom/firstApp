// Escribe un programa que le pida un número al usuario e imprima en la consola si el número si es mayor, menor o igual que 10.

// Si el número es menor a 10 debe imprimir "El número es menor que 10".

// Si el número es mayor a 10 debe imprimir "El número es mayor que 10".

// Si el número es igual a 10 debe imprimir "El número es igual a 10".

let numUser = parseInt(prompt('Please, enter a number: '));

if(numUser < 10) {
 console.log('< 10')
} else if ( numUser === 10) {
 console.log('= 10')
} else {
 console.log('> 10')  
}