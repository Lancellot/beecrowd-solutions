import * as fs from "node:fs";

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const numb: number = input[0]!;

const intervalo = (numb: number): string => {
    if (numb < 0 || numb > 100) {
        return "Fora de intervalo";
    } else if (numb <= 25) {
        return "Intervalo [0,25]";
    } else if (numb <= 50) {
        return "Intervalo (25,50]";
    } else if (numb <= 75) {
        return "Intervalo (50,75]";
    } else {
        return "Intervalo (75,100]";
    }
};

console.log(intervalo(numb));