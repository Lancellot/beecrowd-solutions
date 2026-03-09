import * as fs from "node:fs";

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const startHour: number = input[0]!;
const startMinute: number = input[1]!;
const endHour: number = input[2]!;
const endMinute: number = input[3]!;

const calculateGameDuration = (startH: number, startM: number, endH: number, endM: number): string => {

    const startTotal = startH * 60 + startM;
    const endTotal = endH * 60 + endM;

    let duration = endTotal - startTotal;

    if (duration <= 0) {
        duration += 24 * 60;
    }

    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    return `O JOGO DUROU ${hours} HORA(S) E ${minutes} MINUTO(S)`;
};

console.log(calculateGameDuration(startHour, startMinute, endHour, endMinute));