// Crea una variable llamada pedro de tipo objeto literal con las siguientes llaves y valores:

// nombre - "Pedro Perez"
// edad - 30
// activo - true
// hobbies - un arreglo con los siguientes elementos: "programar", "squash", "piano".
// Ahora haz lo siguiente:

// Imprime en consola el valor de la llave edad.
// Agrega una propiedad con llave estatura y valor 1.8.
// Elimina la propiedad con llave activo.
// Recorre todas las propiedades e imprímelas en consola (una línea por propiedad y separando la llave y el valor con dos puntos :).

let person = {
  name  : "Pedro Pérez",
  age    : 30,
  active  : true,
  hobbies : ["coding", "squash", "read"]
};

console.log(person.age);
person["tall"] = 1.8;
delete person.active;

for (let key in person) {
  console.log(key + ": " + person[key])
}