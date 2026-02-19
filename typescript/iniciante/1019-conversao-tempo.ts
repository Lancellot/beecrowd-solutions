import * as fs from 'fs';

const input: number[] = fs.readFileSync(0, 'utf8')
    .trim()
    .split(/\s+/)
    .map(Number);

const valorEntrada: number = input[0]!;

const conversaoTempo = (totalSegundos: number): string => {
    const horas: number = Math.floor(totalSegundos / 3600);
    const minutos: number = Math.floor((totalSegundos % 3600) / 60);
    const segundos: number = totalSegundos % 60;

    return `${horas}:${minutos}:${segundos}`;
};

console.log(conversaoTempo(valorEntrada));