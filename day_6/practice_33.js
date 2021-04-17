// Escribe una función llamada capitalizar que reciba una cadena y capitalice cada palabra de la cadena.

// Nota: puedes asumir que cada palabra está separada por espacio.

function capitalizer(arg) {
  let strArr = arg.split(' ');
  for(let i=0;i<strArr.length;i++){
    strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
  }
  return strArr.join(" ");
}

console.log(capitalizer("make it real"));