// Ingresar tres valores e indicar cual es el mayor y cual el menor.

let num1 = 43
let num2 = 100
let num3 = 6

if (num1 > num2 && num1 > num3) {
    mayor = num1
}

if (num2 > num1 && num2 > num3) {
    mayor = num2
}

if (num3 > num1 && num3 > num2) {
    mayor = num3
}

if (num1 < num2 && num1 < num3) {
    menor = num1
}

if (num2 < num1 && num2 < num3) {
    menor = num2
}

if (num3 < num1 && num3 < num2) {
    menor = num3
}

console.log(`el mayor numero es: ${mayor}`)
console.log(`el menor numero es: ${menor}`)