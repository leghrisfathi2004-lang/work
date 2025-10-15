const prompt = require("prompt-sync")();
let tab = [];
let tabinv = [];
let i = 0;
while (i < 5) {
    tab[i] = prompt(`Enter ${i} number: `);
    i++;
}
for (let j = 4; j >= 0; j--) {
    tabinv[4-j]= tab[j];
}
console.log(tabinv);