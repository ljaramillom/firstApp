// Crea un objeto literal en una variable llamada auto que tenga un atributo velocidad (con valor inicial 0) y dos métodos acelerar y frenar. Los métodos acelerar y frenar deben incrementar y decrementar la propiedad velocidad en 1

const auto = {
  velocidad: 0,
  acelerar() { this.velocidad++},
  frenar() { this.velocidad--},
}

// cases tests
console.log(auto.velocidad) // 0
auto.acelerar()
console.log(auto.velocidad) // 1
auto.frenar()
console.log(auto.velocidad) // 0