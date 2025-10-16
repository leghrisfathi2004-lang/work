const promp = require ("prompt-sync")();

let nmbr = Number( promp("entre nombre de lignes: ") );
for(let i=0; i<nmbr; i++){
    let lines = " "
    for(let j=1; j<=nmbr-i; j++){
        lines += " ";
    }
    for (let k=1; k<=2*i+1; k++){
        lines += "*";
    }
 console.log(lines);
}

    

