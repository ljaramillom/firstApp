// Escribir una función llamada ordenar que reciba un arreglo y retorne un nuevo arreglo ordenado. Sigue estos pasos para implementar esta función:
// Crea un arreglo vacío.
// Recorre el arreglo original (el argumento) y encuentra el menor.
// Inserta el elemento en el otro arreglo y elimínalo del arreglo original.
// Vuelve al paso 2 hasta que el arreglo original esté vacío.

function ordenar(arr) {
  let newArr = [];
  while(arr.length > 0) {
    let min = arr[0];
    let indice = 0;
    for(let i=1;i<arr.length;i++){
      if(arr[i]<min){
        min=arr[i],
        indice=i;
      }
    }
    arr.splice(indice,1);
    newArr.push(min);
  }
  return newArr;
}


// cases tests
console.log(ordenar([6, 2, 9, 7, 8, 3])) // [2, 3, 6, 7, 8, 9]
console.log(ordenar([5, 4, 3, 2, 1])) // [1, 2, 3, 4, 5]
console.log(ordenar([1, 2, 3])) // [1, 2, 3]