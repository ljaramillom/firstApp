
let names = ["Pedro", "Pablo", "María", "Juan", "Diana"];

let firstname = prompt('Please, enter name: ');
names.push(firstname);

let lastname = prompt('Please, enter other name: ');
names.splice(2,1,lastname);

for(let i=0; i<names.length; i++) {
  console.log(names[i]);
}
