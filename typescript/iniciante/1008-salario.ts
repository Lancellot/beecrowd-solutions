import * as fs from "fs";

const input: number[] = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const numero: number = input[0]!;
const horas: number = input[1]!;
const valor: number = input[2]!;

const salario = (horas: number, valor: number): string => {
    const total: number = horas * valor;
    return `SALARY = U$ ${total.toFixed(2)}`;
};


console.log(`NUMBER = ${numero}`);
console.log(salario(horas, valor));