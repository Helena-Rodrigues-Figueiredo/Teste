const primeiro = 10;
const segundo = 100;
const terceiro = 30;

if (primeiro > segundo && primeiro > terceiro) {
    console.log("O número maior é o " + primeiro);
}

else if (segundo > primeiro && segundo > terceiro) {
    console.log("O número maior é o " + segundo);
}

else {
    console.log("O número maior é o " + terceiro);
}