import * as fs from 'fs';

const input: number[] = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

const raio: number = input[0]!;

const esfera = (raio: number): string => {
    const volume: number = (4 / 3.0) * 3.14159 * Math.pow(raio, 3);
    return `VOLUME = ${volume.toFixed(3)}`;
};

console.log(esfera(raio));