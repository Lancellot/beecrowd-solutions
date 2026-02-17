import * as fs from "node:fs";

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const raio = input[0]!;

const areaCirculo = (raio: number): number => {
    const pi = 3.14159;
    return pi * raio * raio;    
};

console.log(`A=${areaCirculo(raio).toFixed(4)}`);