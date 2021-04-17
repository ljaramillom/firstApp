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