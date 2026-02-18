import * as fs from 'fs';

const input: number[] = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

const arrnum: number[] = input.slice(0, 2);

const consumo = (arrNum: number[]): string => {
    const distancia: number = arrNum[0]!;
    const combustivel: number = arrNum[1]!;
    const consumoMedio: number = distancia / combustivel;

    return `${consumoMedio.toFixed(3)} km/l`;
};

console.log(consumo(arrnum));