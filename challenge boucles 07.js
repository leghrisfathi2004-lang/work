const prompt = require("prompt-sync")();

let somme = 0;
for (let i = 0; i < 10; i++) {
    let nombre = Number( prompt("entre un nombre: ") );
    if (nombre < 0) {
        console.log("le nombre est negatif");
    } else {
        somme += nombre;
    }
}
console.log(`la somme des nombres positifs est: ${somme}`);