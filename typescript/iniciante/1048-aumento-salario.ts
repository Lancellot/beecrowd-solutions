import * as fs from "node:fs";

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const valor: number = input[0]!;

const calculateNewSalary = (currentSalary: number): string => {
    let percentage: number;
    if (currentSalary >= 0 && currentSalary <= 400) {
        percentage = 15;
    } else if (currentSalary > 400 && currentSalary <= 800) {
        percentage = 12;
    } else if (currentSalary > 800 && currentSalary <= 1200) {
        percentage = 10;
    } else if (currentSalary > 1200 && currentSalary <= 2000) {
        percentage = 7;
    } else {
        percentage = 4;
    }

    const increase = currentSalary * (percentage / 100);
    const newSalary = currentSalary + increase;

    return `Novo salario: ${newSalary.toFixed(2)}\nReajuste ganho: ${increase.toFixed(2)}\nEm percentual: ${percentage} %`;
};

console.log(calculateNewSalary(valor));