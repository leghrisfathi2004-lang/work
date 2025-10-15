const prompt = require("prompt-sync")();

let tab = [];
let somme = 0;
let moyenne = 0;
 for (let i = 0; i < 10; i++) {
    tab[i] = Number(prompt(`entre le ${i} nomber:`))
    somme += tab[i];
 }
 moyenne = somme / 10;
 console.log(`la somme est : ${somme} et la moyenne est : ${moyenne}`);