// Crea una función flecha y asígnala a una variable obtenerImpares. La función debe recibir un arreglo de números y retornar todos los impares.

// Nota: Utiliza el método filter y pásale una función flecha como argumento.

const obtenerImpares = arr => arr.filter(elem => elem % 2 !== 0);

// cases tests
console.log(obtenerImpares([1, 2, 3, 4, 5])) // [1, 3, 5]
console.log(obtenerImpares([64, 35, 27])) // [35, 27]
console.log(obtenerImpares([])) // []