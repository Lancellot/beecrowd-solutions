import * as fs from "node:fs";

const input = fs.readFileSync(0, "utf8").trim().match(/-?\d+/g)?.map(Number) || [];

const entrada = input[0]!;


const intervalo = (): void => {
    let dentro: number[] = [];
    let fora: number[] = [];
    const valores = input.slice(0, entrada + 1);

    for (const numeros of valores) {
        if (numeros >= 10 && numeros <= 20) {
            dentro.push(numeros);
        } else {
            fora.push(numeros);
        }
    }

    console.log(`${dentro.length} in`);
    console.log(`${fora.length} out`);
}

intervalo();