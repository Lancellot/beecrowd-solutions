import * as fs from "node:fs";

const input = fs.readFileSync(0, "utf8").trim().split("\n");

const n = Number(input[0]);

const restoDois = (num: number): number[] => {
    const resultado: number[] = [];

    for (let i = 1; i <= 10000; i++) {
        if (i % num === 2) {
            resultado.push(i);
        }
    }

    return resultado;
};

restoDois(n).forEach(numero => console.log(numero));