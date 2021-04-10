const nums = [1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1];
let cont = 0;

for(let i=0; i<nums.length;i++){
  if(nums[i] === 1){
    cont++;
  }
}

console.log(cont);