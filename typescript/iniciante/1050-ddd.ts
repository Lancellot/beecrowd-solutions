import * as fs from "node:fs";

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const ddd: number = input[0]!;

const identificarDDD = (code: number): string => {
    switch (code) {
        case 61:
            return "Brasilia";
        case 71:
            return "Salvador";
        case 11:
            return "Sao Paulo";
        case 21:
            return "Rio de Janeiro";
        case 31:
            return "Belo Horizonte";
        case 41:
            return "Curitiba";
        case 51:
            return "Porto Alegre";
        case 61:
            return "Brasilia";
        case 71:
            return "Salvador";
        case 32:
            return "Juiz de Fora";
        case 19:
            return "Campinas";
        case 27:
            return "Vitoria";
        default:
            return "DDD nao cadastrado";
    }
};

console.log(identificarDDD(ddd));