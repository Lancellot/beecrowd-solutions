import * as fs from "fs";

const input: number[] = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const notaA: number = input[0]!;
const notaB: number = input[1]!;

const media  = ( notaA: number, notaB: number): number => {
    const media: number= (notaA * 3.5 + notaB * 7.5) / 11;
    return media;
};

console.log(`MEDIA = ${media(notaA, notaB).toFixed(5)}`);