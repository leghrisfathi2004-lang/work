const prompt = require("prompt-sync")();
let tab = [];
let max= 0;
let min = 0;

for (let i=0; i<7; i++){
    tab[i] = Number(prompt(`entre le ${i+1} nombre:`));
    if(tab[i]>max){
        max = tab[i];
    }else if(tab[i]<min){
        min = tab[i];
    }
}
console.log(`max est : ${max} et min est : ${min}`);