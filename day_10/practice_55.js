// Escribe una función llamada removerCeros que reciba un arreglo de números y retorne un nuevo arreglo sin los ceros

const removerCeros = arr => arr.filter(elem => elem !== 0);

// cases tests
removerCeros([1, 0, 2, 0, 3, 0]) // [1, 2, 3]
// removerCeros([1, 2, 3]) // [1, 2, 3]
// removerCeros([0, 0, 0]) // []