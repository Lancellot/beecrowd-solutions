//1 - Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
//utilizando uma estrutura de controle if.

const prompt = require('prompt-sync')();

const numVer = Number(prompt('Digite um número inteiro: '));

const resultado = numVer % 2 === 0 ? 'par' : 'ímpar';

console.log(`O número ${numVer} é ${resultado}.`);

//------------------------------------------------------------
//2 - Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//controle if-else.

const idade = Number(prompt('Digite a idade da pessoa: '));

const classificacao = idade < 12 ? 'criança' :
                    idade < 18 ? 'adolescente' :
                    idade < 60 ? 'adulto' : 'idoso';

console.log(`A pessoa é classificada como: ${classificacao}.`);

//------------------------------------------------------------
//3 - Implemente um programa que recebe uma nota de 0 a 10 e classifica como
//"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const nota = Number(prompt('Digite a nota (0 a 10): '));

const classificacaoNota = nota >= 7 ? 'Aprovado' :
                        nota >= 5 ? 'Recuperação' : 'Reprovado';

console.log(`A nota ${nota} é classificada como: ${classificacaoNota}.`);

//------------------------------------------------------------
//4 - Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
//determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
//utilizando if-else.

const peso = Number(prompt('Digite o peso em kg: '));
const altura = Number(prompt('Digite a altura em metros: '));

const imc = peso / (altura * altura);

const categoriaPeso = imc < 18.5 ? 'baixo peso' :
                    imc < 25 ? 'peso normal' :
                    imc < 30 ? 'sobrepeso' : 'obesidade';

console.log(`O IMC de ${imc.toFixed(2)} classifica como: ${categoriaPeso}.`);

//------------------------------------------------------------
//5 - As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
//forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
//compradas, calcule e escreva o valor total da compra.

const qtdMacas = Number(prompt('Digite o número de maçãs compradas: '));

const valorTotal = qtdMacas < 12 ? qtdMacas * 0.30 : qtdMacas * 0.25;

console.log(`O valor total da compra é: R$ ${valorTotal.toFixed(2)}.`);

//------------------------------------------------------------
//6 - Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
//e escreve-los em ordem crescente.

const valor1 = Number(prompt('Digite o primeiro valor: '));
const valor2 = Number(prompt('Digite o segundo valor: '));

const valoresOrdenados = valor1 < valor2 ? [valor1, valor2] : [valor2, valor1];

console.log(`Os valores em ordem crescente são: ${valoresOrdenados[0]} e ${valoresOrdenados[1]}.`);

//------------------------------------------------------------
//7 - Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
//utilizando um loop for.

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

//------------------------------------------------------------
//8 - Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const num = Number(prompt('Digite um número inteiro: '));

for (let i = 0; i < 10; i++) {
    console.log(num);
}

//------------------------------------------------------------
//9 - Escreva um programa que solicita ao usuário 5 números e calcula a soma total
//utilizando um loop for.

let soma = 0;
for (let i = 0; i < 5; i++) {
    const num = Number(prompt('Digite um número: '));
    soma += num;
}
console.log(`A soma total é: ${soma}`);

//------------------------------------------------------------
//10 - Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
//10) utilizando um loop for.

const numfornecido = Number(prompt('Digite um número (1 a 10): '));

for (let i = 1; i <= 10; i++) {
    console.log(`${numfornecido} x ${i} = ${numfornecido * i}`);
}

//11. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a
//média aritmética desses números.

let total = 0;
let contador = 0;

while (true) {
    const num = Number(prompt('Digite um número (ou 0 para sair): '));
    if (num === 0) {
        break;
    }
    total += num;
    contador++;
}

if (contador > 0) {
    const media = total / contador;
    console.log(`A média aritmética é: ${media.toFixed(2)}`);
} else {
    console.log('Nenhum número foi digitado.');
}