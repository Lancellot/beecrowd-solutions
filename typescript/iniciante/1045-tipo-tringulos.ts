import * as fs from "node:fs";

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const a: number = input[0]!;
const b: number = input[1]!;
const c: number = input[2]!;

const triangulo = (a: number, b: number, c: number): string => {
    
    const sorted = [a, b, c].sort((x, y) => y - x) as [number, number, number];
    const [A, B, C] = sorted;

    const resultados: string[] = [];

    if (A >= B + C) {
        return "NAO FORMA TRIANGULO";
    }


    if (A ** 2 === B ** 2 + C ** 2) {
        resultados.push("TRIANGULO RETANGULO");
    }

    if (A ** 2 > B ** 2 + C ** 2) {
        resultados.push("TRIANGULO OBTUSANGULO");
    }

    if (A ** 2 < B ** 2 + C ** 2) {
        resultados.push("TRIANGULO ACUTANGULO");
    }

    if (A === B && B === C) {
        resultados.push("TRIANGULO EQUILATERO");
    } else if (A === B || A === C || B === C) {
        resultados.push("TRIANGULO ISOSCELES");
    }

    return resultados.join("\n");
};

console.log(triangulo(a, b, c));