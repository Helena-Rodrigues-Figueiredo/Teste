let salarioBruto = 5000;
let salarioComDescontoInss;
let salarioLiquido;

if (salarioBruto > 0 && salarioBruto <= 1556.94) {
    salarioComDescontoInss = salarioBruto - (salarioBruto*0.08);
}

if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salarioComDescontoInss = salarioBruto - (salarioBruto*0.09);
}

if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    salarioComDescontoInss = salarioBruto - (salarioBruto*0.11);
}

if (salarioBruto > 5189.82) {
    salarioComDescontoInss = salarioBruto - 570.88;
}


if (salarioComDescontoInss <= 1903.98) {
    console.log("O salário líquido é de " + salarioComDescontoInss)
}

if (salarioComDescontoInss > 1903.98 && salarioComDescontoInss <= 2826.65) {
    salarioLiquido = salarioComDescontoInss - ((salarioComDescontoInss * 0.075) - 142.80)
    console.log("O salário líquido é de " + salarioLiquido)
}

if (salarioComDescontoInss >= 2826.66 && salarioComDescontoInss <= 3751.05) {
    salarioLiquido = salarioComDescontoInss - ((salarioComDescontoInss * 0.15) - 354.80)
    console.log("O salário líquido é de " + salarioLiquido)
}

if (salarioComDescontoInss >= 3751.06 && salarioComDescontoInss <= 4664.68) {
    salarioLiquido = salarioComDescontoInss - ((salarioComDescontoInss * 0.225) - 636.13)
    console.log("O salário líquido é de " + salarioLiquido)
}

if (salarioComDescontoInss > 4664.68) {
    salarioLiquido = salarioComDescontoInss - ((salarioComDescontoInss * 0.275) - 869.36)
    console.log("O salário líquido é de " + salarioLiquido)
}