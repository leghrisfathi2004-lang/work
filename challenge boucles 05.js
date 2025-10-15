const prompt = require ("prompt-sync")();

let n = Number(prompt("entre un nombre: "));


for (let j = 2; j <= n; j++) {
    flage = true;
    for (let i = 2; i < j; i++) {
        if (j % i === 0) {
            flage = false;
            break;
        }
    }
    if (flage == true) {
            console.log(`le nmbre ${j}: est premier`);  
        }
    
}
    

