const prompt = require ("prompt-sync")();

function  maxTableau(tab, n){
    let max = 0;
    for( i=0; i<n; i++){
        if(tab[i] > max){
            max = tab[i];
        }
        
    }
return max;
}

let n = Number(prompt("entre la taille de tablleau: "));
let tab=[];

for(let i=0; i<n; i++){
    tab[i] = Number(prompt(`entre la ${i+1}valeur:`));
}

console.log(`la max est:${maxTableau(tab, n)}`);