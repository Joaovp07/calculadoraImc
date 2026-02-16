const form = document.getElementById('imcForm');
const resultadoDiv = document.getElementById('resultado');
const erroDiv = document.getElementById('erro');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const pesoTexto = document.getElementById('peso').value;
    const alturaTexto = document.getElementById('altura').value;

    const peso = Number(pesoTexto.replace(',', '.'));
    const altura = Number(alturaTexto.replace(',', '.'));

    erroDiv.classList.remove('ativo');
    resultadoDiv.classList.remove('ativo');

    if (!Number.isFinite(peso) || !Number.isFinite(altura) || peso <= 0 || altura <= 0) {
        erroDiv.textContent = 'Dados inválidos. Informe peso e altura com valores maiores que zero.';
        erroDiv.classList.add('ativo');
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = '';

    if (imc < 18.5) classificacao = 'Abaixo do peso';
    else if (imc < 25) classificacao = 'Peso normal';
    else if (imc < 30) classificacao = 'Sobrepeso';
    else if (imc < 35) classificacao = 'Obesidade grau I';
    else if (imc < 40) classificacao = 'Obesidade grau II';
    else classificacao = 'Obesidade grau III';

    document.getElementById('resultNome').textContent = nome;
    document.getElementById('resultImc').textContent = imc.toFixed(2);
    document.getElementById('resultClass').textContent = classificacao;

    resultadoDiv.classList.add('ativo');
});