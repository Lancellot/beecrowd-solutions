import * as fs from 'fs';

const input: number[] = fs.readFileSync(0, 'utf8')
    .trim()
    .split(/\s+/)
    .map(Number);

const a: number = input[0]!;
const b: number = input[1]!;
const c: number = input[2]!;
const d: number = input[3]!;

const selecao = (a: number, b: number, c: number, d: number): string => {

    if (b > c && d > a && (c + d) > (a + b) && c > 0 && d > 0 && a % 2 === 0) {
        return 'Valores aceitos';
    } else {
        return 'Valores nao aceitos';
    }
};

console.log(selecao(a, b, c, d));