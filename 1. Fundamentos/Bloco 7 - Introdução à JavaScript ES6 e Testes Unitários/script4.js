const btnContador = document.getElementById('botao');
const armazenaContagem = document.getElementById('valores');
let clickCount = 0;

btnContador.addEventListener('click', () => armazenaContagem.innerText = clickCount += 1);