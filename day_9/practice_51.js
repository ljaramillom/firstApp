const max = (...arr) => arr.sort((a,b) => b - a)[0];

// cases tests
console.log(max(1, 2, 3, 4)) // 4
console.log(max(63, 85, 39, 24, 3)) // 85