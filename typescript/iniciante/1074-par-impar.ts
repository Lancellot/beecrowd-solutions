import * as fs from "node:fs";

const input = fs.readFileSync(0, "utf8").trim().split("\n");

const n = Number(input[0]);

const parOuImpar = (num: number): string => {
    if (num === 0) return "NULL";

    if (num % 2 === 0) {
        return num > 0 ? "EVEN POSITIVE" : "EVEN NEGATIVE";
    }

    return num > 0 ? "ODD POSITIVE" : "ODD NEGATIVE";
};

for (let i = 1; i <= n; i++) {
    const valor = Number(input[i]);
    console.log(parOuImpar(valor));
}