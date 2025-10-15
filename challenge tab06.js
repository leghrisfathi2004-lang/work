const prompt = require("prompt-sync")();
let tab = [];
let tabc=[];
let n = Number(prompt("entre la taille:"));

for (let i=0; i<n; i++){
    tab[i] = Number(prompt(`entre le ${i+1} nombre:`));
}

for(let j=0; j<n; j++){
    tabc[j]= tab[j]*tab[j];
}

console.log(tabc);

