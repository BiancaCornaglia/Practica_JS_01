//Sumar solo los elementos pares de un array.

function sumarNumerosPares(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            suma += array[i];
        }
    }
    return suma;
}

const numeros = [1, 2, 3, 4, 5];
const resultado = sumarNumerosPares(numeros);
console.log(`La suma de los números pares es: ${resultado}`);
    
