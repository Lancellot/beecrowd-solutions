import * as fs from 'fs';

const input: number[] = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

const arrnum: number = input[0]!;

const cedulas = (arrNum: number): string => {
    let valor: number = arrNum;
    const notas: number[] = [100, 50, 20, 10, 5, 2, 1];
    let resultado: string = `${valor}\n`;

    for (const nota of notas) {
        const quantidade: number = Math.floor(valor / nota);
        resultado += `${quantidade} nota(s) de R$ ${nota},00\n`;
        valor -= quantidade * nota;
    }

    return resultado;
};

console.log(cedulas(arrnum));