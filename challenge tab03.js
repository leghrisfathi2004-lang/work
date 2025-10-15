const prompt = require ("prompt-sync")();
let tab = [];

for (let i = 0; i < 8; i++) {
    tab[i]= Number(prompt(`entre le ${i+1} nomber:`));
}

let elem = Number(prompt("entre un nomber a chercher:"));
found = false;
k=0;

for (let j = 0; j <8; j++) {
    if (tab[j] === elem) {
        found = true;
        k=j+1;
        break;
    }
}
if(found = true){
    console.log(`element ${elem} dans lindex ${k}`);
}else{
    console.log(`element ${elem} n'existe pas`);
}
