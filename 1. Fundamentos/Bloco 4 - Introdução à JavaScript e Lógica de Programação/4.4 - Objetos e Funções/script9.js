//9 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

let palavra = "helena";

function palindromo(palavra) {
  for (index in palavra) {
    if (palavra[index] != palavra[(palavra.length - 1) - index]) {
      return false;
    }
  }
  return true;
}

console.log(palindromo(palavra));
