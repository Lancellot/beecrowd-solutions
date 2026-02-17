import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const prodA = input[0]!;
const prodB = input[1]!;

const produto = (prodA: number, prodB: number) => {
    return prodA * prodB;
};

console.log(`PROD = ${produto(prodA, prodB)}`);