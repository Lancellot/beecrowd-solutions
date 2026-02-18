import * as fs from 'fs';

const input: number[] = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

const valorA: number = input[0]!;
const valorB: number = input[1]!;
const valorC: number = input[2]!;


type Areas = {
    triangulo: number;
    circulo: number;
    trapezio: number;
    quadrado: number;
    retangulo: number;
};

const area = (valorA: number, valorB: number, valorC: number): Areas => {
    const areaTriangulo: number = (valorA * valorC) / 2;
    const areaCirculo: number = 3.14159 * Math.pow(valorC, 2);
    const areaTrapezio: number = ((valorA + valorB) * valorC) / 2;
    const areaQuadrado: number = Math.pow(valorB, 2);
    const areaRetangulo: number = valorA * valorB;

    return {
        triangulo: areaTriangulo,
        circulo: areaCirculo,
        trapezio: areaTrapezio,
        quadrado: areaQuadrado,
        retangulo: areaRetangulo,
    };
};

const resultado = area(valorA, valorB, valorC);

console.log(`TRIANGULO: ${resultado.triangulo.toFixed(3)}`);
console.log(`CIRCULO: ${resultado.circulo.toFixed(3)}`);
console.log(`TRAPEZIO: ${resultado.trapezio.toFixed(3)}`);
console.log(`QUADRADO: ${resultado.quadrado.toFixed(3)}`);
console.log(`RETANGULO: ${resultado.retangulo.toFixed(3)}`);