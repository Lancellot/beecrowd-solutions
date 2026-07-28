import * as fs from "node:fs";

const input = fs.readFileSync(0, "utf8").trim().split("\n");

const n = Number(input[0]);

const tabuada = (num: number): void => {

    for (let i = 1; i <= 10; i++) {
        const resultado = num * i;
        console.log(`${i} x ${num} = ${resultado}`);
    }

};

tabuada(n);