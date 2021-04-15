function descifrar(str, obj) {
  const salida = str.split("");
  for(let i=0;i<salida.length;i++){
    for(let key in obj){
        salida[i] = salida[i].replace(key, obj[key])
    }
  }
  return salida.join("");
}

console.log(descifrar("h0l4", { 0: "o", 4: "a" }));