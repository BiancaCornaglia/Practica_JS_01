//Sumar solo los elementos pares de un array.

let numeros = [2, 3, 5, 11]

if ( numeros %2 === 0) {let suma = numeros.reduce(
    (acumulador, valor) => acumulador + valor,
    0, 
)
    console.log (suma)
}
