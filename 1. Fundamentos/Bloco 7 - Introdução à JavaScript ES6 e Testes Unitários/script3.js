// //Questão 1 - Parte II

const factorial = number => {
    let resultado = 1;
    for(let index = number; index >= 1; index -= 1) {
        resultado = resultado * index;
    }
    return resultado;
}

console.log(factorial(8));

//Questão 2 - Parte II

const maiorPalavra = (array) => {
  let separador = array.split(' ');
  let resultado = separador[0];
  for (let index = 1; index < separador.length; index += 1) {
    if (separador[index].length > separador[index - 1].length) {
      resultado = separador[index];
    }
  }
  return resultado;
};