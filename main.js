const form = document.getElementById('form-formulario');
let numeroA = document.getElementById('numero-a');
let numeroB = document.getElementById('numero-b');
let resultado = document.getElementById('resultado')

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const mensagemSucesso = `CERTO: O número B é maior que o número A`
    const mensagemError = `ERRO: O número A é maior que o número B`
    if (numeroB.value > numeroA.value){
        resultado.innerHTML = mensagemSucesso;
        resultado.style.backgroundColor = '#27ae60';
        resultado.style.padding = '16px';
        resultado.style.color = '#fff';
        resultado.style.display = 'block';
    } else {
        resultado.innerHTML = mensagemError;
        resultado.style.backgroundColor = 'rgb(255, 0, 0)';
        resultado.style.padding = '16px';
        resultado.style.color = '#fff';
        resultado.style.display = 'block';
    }
    form.reset();
})