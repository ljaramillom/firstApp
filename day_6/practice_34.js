function prom(arr) {
  let sum = 0;
  for(let i=0; i<arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum/arr.length;
}

//cases tests
console.log(prom([1, 2, 3, 4])) // 2.5
console.log(prom([7, 8, 9])) // 8
console.log(prom([300, 100])) // 200