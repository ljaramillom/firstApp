const mat = [
  ["Pablo", "Maria", "Pedro"],
  ["Diana", "Juan", "Federico"],
  ["Roberto", "Daniel", "Sandra"]
];

  for(let i=0; i<3; i++) {
    console.log('Grupo '+(i+1)+":");
    for(let j=0; j<3; j++) {
      console.log(mat[i][j]);
    }
  }