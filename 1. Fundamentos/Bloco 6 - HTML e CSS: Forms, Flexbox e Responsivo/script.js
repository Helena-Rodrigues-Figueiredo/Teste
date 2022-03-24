const btnEnviar = document.getElementById('envia-informacoes');
const btnApagar = document.getElementById('apaga-informacoes');
const corpoForm = document.querySelectorAll('input');
const marcarCheck = document.getElementById('concordo1');

function interrompeComportamento(event) {
    event.preventDefault();
}

btnEnviar.addEventListener('click', interrompeComportamento);

function apagaDados() {
    corpoForm.innerText = "";
}

btnApagar.addEventListener('click', apagaDados);


function habilitaBotao() {
    if () {
        btnEnviar
    }
}