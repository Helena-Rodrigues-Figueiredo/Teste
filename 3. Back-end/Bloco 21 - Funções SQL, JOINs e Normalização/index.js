function sumTwoSmallerNumbers(numbers) {
    let array = numbers.sort((a, b) => a-b);
    return array[0] + array[1];
}

console.log(sumTwoSmallerNumbers([10, 343445353, 3453445, 3453545353453]));