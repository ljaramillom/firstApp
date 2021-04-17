function max(arr){
let numbers = arr.sort(function (a,b){
  return b - a;
});
  return numbers[0]
}

// cases tests
console.log(max([1, 2, 3, 4])) // 4
console.log(max([63, 85, 39, 24, 3])) // 85