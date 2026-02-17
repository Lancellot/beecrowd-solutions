import * as fs from "node:fs";

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const num1 = input[0]!;
const num2 = input[1]!;

const soma = (num1: number, num2: number): number => {
    return num1 + num2;
};

console.log(`x = ${soma(num1, num2)}`);