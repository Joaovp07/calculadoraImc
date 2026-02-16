const readline = require('readline');

console.log('Calcula IMC (Índice de Massa Corporal)');
console.log('================================');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question('Digite seu nome: ', (nome) => {
	rl.question('Digite seu peso em kg: ', (pesoTexto) => {
		rl.question('Digite sua altura em metros: ', (alturaTexto) => {
			const peso = Number(pesoTexto.replace(',', '.'));
			const altura = Number(alturaTexto.replace(',', '.'));

			if (!Number.isFinite(peso) || !Number.isFinite(altura) || peso <= 0 || altura <= 0) {
				console.log('Dados inválidos. Informe peso e altura com valores maiores que zero.');
				rl.close();
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

			console.log('================================');
			console.log(`Nome: ${nome}`);
			console.log(`Seu IMC é ${imc.toFixed(2)} (${classificacao})`);

			rl.close();
		});
	});
});
