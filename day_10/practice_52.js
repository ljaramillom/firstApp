// Escribe una función llamada reducirACero que reciba un número no negativo y retorne el número de pasos que son necesarios para llegar a cero (0) siguiendo estas reglas:

// Si el número actual es par, dividirlo por dos.
// Si el número actual es impar, restarle 1.

function reducirACero(num) {
  let count = 0;
  let n = num;

  for(let i=num;i>=0;i--){
    if (n % 2 === 0) {
      count++;
      n = n / 2;
    } 
    if (n % 2 !== 0) {
      count++;
      n = n - 1;
    }
    if( n === 0) {
      return count;
    }
  }
}

// cases tests
console.log(reducirACero(7)) // 5
console.log(reducirACero(123)) // 12
console.log(reducirACero(8)) // 4

// refactor
// function reducirACero(num) {
//   let count = 0;
//   while (num > 0) {
//     num = num % 2 === 0 ? num / 2 : num - 1;
//     count += 1;
//   }
//   return count;
// }