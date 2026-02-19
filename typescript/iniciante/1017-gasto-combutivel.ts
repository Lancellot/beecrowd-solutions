import * as fs from 'fs';

const input: number[] = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

const arrnum: number[] = input.slice(0, 2);

const gastoCombustivel = (arrNum: number[]): string => {
    const tempo: number = arrNum[0]!;
    const velocidade: number = arrNum[1]!;
    const distancia: number = tempo * velocidade;
    const gasto: number = distancia / 12;

    return `${gasto.toFixed(3)}`;
};

console.log(gastoCombustivel(arrnum));