const prompt = require("prompt-sync")();

function filtrerPairs(tab, n){
    let tabpair = [];
    let j=0;

    for(i=0; i<n; i++){
        if(tab[i] % 2 == 0){
            tabpair[j]=tab[i];
            j++;

        }
    }
    return tabpair;
}

let tab=[];
let n = Number(prompt("entre la taille de votre tableau: "));

for(let i=0; i<n; i++){
    tab[i] = Number(prompt(`entre la ${i+1} valeur: `));
}

console.log(`les pair elements: ${filtrerPairs(tab, n)}`);