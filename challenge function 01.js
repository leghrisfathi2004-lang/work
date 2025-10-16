const prompt = require("prompt-sync")();

function sommeTableau(tab, n){
    let somme=0;
    for(let i=0; i<n; i++){
        somme += tab[i];
    }
    return somme;
}

let n = Number(prompt("entre la taille de tablleau: "));
let tab=[];

for(let i=0; i<n; i++){
    tab[i] = Number(prompt(`entre la ${i+1}valeur:`));
}

console.log(`la somme est:${sommeTableau(tab, n)}`);
