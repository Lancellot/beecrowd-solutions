import * as fs from "node:fs";

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const entrada = input;

const verificador = (numeros: number[]): string => {
    let pares: number = 0;
    let impares: number = 0;
    let positivos: number = 0;
    let negativos: number = 0;

    for (const n of numeros) {
        if (n % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
        if (n > 0) {    
            positivos++;    
        } else if (n < 0) {
            negativos++;
        }
    }

    return `${pares} valor(es) par(es)\n${impares} valor(es) impar(es)\n${positivos} valor(es) positivo(s)\n${negativos} valor(es) negativo(s)`;
}

console.log(verificador(entrada));