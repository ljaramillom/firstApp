// Escribe una función llamada transcribir que reciba un string (una cadena de ADN) y retorne otro string (su complemento ARN).

// Los complementos son los siguientes:
// G -> C
// C -> G
// T -> A
// A -> U

function transcribir(str) {
  let obj = {G: 'C', C: 'G', T: 'A', A: 'U'};
  let newStr = '';

  for(let i of str){
    if(obj[i]) {
      newStr += obj[i];
    } else {
      newStr += i;
    }
  }
  return newStr;
}

// cases tests
console.log(transcribir("ACGT")) // UGCA
console.log(transcribir("ACGTGGTCTTAA")) // UGCACCAGAAUU