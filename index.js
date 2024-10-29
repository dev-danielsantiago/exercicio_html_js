const form = document.getElementById('analisar_Numero');
const campo_A = document.querySelector('#campo_A');
const campo_B = document.querySelector('#campo_B');
const resultado = document.querySelector('.resultado');

function validarCampos(a, b) {
    if (b > a) {
        resultado.innerHTML = '<span style="color: green;">Formulário válido: O número B é maior que o número A.</span>';
    } else {
        resultado.innerHTML = '<span style="color: red;">Formulário inválido: O número B deve ser maior que o número A.</span>';
    }
    resultado.style.display = "block";
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    validarCampos(Number(campo_A.value), Number(campo_B.value));
    campo_A.value = "";
    campo_B.value = "";
});
