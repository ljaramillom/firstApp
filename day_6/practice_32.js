function calculateColor(num) {
  let color = "";
  if (num === 1) {
    color = "black";
  } else if (num === 2) {
    color = "while";
  } else if (num === 3) {
    color = "blue";
  } else {
    color = "green";
  }
  return "The color is " + color;
}

//cases tests
console.log(calculateColor(1));