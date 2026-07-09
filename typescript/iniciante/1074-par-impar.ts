import * as fs from "node:fs";

const input = fs.readFileSync(0, "utf8").trim();

const entrada = Number(input);

const parOuImpar = (num: number): string => {

    if (num === 0) return "NULL";

    if (num % 2 === 0) {
        return num > 0 ? "EVEN POSITIVE" : "EVEN NEGATIVE";
    }

    return num > 0 ? "ODD POSITIVE" : "ODD NEGATIVE";
}

console.log(parOuImpar(entrada));