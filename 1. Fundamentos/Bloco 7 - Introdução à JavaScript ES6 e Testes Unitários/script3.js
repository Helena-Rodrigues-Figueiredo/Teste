const factorial = number => {
    let resultado = 1;
    for(let index = number; index >= 1; index -= 1) {
        resultado = resultado * index;
    }
    return resultado;
}

console.log(factorial(8));


