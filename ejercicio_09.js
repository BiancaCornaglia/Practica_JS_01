//Obtener la suma de los elementos de un array.

let numeros = [2, 2, 2, 2]

let suma = numeros.reduce(
    (acumulador, valor) => acumulador + valor,
    0,
  
)

console.log (suma)