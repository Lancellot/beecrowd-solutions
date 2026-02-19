import * as fs from 'fs';

const input: number[] = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

const arrnum: number[] = input.slice(0, 4);

const distancia = (arrNum: number[]): string => {
    const x1: number = arrNum[0]!;
    const y1: number = arrNum[1]!;
    const x2: number = arrNum[2]!;
    const y2: number = arrNum[3]!;
    const distancia: number = Math.sqrt(
        Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)
    );

    return `${distancia.toFixed(4)}`;
};

console.log(distancia(arrnum));