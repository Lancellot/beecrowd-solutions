import * as fs from "node:fs";

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const n1: number = input[0]!;
const n2: number = input[1]!;
const n3: number = input[2]!;
const n4: number = input[3]!;

const media = (n1: number, n2: number, n3: number, n4: number): string => {
    const mediaPonderada: number = (n1 * 2 + n2 * 3 + n3 * 4 + n4) / 10;
    const mediaArredondada: number = parseFloat(mediaPonderada.toFixed(1));

    let resultado: string = `Media: ${mediaArredondada.toFixed(1)}\n`;
    
    if (mediaArredondada >= 7.0) {
        resultado += "Aluno aprovado.";
    } else if (mediaArredondada < 5.0) {
        resultado += "Aluno reprovado.";
    } else {
        resultado += "Aluno em exame.\n";
        const exame: number = input[4]!;
        resultado += `Nota do exame: ${exame.toFixed(1)}\n`;
        const mediaFinal: number = parseFloat(((mediaPonderada + exame) / 2).toFixed(1));
        if (mediaFinal >= 5.0) {
            resultado += "Aluno aprovado.";
        } else {
            resultado += "Aluno reprovado.";
        }
        resultado += `\nMedia final: ${mediaFinal.toFixed(1)}`;
    }
    return resultado;
};

console.log(media(n1, n2, n3, n4));