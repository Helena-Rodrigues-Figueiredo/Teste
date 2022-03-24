const btnEnviar = document.getElementById('envia-informacoes');
const btnApagar = document.getElementById('apaga-informacoes');
const corpoForm = document.querySelector('fieldset');

function interrompeComportamento(event) {
    event.preventDefault();
}

btnEnviar.addEventListener('click', interrompeComportamento);

function apagaDados() {
    corpoForm.innerText = "";
}

btnApagar.addEventListener('click', apagaDados);