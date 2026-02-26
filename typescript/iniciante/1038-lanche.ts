import * as fs from "node:fs";

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const cod: number = input[0]!;
const quant: number = input[1]!;

const lanche = (cod: number, quant: number): string => {
    
    let total: number;
    switch (cod) {
        case 1:
            total = 4.00 * quant;
            break;
        case 2:
            total = 4.50 * quant;
            break;
        case 3:
            total = 5.00 * quant;
            break;
        case 4:
            total = 2.00 * quant;
            break;
        case 5:
            total = 1.50 * quant;
            break;
        default:
            throw new Error("Código inválido");
    }
    return `Total: R$ ${total.toFixed(2)}`;
};

console.log(lanche(cod, quant));