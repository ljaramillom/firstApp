// Escribir una función llamada triqui que reciba un argumento board (un arreglo de arreglos) y retorne true si hay triqui, false de lo contrario.

function triqui(arr) {
  if(arr[0] === arr[1] && arr[1] === arr[2]){
    return true;
  } else {
    return false;
  }
}

function triquiDiagonalPrincipal(board){
  let arr = [];
  for(let i=0; i<board.length;i++){
    for(let j=0; j<board.length;j++){
      if(i==j){
        arr.push(board[i][j])
      }
    }
  }
  return triqui(arr);
}


function triquiDiagonalSecundaria(board){
  let arr = [];
  let j = board.length - 1;

  for(let i=0; i<board.length;i++){
    arr.push(board[i][j]);
    j--;
  }
  return triqui(arr);
}

function triquiRow(board){
  for(let i=0;i<board.length;i++){
    if(triqui(board[i])){
      return true;
    }
  }
  return false;
}

function triquiColumn0(board){
  let arr = [];
  for(let i=0;i<board.length;i++){
    arr.push(board[i][0])
  }
  return triqui(arr);
}

function triquiColumn1(board){
  let arr = [];
  for(let i=0;i<board.length;i++){
    arr.push(board[i][1])
  }
  return triqui(arr);
}

function triquiColumn2(board){
  let arr = [];
  for(let i=0;i<board.length;i++){
    arr.push(board[i][2])
  }
  return triqui(arr);
}

function triquiResult(board){
 let a = triquiColumn0(board);
 let b = triquiColumn1(board);
 let c = triquiColumn2(board);
 let d = triquiDiagonalPrincipal(board);
 let e = triquiDiagonalSecundaria(board);
 let f = triquiRow(board);

 if(a){
   return true;
 } else if(b){
   return true;
 } else if(c){
   return true;
 } else if(d){
   return true;
 } else if(e){
   return true;
 } else if(f){
   return true;
 } else {
   return false;
 }

}

// cases tests
const b1 = [
  ["X", "O", "-"],
  ["O", "O", "X"],
  ["-", "O", "X"]
]
console.log('**********')
console.log(triquiResult(b1)) // true

const b2 = [
  ["X", "X", "-"],
  ["O", "O", "X"],
  ["-", "O", "X"]
]

console.log('**********')
console.log(triquiResult(b2)) // false

const b3 = [
  ["X", "X", "-"],
  ["O", "X", "X"],
  ["-", "O", "X"]
]

console.log('**********')
console.log(triquiResult(b3)) // true


const b4 = [
  ["X", "X", "-"],
  ["O", "O", "X"],
  ["-", "O", "X"]
]

console.log('**********')
console.log(triquiResult(b4)) // false