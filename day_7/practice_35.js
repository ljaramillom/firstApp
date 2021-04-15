let person = {
  name  : "Pedro Pérez",
  age    : 30,
  active  : true,
  hobbies : ["coding", "squash", "read"]
};

console.log(person.age);
person["tall"] = 1.8;
delete person.active;

for (let key in person) {
  console.log(key + ": " + person[key])
}