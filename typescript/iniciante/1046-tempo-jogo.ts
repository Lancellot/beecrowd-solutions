import * as fs from "node:fs";

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const startHour: number = input[0]!;
const endHour: number = input[1]!;

const calculateGameDuration = (start: number, end: number): string => {  
    
    const duration: number = start < end ? end - start : 24 - start + end;
    return `O JOGO DUROU ${duration} HORA(S)`;
    
};

console.log(calculateGameDuration(startHour, endHour));