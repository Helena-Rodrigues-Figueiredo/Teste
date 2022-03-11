let word = 'Festa';
let inversa = '';

for (let index = word.length - 1; index >= 0; index -= 1) {
    inversa += word[index];
}

console.log(inversa);