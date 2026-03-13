import * as fs from "node:fs";

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const salario: number = input[0]!;

const calcularImposto = (salario: number): string => {

    const imposto =  (salario <= 2000) ? "Isento" :
                    (salario <= 3000) ? `R$ ${((salario - 2000) * 0.08).toFixed(2)}` :
                    (salario <= 4500) ? `R$ ${(((salario - 3000) * 0.18) + (1000 * 0.08)).toFixed(2)}` :
                    `R$ ${(((salario - 4500) * 0.28) + (1500 * 0.18) + (1000 * 0.08)).toFixed(2)}`;
                    
    return imposto;
};

console.log(calcularImposto(salario));