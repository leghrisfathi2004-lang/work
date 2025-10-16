const prompt = require ("prompt-sync")();

function motsLongs(tab, n, long){
    let tablong = [];
    let j=0;
    for(let i=0; i<n; i++){
        let l = tab[i].length
        if(l>long){
            //tablong[j]=tab[i]; j++;
            tablong.push(tab[i]);
        }
    }
    return tablong;
}
let tab = [];
let n = Number(prompt("entre la taille de tableau: "));
for(let i=0; i<n; i++){
    tab[i] = prompt("entre la mots:")
 }

 let long = Number(prompt("entre la longueur:"));

console.log(`les mots qui la taille > ${long} est : ${motsLongs(tab, n, long)}`);

