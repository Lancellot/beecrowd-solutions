import * as fs from "node:fs";

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const mes: number = input[0]!;

const meses: string[] = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const nomeDoMes = (mes: number): string => {
    const nome = meses[mes - 1];
    return nome ? nome : "Mês inválido";
};

console.log(nomeDoMes(mes));