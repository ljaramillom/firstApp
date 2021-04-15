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