// Escribe una función llamada frecuencias que reciba un string y retorne un objeto con el número de veces que aparece cada carácter (exceptuando el espacio en blanco)

function frecuencias(str) {
  const obj = new Object();
  const strArr = str.split("");
  const myUniqueArray = [...new Set(strArr)];

  for(let i=0;i<myUniqueArray.length;i++){
      obj[myUniqueArray[i]] = 0;
  }

  for(let j=0;j<strArr.length;j++){
    for(let key in obj) {
      if(key === strArr[j]){
        obj[key] = obj[key] + 1;
      }
    }
  }
  return clear(obj);
}

function clear(obj) {
  for(let key in obj){
    if(key === ' '){
      delete obj[' '];
    }
  }
  return obj;
}


console.log(frecuencias("anita lava la tina"));
// { a: 6, n: 2, i: 2, t: 2, l: 2, v: 1 }


/**
 * function frecuencias(str) {
  let obj = new Object();
  for(let i of str){
    if(i != ' '){
      if(obj[i]) {
        obj[i] += 1;
      } else {
        obj[i] = 1;
      }
    }
  }
  return obj;
}
 */