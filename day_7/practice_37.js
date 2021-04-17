// Escribe una función buscarProducto que reciba un arreglo de objetos y un número. La función deberá buscar el número dentro de cada objeto (en la llave id) y retornar el objeto encontrado.

// Si no encuentra un objeto con ese id deberá retornar null.

function searchProduct(obj, num) {
  for(let i=0; i<obj.length; i++){
    if(obj[i].id === num) {
      return obj[i];
    } else {
      return {};
    }
  }
}
let products = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];

console.log(searchProduct(products, 1));