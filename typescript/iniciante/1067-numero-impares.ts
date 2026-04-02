import * as fs from "node:fs";

const input = fs.readFileSync(0, "utf8").trim();
const N = Number(input);

for (let i = 1; i <= N; i += 2) {
    console.log(i);
}