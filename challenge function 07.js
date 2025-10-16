const prompt = require("prompt-sync")();

 function moyenne(tab, n){
    let somme=0;
    let moyenne;

    for(let i=0; i<n; i++){
        somme += tab[i];
    }
    moyenne = somme / n;
    return moyenne;

 }

 let tab = [];
 let n = Number(prompt("entre la taille de tableau: "));

 for(let i = 0; i < n; i++){
    tab[i] = Number(prompt(`entre la ${i+1} valeur: `));
 }

console.log(`la moyenne est: ${moyenne(tab, n)}`);