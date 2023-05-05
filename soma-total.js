const numeros = [2, 3, 4, 6];

// seu codigo aqui

let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    // Será executado para i de 0 até 7 | 8 não será mais executado
    soma = soma + numeros[i];
    // soma += numeros[i]
}

console.log(soma);