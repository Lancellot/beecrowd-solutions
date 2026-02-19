import * as fs from 'fs';

const input: number[] = fs.readFileSync(0, 'utf8')
    .trim()
    .split(/\s+/)
    .map(Number);

const valorEntrada: number = input[0]!;

const calcularIdade = (totalDias: number): string => {
    const anos: number = Math.floor(totalDias / 365);
    const meses: number = Math.floor((totalDias % 365) / 30);
    const dias: number = totalDias % 365 % 30;

    return `${anos} ano(s)\n${meses} mes(es)\n${dias} dia(s)`;
};

console.log(calcularIdade(valorEntrada));