const identificaCha = (cha: number, votos: number[]): number => {
    
    let acerto: number = 0;
    for (let voto of votos) {
        if (voto === cha) {
            acerto++;
        }
    }
    return acerto;
};

const votos: number[] = [1, 3, 3, 4, 5 ];
const cha: number = 3;

console.log(identificaCha(cha, votos));