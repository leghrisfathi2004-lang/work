const prompt = require("prompt-sync")();

function inverserTableau(tab, n){
    let tabinve = [];
    for(i=0; i<n; i++){
        tabinve[n-i]=tab[i];
    }
    return tabinve;
}

let n = Number(prompt("entre la taille de tablleau: "));
let tab=[];

for(let i=0; i<n; i++){
    tab[i] = Number(prompt(`entre la ${i+1}valeur:`));
}

console.log(`l inverse est:${inverserTableau(tab, n)}`);