// Crea una variable llamada persona de tipo objeto literal con las siguientes propiedades:

// peso - 65
// estatura - 1.8
// bmi - una función que retorne el índice de masa corporal de la persona. Recuerda que la fórmula es peso/estatura^2 (peso sobre estatura al cuadrado).

const persona = {
  peso: 65,
  estatura: 1.8,
  bmi: function(){return this.peso/this.estatura**2}
}

// código de prueba
console.log(persona.bmi()); // 20.061728395061728