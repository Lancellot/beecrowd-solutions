import * as fs from 'fs';

const input: number[] = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

const codigoPeca1: number = input[0]!;
const quantidadePeca1: number = input[1]!;
const valorUnitarioPeca1: number = input[2]!;

const codigoPeca2: number = input[3]!;
const quantidadePeca2: number = input[4]!;
const valorUnitarioPeca2: number = input[5]!;

const valorTotal = (quantidadePeca1: number, valorUnitarioPeca1: number, quantidadePeca2: number, valorUnitarioPeca2: number): string => {
    const total: number = quantidadePeca1 * valorUnitarioPeca1 + quantidadePeca2 * valorUnitarioPeca2;
    return `VALOR A PAGAR: R$ ${total.toFixed(2)}`;
}

console.log(valorTotal(quantidadePeca1, valorUnitarioPeca1, quantidadePeca2, valorUnitarioPeca2));