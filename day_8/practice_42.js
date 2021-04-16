function pares(arr){
  const arrResult = arr.filter(function (elem) {
    return elem%2===0;
  });
  return arrResult;
}


// cases tests
console.log(pares([0, 1, 2, 3, 4])) // [0, 2, 4]
console.log(pares([120, 876, 934, 1298])) // [120, 876, 934, 1298]
console.log(pares([7, 921, 43, 9649])) // []