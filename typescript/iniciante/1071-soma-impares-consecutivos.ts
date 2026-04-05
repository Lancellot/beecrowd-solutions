import * as fs from "node:fs";

const input = fs.readFileSync(0, "utf8").trim().match(/-?\d+/g)?.map(Number) || [];

const entrada1 = input[0]!;
const entrada2 = input[1]!;

const somaImpares = (num1: number, num2: number): number => {
    let soma = 0;
    const menor = Math.min(num1, num2);
    const maior = Math.max(num1, num2);

    for (let i = menor + 1; i < maior; i++) {
        if (i % 2 !== 0) {
            soma += i;
        }
    }
    return soma;
}

console.log(somaImpares(entrada1, entrada2));
