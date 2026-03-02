import * as fs from "node:fs";

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const a: number = input[0]!;
const b: number = input[1]!;
const c: number = input[2]!;

const triangulo = (a: number, b: number, c: number): string => {

    const isTriangulo = (a < b + c) && (b < a + c) && (c < a + b);
    return isTriangulo ? "Perimetro = " + (a + b + c).toFixed(1) : "Area = " + ((a + b) * c / 2).toFixed(1);
}

console.log(triangulo(a, b, c));