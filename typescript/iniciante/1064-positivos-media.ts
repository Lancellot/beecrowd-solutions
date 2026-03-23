import * as fs from "node:fs";

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let positivos : number = 0;
let media : number = 0;

for (const n of input) {
  if (n > 0) {
    positivos++;
    media += n;
  }
}

media /= positivos;

console.log(`${positivos} valores positivos`);
console.log(media.toFixed(1));