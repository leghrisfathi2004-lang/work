const prompt = require ("prompt-sync")();

let base = Number( prompt("entre un nombre: ") );
let exposant = Number( prompt("entre l`exposant: ") );
 resultat = 1;

while(exposant != 0){
    resultat *= base;
    exposant--;
}
console.log(`le resultat est: ${resultat}`);