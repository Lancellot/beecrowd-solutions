import * as fs from "node:fs";

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const entrada = input;

const verificador = (numeros: number[]): string => {
    let pares: number = 0;

    for (const n of numeros) {
        if (n % 2 === 0) {
            pares++;
        }
    }

    return `${pares} valores pares`;
}

console.log(verificador(entrada));