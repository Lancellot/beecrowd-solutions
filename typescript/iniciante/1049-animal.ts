import * as fs from "node:fs";

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

const a: string = input[0]!;
const b: string = input[1]!;
const c: string = input[2]!;

const indentificarAnimal = (part1: string, part2: string, part3: string): string => {  

    if (part1 === "vertebrado") {
        if (part2 === "ave") {
            if (part3 === "carnivoro") {
                return "aguia";
            } else {
                return "pomba";
            }
        } else {
            if (part3 === "onivoro") {
                return "homem";
            } else {
                return "vaca";
            }
        }
    }

    if (part1 === "invertebrado") {
        if (part2 === "inseto") {
            if (part3 === "hematofago") {
                return "pulga";
            } else {
                return "lagarta";
            }
        } else {
            if (part3 === "hematofago") {
                return "sanguessuga";
            } else {
                return "minhoca";
            }
        }
    }

    return "Animal desconhecido";
};

console.log(indentificarAnimal(a, b, c));