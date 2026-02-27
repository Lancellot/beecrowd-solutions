import * as fs from "node:fs";

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const x: number = input[0]!;
const y: number = input[1]!;

const coordenadas = (x: number, y: number): string => {

    if (!x && !y) return "Origem";
    if (!x) return "Eixo Y";
    if (!y) return "Eixo X";

    const quadrante = x > 0
        ? (y > 0 ? "Q1" : "Q4")
        : (y > 0 ? "Q2" : "Q3");

    return quadrante;

};

console.log(coordenadas(x, y));