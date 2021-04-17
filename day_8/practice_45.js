// Escribe una función llamada productosBaratos que reciba un arreglo de objetos (que representan productos) y retorne un nuevo arreglo con los nombres de los productos cuyo precio esté entre 5 y 10

function productosBaratos(prods) {
  const arrResult = prods.filter(function (elem) {
    return (elem.precio >= 5 && elem.precio <= 10);
  });
  const arr = arrResult.map(function (elem){
    return elem.nombre;
  });
  return arr;
}


// cases tests
let prods = [
  { nombre: "Arroz", precio: 5 },
  { nombre: "Pan", precio: 3 },
  { nombre: "Tomate", precio: 8 },
  { nombre: "Leche", precio: 15 }
];

console.log(productosBaratos(prods)); // ["Arroz", "Tomate"]