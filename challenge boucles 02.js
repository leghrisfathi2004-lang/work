const prompt = require("prompt-sync")();

let nmbr = prompt("entre un nombre: ");

flg = true;

for (let i = 2; i < nmbr/2; i++) {
    if (nmbr % i === 0) {
        flg = false;
        break;
}
}

if(flg == true){ 
    console.log(`le nmbre ${nmbr}: est premier`);
}else{
    console.log(`le nmbre ${nmbr}: pas premier`)
}   

