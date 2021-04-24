// Escribe una función llamada sumarImpares que reciba un arreglo y sume todos los números impares que se encuentren en el arreglo

function sumarImpares(arr) {
  let sum = 0;
  arr.filter(elem => elem%2!==0 ? sum=sum+elem : sum);
  return sum;
}


// cases tests
console.log(sumarImpares([1, 2, 3, 4, 5])) // 9
console.log(sumarImpares([2, 4])) // 0