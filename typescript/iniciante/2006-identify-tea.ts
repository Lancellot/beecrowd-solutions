import * as fs from "node:fs";

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const T = input[0]!;
const votos = input.slice(1, 6);

const identificaCha = (cha: number, votos: number[]): number => {
    let acerto = 0;

    for (const voto of votos) {
        if (voto === cha) acerto++;
    }

    return acerto;
};

console.log(identificaCha(T, votos));