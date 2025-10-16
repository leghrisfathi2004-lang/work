const prompt = require("prompt-sync")();

function supprimerDoublons(tab, n){
    let tabs = [];
    let k=0;
    
    
    for( i=0; i<n; i++){
        let foi = 0;

        for(j=0; j<n; j++){
            if(tab[j] === tab[i]) foi++;
        }
        
        if(foi === 1) {
            tabs[k]=tab[i];
            k++;
        }
    }
    return tabs;
}


let n = Number(prompt("entre la taille de tablleau: "));
let tab=[];

for(let i=0; i<n; i++){
    tab[i] = Number(prompt(`entre la ${i+1}valeur:`));
}

console.log(`la nouvelle tableau sans répétés: ${supprimerDoublons(tab, n)}`);