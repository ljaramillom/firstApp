
function hello(obj) {
  let text = 'Hello! ' + obj.name;
  if(obj.age) {
    text = text + " you are " + obj.age + " years old";
  }
  return text;
}
//cases tests
const tannia = { name: "Tannia", age: 23 };
const charles = { name: "Charles" };
console.log(hello(tannia));
console.log(hello(charles));