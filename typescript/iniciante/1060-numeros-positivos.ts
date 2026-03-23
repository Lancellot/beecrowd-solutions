import * as fs from "node:fs";

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let positivos : number = 0;

for (let i = 0; i < input.length; i++) {
    input[i] > 0 ? positivos++ : null;
}

console.log(`${positivos} valores positivos`);
