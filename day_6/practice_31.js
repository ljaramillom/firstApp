// El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

function bmi( w, t) {
  return w / t ** 2;
}

//cases tests
console.log(bmi(65, 1.8));