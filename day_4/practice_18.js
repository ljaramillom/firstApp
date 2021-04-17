// Crea un programa a partir de las siguientes instrucciones:

// Crea una variable llamada nombres con un arreglo que tenga los siguientes elementos: "Pedro", "Pablo", "María", "Juan", "Diana".
// Pídele al usuario que ingrese un nombre e insértalo al final del arreglo que creaste en el paso 1.
// Pídele al usuario que ingrese otro nombre y reemplaza la tercera posición del arreglo con este valor.
// Recorre el arreglo e imprímelo.


let names = ["Pedro", "Pablo", "María", "Juan", "Diana"];

let firstname = prompt('Please, enter name: ');
names.push(firstname);

let lastname = prompt('Please, enter other name: ');
names.splice(2,1,lastname);

for(let i=0; i<names.length; i++) {
  console.log(names[i]);
}
