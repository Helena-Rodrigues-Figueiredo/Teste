// 1. Faça um algoritmo que calcule a soma de 50 a 100 usando a estrutura “for” e retorne no formato:
// A soma de 50 a 100 é: X.
// let resultado = 50;

// for (let index = 51; index <= 100; index += 1) {
// resultado = resultado + index;
// }

// console.log("A soma de 50 a 100 é: " + resultado);

// 2. Crie um algoritmo que conte quantos números do intervalo entre 1 e 125 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta a sua escolha.

// let resultado = 0;

// for (let index = 1; index <= 125; index += 1) {
// if (index % 3 === 0) {
// resultado = resultado + 1;
// }
// }

// console.log(resultado);

// 3. Crie um algoritmo que simula o jogo “pedra, papel e tesoura” levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// “Jogador 1 vence” ou “Empate” ou “Jogador 2 vence”.

let jogador1 = "papel";
let jogador2 = "papel";

if (jogador1 == "papel") {
    switch (jogador2) {
        case "tesoura":
            console.log("Jogador 2 vence");
    }

    switch (jogador2) {
        case "pedra":
            console.log("Jogador 1 vence");
    }

    switch (jogador2) {
        case "papel":
            console.log("Empate");
    }
}

if (jogador1 == "tesoura") {
    switch (jogador2) {
        case "tesoura":
            console.log("Empate");
    }

    switch (jogador2) {
        case "pedra":
            console.log("Jogador 2 vence");
    }

    switch (jogador2) {
        case "papel":
            console.log("Jogador 1 vence");
    }
}

if (jogador1 == "pedra") {
    switch (jogador2) {
        case "tesoura":
            console.log("Jogador 1 vence");
    }

    switch (jogador2) {
        case "pedra":
            console.log("Empate");
    }

    switch (jogador2) {
        case "papel":
            console.log("Jogador 2 vence");
    }
}



// 4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: “A pessoa é maior de idade”.
// 5. Crie um algoritmo que recebe a idade de Marcella, Carlos e Camila e imprima quem é a mais nova no formato:
// “Pessoa” é a mais nova.
