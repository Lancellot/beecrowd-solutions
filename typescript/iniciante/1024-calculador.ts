import * as fs from "node:fs";

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

const valor1: number = Number(input[0]);
const valor2: number = Number(input[1]);
const operacao: string = input[2]!;

const calculadora = (valor1: number, valor2: number, operacao: string): string => {

    const op = operacao.toUpperCase();

    const resultado =
        op === "SOMA" ? valor1 + valor2 :
        op === "SUBTRACAO" ? valor1 - valor2 :
        op === "MULTIPLICACAO" ? valor1 * valor2 :
        op === "DIVISAO"
            ? (valor2 !== 0 ? (valor1 / valor2).toFixed(2) : "DIVISAO POR ZERO")
            : "OPERACAO INVALIDA";

    return resultado.toString();
};

console.log(calculadora(valor1, valor2, operacao));