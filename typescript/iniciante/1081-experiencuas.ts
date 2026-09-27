import * as fs from "node:fs";

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

interface ResExperiencia {
    total: number;
    totalC: number;
    totalR: number;
    totalS: number;
    porcentagemC: number;
    porcentagemR: number;
    porcentagemS: number;
}

function experiencias(dados: string[]): ResExperiencia {
    const n = Number(dados[0]);

    let totalC = 0;
    let totalR = 0;
    let totalS = 0;

    let indice = 1;

    for (let i = 0; i < n; i++) {
        const quantidade = Number(dados[indice]);
        const tipo = dados[indice + 1];

        if (tipo === "C") {
            totalC += quantidade;
        } else if (tipo === "R") {
            totalR += quantidade;
        } else if (tipo === "S") {
            totalS += quantidade;
        }

        indice += 2;
    }

    const total = totalC + totalR + totalS;

    return {
        total,
        totalC,
        totalR,
        totalS,
        porcentagemC: (totalC / total) * 100,
        porcentagemR: (totalR / total) * 100,
        porcentagemS: (totalS / total) * 100
    };
}

const resultado = experiencias(input);

console.log(`Total: ${resultado.total} cobaias`);
console.log(`Total de coelhos: ${resultado.totalC}`);
console.log(`Total de ratos: ${resultado.totalR}`);
console.log(`Total de sapos: ${resultado.totalS}`);
console.log(`Percentual de coelhos: ${resultado.porcentagemC.toFixed(2)} %`);
console.log(`Percentual de ratos: ${resultado.porcentagemR.toFixed(2)} %`);
console.log(`Percentual de sapos: ${resultado.porcentagemS.toFixed(2)} %`);