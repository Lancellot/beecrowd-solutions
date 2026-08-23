import * as fs from "node:fs";

const input = fs.readFileSync(0, "utf8").trim().split("\n");

const n = Number(input[0]);

const mediaPonderada = (valores: number[][]): number[] => {
    const resultados: number[] = [];

    for (let i = 0; i < n; i++) {
        const [a, b, c] = valores[i]!;
        const media = (a! * 2 + b! * 3 + c! * 5) / 10;

        resultados.push(media);
    }

    return resultados;
};

const valores: number[][] = input
    .slice(1)
    .map(linha => linha.split(" ").map(Number));

const medias = mediaPonderada(valores);

medias.forEach(media => console.log(media.toFixed(1)));