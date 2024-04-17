// Ingresar tres valores e indicar cual es el mayor y cual el menor.

let num1 = 12
let num2 = 54
let num3 = 32

menor = 99999
mayor = 0

if (mayor < num1)
    mayor = num1

    if (mayor < num2)
        mayor = num2

        if(mayor < num3)
            mayor = num3

if(menor > num1)
    menor = num1

    if (menor > num2)
        menor = num2

        if(menor > num3)
            menor = num3

console.log(`el mayor numero es ${mayor}`)
console.log(`el menor numero es ${menor}`)