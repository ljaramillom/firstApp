// Utiliza destructuración para almacenar los primeros dos elementos del siguiente arreglo en las variables first y second

// Utiliza ahora destructuración para obtener el valor de las llaves name y age del objeto

[first, second] = [1, 2, 3, 4];

// cases tests
console.log(first); // 1
console.log(second); // 2

const person = {
  name: "Pedro",
  age: 20
}

// escribe tu respuesta acá
let {name, age} = person;

// cases tests
console.log(name); // "Pedro"
console.log(age); // 20