const prompt = require("prompt-sync")();

function produitTableau(tab, n){
    let prod=1;
    for(let i=0; i<n; i++){
        prod *= tab[i];
    }
    return prod;
}

let tab=[];
let n = Number(prompt("entre la taille de votre tableau: "));

for(let i=0; i<n; i++){
    tab[i] = Number(prompt(`entre la ${i+1} valeur: `));
}

console.log(`la resulta: ${produitTableau(tab, n)}`);