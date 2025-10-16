const prompt = require ("prompt-sync")();

 function tableMultiplication(n){
    let tab = [];
    let i=1;
    while(i<=10){
        //tab[i-1] = n*i;
        tab.push(n*i);
        i++;
    }
    return tab;
 }

 let n = Number(prompt("entre un number: "));
 console.log(`la tableau de multip: ${tableMultiplication(n)}`);
