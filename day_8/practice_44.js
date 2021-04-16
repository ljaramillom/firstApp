function multiplicar(arr, num) {
  const arrResult = arr.map(function (elem) {
    return elem*num;
  });
  return arrResult;
}


//cases tests
console.log(multiplicar([1, 2, 3], 2)) // [2, 4, 6]
console.log(multiplicar([7, 4], 3)) // [21, 12]
console.log(multiplicar([], 10)) // []