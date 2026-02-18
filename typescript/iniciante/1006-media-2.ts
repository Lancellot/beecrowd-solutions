import * as fs from "fs";

const input: number[] = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const notaA: number = input[0]!;
const notaB: number = input[1]!;
const notaC: number = input[2]!;

const media = (notaA: number, notaB: number, notaC: number): number => {
    const media: number = (notaA * 2 + notaB * 3 + notaC * 5) / 10;
    return media;
};

console.log(`MEDIA = ${media(notaA, notaB, notaC).toFixed(1)}`);