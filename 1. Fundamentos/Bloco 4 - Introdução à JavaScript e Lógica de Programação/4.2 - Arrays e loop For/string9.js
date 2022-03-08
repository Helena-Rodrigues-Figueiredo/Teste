let numbers = [];
let divisao = [];

for (let index = 1; index <= 25; index += 1) {
    numbers.push(index);
}

for (let index2 = 0; index2 <= 24; index2 += 1) {
    divisao.push(numbers[index2] / 2);
}

console.log(divisao);