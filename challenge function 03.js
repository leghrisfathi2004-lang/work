const prompt = require("prompt-sync")();

function compterOccurrences(tab, valeur, n){
    let foi =0;
    for( i=0; i<n; i++){
        if(tab[i] === valeur){
            foi++;
        }
    }
    return foi;
}

let n = Number(prompt("entre la taille de tablleau: "));
let tab=[];

for(let i=0; i<n; i++){
    tab[i] = Number(prompt(`entre la ${i+1}valeur:`));
}
let val = Number(prompt("entre la valeur: "));

console.log(`la valeur repete :${compterOccurrences(tab, val, n)} fois`);