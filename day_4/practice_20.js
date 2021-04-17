// Imprimir la matriz en consola
// Grupo 1:
//   Pablo
//   Maria
//   Pedro
// Grupo 2:
//   Diana
//   Juan
//   Federico
// Grupo 3:
//   Roberto
//   Daniel
//   Sandra


const mat = [
  ["Pablo", "Maria", "Pedro"],
  ["Diana", "Juan", "Federico"],
  ["Roberto", "Daniel", "Sandra"]
];

  for(let i=0; i<mat.length; i++) {
    console.log('Grupo '+(i+1)+":");
    for(let j=0; j<mat[i].length; j++) {
      console.log(mat[i][j]);
    }
  }