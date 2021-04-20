function reducirACero(num) {
  let count = 0;
  while (num > 0) {
    num = num % 2 === 0 ? num / 2 : num - 1;
    count += 1;
  }
  return count;
}

// cases tests
console.log(reducirACero(7)) // 5
console.log(reducirACero(123)) // 12
console.log(reducirACero(8)) // 4