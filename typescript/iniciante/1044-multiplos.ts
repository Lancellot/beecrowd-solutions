import * as fs from "node:fs";

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const a: number = input[0]!;
const b: number = input[1]!;

const multiplos = (a: number, b: number): string => {

    const aMultiplosB = a % b === 0;
    const bMultiplosA = b % a === 0;

    const resultado = aMultiplosB || bMultiplosA ? "Sao Multiplos" : "Nao sao Multiplos";
    return resultado;
}

console.log(multiplos(a, b));