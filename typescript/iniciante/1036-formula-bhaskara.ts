import * as fs from 'fs';

const input: number[] = fs.readFileSync(0, 'utf8')
    .trim()
    .split(/\s+/)
    .map(Number);

const a: number = input[0]!;
const b: number = input[1]!;
const c: number = input[2]!;

const formulaBhaskara = (a: number, b: number, c: number): void => {
    const delta = b ** 2 - 4 * a * c;
    if (delta < 0 || a === 0) {
        console.log('Impossivel calcular');
    } else {
        const R1 = (-b + Math.sqrt(delta)) / (2 * a);
        const R2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log(`R1 = ${R1.toFixed(5)}`);
        console.log(`R2 = ${R2.toFixed(5)}`);
    }
};

formulaBhaskara(a, b, c);