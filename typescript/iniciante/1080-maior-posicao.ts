import * as fs from "node:fs";

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

function maiorPosicao(numeros: number[]): { maior: number | undefined ; posicao: number } {
let maior = input[0];
let posicao = 1;

for (let i = 1; i < input.length; i++) {
    if (input[i]! > maior!) {
        maior = input[i];
        posicao = i + 1;
    }
}
return { maior, posicao };
}
const { maior, posicao } = maiorPosicao(input);
console.log(maior);
console.log(posicao);