const custoProduto = 200;
const valorDeVenda = 300;
const custoComImposto = custoProduto + (custoProduto*0.20)
const lucro = valorDeVenda - custoComImposto;

if (custoProduto < 0 || valorDeVenda <0) {
    console.log("Erro! Não pode ser inserido um valor abaixo de zero.");
}

else {
    console.log(lucro*1000);
}