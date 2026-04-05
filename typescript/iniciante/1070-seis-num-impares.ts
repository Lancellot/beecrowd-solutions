import * as fs from "node:fs";

const input = fs.readFileSync(0, "utf8").trim();

const entrada = Number(input);

const numImpares = (num : number) : number[] => {
    const impares : number[] = [];

    for (let i = num ; impares.length < 6; i++) {
    if (i % 2 !== 0)
        impares.push(i);
    }
    return impares;
}

console.log(numImpares(entrada).join("\n"));