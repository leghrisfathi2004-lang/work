const prompt = require("prompt-sync")();
let tab = [];

for (let i = 0; i < 3; i++) {
    tab[i] = prompt(`entre le ${i+1} chaine de caractere:`);
}

let elem = prompt("entre une chaine de caractere a chercher:");
found = false;
k=0;

for (let j = 0; j <3; j++) {
    if (tab[j].includes(elem)) {
        found = true;
        k=j+1;
        break;
    }
}

if(found == true){
    console.log(`element ${elem} a été trouvée à la position  ${k}`);
}else{ 
    console.log(`element ${elem} n exist pas`);
}