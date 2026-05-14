import * as fs from 'node:fs';

const input = fs.readFileSync(0, "utf8").trim().match(/-?\d+/g)?.map(Number) || [];

const entrada = input[0]!;

const quadradoPares = (num: number): void => {
    for (let i = 2; i <= num; i += 2) {
        console.log(`${i}^2 = ${i * i}`);
    }
}

quadradoPares(entrada);