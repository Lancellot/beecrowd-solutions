import * as fs from 'fs';

const input: number[] = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

const arrnum: number[] = input.slice(0, 3);

const maior = (arrNum: number[]): number => {
    let maiorValor: number = arrNum[0]!;

    for (let i = 1; i < arrNum.length; i++) {
        if (arrNum[i]! > maiorValor) {
            maiorValor = arrNum[i]!;
        }
    };
    return maiorValor;
};

console.log(`${maior(arrnum)} eh o maior`);