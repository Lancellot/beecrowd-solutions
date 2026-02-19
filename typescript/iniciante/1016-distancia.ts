import * as fs from 'fs';

const input: number[] = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

const arrnum: number[] = input.slice(0, 1);

const distancia = (arrNum: number[]): string => {
    const distancia: number = arrNum[0]!;
    const tempo: number = distancia * 2;

    return `${tempo} minutos`;
};

console.log(distancia(arrnum));