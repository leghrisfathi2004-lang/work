const prompt = require ("prompt-sync")();

function fusionner(tab1, n1, tab2, n2){
    let tab = [];
    let n = n1 + n2;
    let j=0;

    for(let i=0; i<n1; i++){
        tab[i] = tab1[i]
    }
    for(let i=n1; i<n; i++){
        tab[i] = tab2[j];
        j++;
    }

    //tab.push(...tab2) this working too
    return tab;
}

let tab1 = [];
let tab2 = [];

let n1 = Number(prompt("entre la taille de premier tableau: "));
for(let i = 0; i < n1; i++){
    tab1[i] = Number(prompt(`entre la ${i+1} valeur: `));
 }

 let n2 = Number(prompt("entre la taille de deuxieme tableau: "));
 for(let i = 0; i < n2; i++){
    tab2[i] = Number(prompt(`entre la ${i+1} valeur: `));
 }

 console.log(`la tableau fusionner est: ${fusionner(tab1, n1, tab2, n2)}`)
