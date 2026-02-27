import * as fs from "node:fs";

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const a: number = input[0]!;
const b: number = input[1]!;
const c: number = input[2]!;

const sortSimples = (a: number, b: number, c: number): string => {

    const original = [a, b, c].join("\n");
    const sorted = [a, b, c].sort((x, y) => x - y);

    return `${sorted.join("\n")}\n\n${original}`;
}
console.log(sortSimples(a, b, c));