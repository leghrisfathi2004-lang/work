const prompt = require("prompt-sync")();

 function doubler(tab, n){

    for(let i=0; i<n; i++){
        tab[i] *= 2
    }
    
    return tab;

 }

 let tab = [];
 let n = Number(prompt("entre la taille de tableau: "));

 for(let i = 0; i < n; i++){
    tab[i] = Number(prompt(`entre la ${i+1} valeur: `));
 }

console.log(`la double tableau est: ${doubler(tab, n)}`);