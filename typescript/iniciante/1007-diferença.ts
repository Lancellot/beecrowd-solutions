import * as fs from "fs";

const input: number[] = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const valorA: number = input[0]!;
const valorB: number = input[1]!;
const valorC: number = input[2]!;
const valorD: number = input[3]!;

const diferenca = ( valorA: number, valorB: number, valorC: number, valorD: number ): number => {
    const diferenca: number = valorA * valorB - valorC * valorD;
    return diferenca;
};

console.log(`DIFERENCA = ${diferenca(valorA, valorB, valorC, valorD)}`);