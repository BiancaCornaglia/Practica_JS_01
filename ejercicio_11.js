function contarRepeticiones(palabra) {
    let repeticiones = {};

    for (let letra of palabra) {
        if (repeticiones[letra]) {
            repeticiones[letra]++;
        } else {
            repeticiones[letra] = 1;
        }
    }

    return repeticiones;
}

const palabra = "manzana";
const resultado = contarRepeticiones(palabra);
console.log("Repeticiones de letras:", resultado);