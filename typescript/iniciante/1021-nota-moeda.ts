import * as fs from 'fs';

const input: number[] = fs.readFileSync(0, 'utf8')
    .trim()
    .split(/\s+/)
    .map(Number);

const valorEntrada: number = input[0]!;

const cedulas = (valorInicial: number): string => {
    let valor: number = valorInicial;
    const notas: number[] = [100, 50, 20, 10, 5, 2];
    const moedas: number[] = [1, 0.50, 0.25, 0.10, 0.05, 0.01];

    let resultado: string = 'NOTAS:\n';

    for (const nota of notas) {
        const quantidade: number = Math.floor(valor / nota);
        resultado += `${quantidade} nota(s) de R$ ${nota}.00\n`;
        valor -= quantidade * nota;
    }

    resultado += 'MOEDAS:\n';

    for (const moeda of moedas) {
        const quantidade: number = Math.floor(valor / moeda);
        resultado += `${quantidade} moeda(s) de R$ ${moeda.toFixed(2)}\n`;
        valor -= quantidade * moeda;
    }

    return resultado;
};

console.log(cedulas(valorEntrada));