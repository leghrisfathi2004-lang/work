//function voyelles(){
    const prompt = require ("prompt-sync") ();
    let char = prompt("Entrer une chaîne :");
    let k=0;
    let n=char.length;
   
    for(let i=0; i < n; i++){
        if(char[i] == 'a' || char[i] == 'e' || char[i] == 'i' || char[i] == 'o' || char[i] == 'u'){ 
            k=k+1;  
        }
    }
    console.log(`Nombre de voyelles : ${k}`);

//}