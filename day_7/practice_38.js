// Escribe una función llamada descifrar que reciba un string y un objeto. Utiliza las propiedades del objeto para reemplazar los caracteres de la cadena y retorna el resultado:

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