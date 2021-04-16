function posPares(arr){
  const arrResult = arr.filter(function (elem, i) {
    return i%2===0;
  });
  return arrResult;
}

// cases tests
console.log(posPares(["a", "b", "c"])) // ["a", "c"]
console.log(posPares([0, 1, 2, 3, 4])) // [0, 2, 4]
console.log(posPares([])) // []