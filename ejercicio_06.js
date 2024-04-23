//Ingresar dos valores enteros y enumerar los elementos que los separan.
//Ejemplo 1: 2 y 6 --> 3 , 4, 5
//Ejemplo 2: 10 y 5 --> 9, 8, 7, 6 

let num1 = 1

let num2 = 6

let n = 0

console.log (`los numeros son:`)

for (let i = 1 + num1; i < num2; i++) {
    n = i
    console.log (n)
}

for (let i = num1 - 1; i > num2; i--) {
    n = i
    console.log (n)
}