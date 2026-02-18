import * as fs from 'fs';

const input: string[] = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

const nome: string = input[0]!;
const salarioFixo: number = parseFloat(input[1] as string);
const totalVendas: number = parseFloat(input[2] as string);

const salario = (salarioFixo: number, totalVendas: number): string => {
    const total: number = salarioFixo + totalVendas * 0.15;
    return `TOTAL = R$ ${total.toFixed(2)}`;
};

console.log(salario(salarioFixo, totalVendas));