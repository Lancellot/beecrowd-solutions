import * as fs from "node:fs";

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

const diaInicio = Number(input[1]);
const horaInicio = Number(input[2]);
const minutoInicio = Number(input[4]);
const segundoInicio = Number(input[6]);

const diaFim = Number(input[8]);
const horaFim = Number(input[9]);
const minutoFim = Number(input[11]);
const segundoFim = Number(input[13]);

const inicio =
  diaInicio * 24 * 60 * 60 +
  horaInicio * 60 * 60 +
  minutoInicio * 60 +
  segundoInicio;

const fim =
  diaFim * 24 * 60 * 60 +
  horaFim * 60 * 60 +
  minutoFim * 60 +
  segundoFim;


let duracao = fim - inicio;


const dias = Math.floor(duracao / (24 * 60 * 60));
duracao %= 24 * 60 * 60;

const horas = Math.floor(duracao / (60 * 60));
duracao %= 60 * 60;

const minutos = Math.floor(duracao / 60);
const segundos = duracao % 60;


console.log(`${dias} dia(s)`);
console.log(`${horas} hora(s)`);
console.log(`${minutos} minuto(s)`);
console.log(`${segundos} segundo(s)`);