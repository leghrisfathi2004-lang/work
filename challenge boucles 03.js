const prompt = require("prompt-sync")();;

let nmbr = Number( prompt(" combein de nombre dans la serie:") );

let temp = 0;
let somme = 0;
let max = 0;

for(let i=0; i<nmbr; i++){
    let serie = Number( prompt("entre le nombre dans serie:"));

    if( serie > temp ) { max = serie; }
    else{ max = temp; }

    somme += serie;

    temp = serie;
}
console.log(`la somme de la serie est: ${somme}`);
console.log(`le plus grand nombre de la serie est: ${max}`);