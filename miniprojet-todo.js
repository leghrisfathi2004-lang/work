const prompt = require ("prompt-sync")();

const tache = {
    id: [1],
    titre: [1],
    description: [1],
    isdone: [1]
}

function afficherAll(){
    let n = tache.id.length;
    for (let i=0; i<n; i++){
        Afficher(i);
    }
}

function Afficher(i){
    console.log(`id:${tache.id[i]} ___________________`);
    console.log(`id:${tache.id[i]}, titre: ${tache.titre[i]}\ndescribtion: ${tache.description[i]}`);
    if (tache.isdone[i] == true) console.log("statut: terminee");
    else console.log("statut: en attente");
    console.log("______________________");
}

function ajouter(){
    n = tache.id.length
    let tit = prompt(`ajouter unique titre pour nouvelle tache n${n+1}: `)
    while(titreexist(tit) == false){
        tit = prompt(`${tit} il exist deja, entre diffrent titre:`);
    }

    let dis = prompt(`ajouter discription:`)
    tache.id.push(n+1);
    tache.titre.push(tit);
    tache.description.push(dis);
    tache.isdone.push(false);
    console.log(`----ajouter success!! ----`)
}

function titreexist(tit){
    let n = tache.titre.length;
    for(let i=0; i<n; i++){
        if(tache.titre[i] == tit) 
            return false;
    }
    return true;
}

function rechercher(){
    flage = false;
    let pos = 0;
    let tit ;
    do{
        tit = prompt(`entre la titre de la tache :`);

        for(let i=0; i<tache.titre.length; i++){
            if(tit == tache.titre[i]){
                flage = true;
                pos = i;
                break;
            }
        }
    }while(flage == false)
    return pos;
}

function modifier(d){
    Afficher(d);
    let dis = prompt("entre nouvelle dicrioption: ");
    tache.description[d] = dis;
    console.log("+++ la tache apres mise a jour la statut +++");
    Afficher(d);
}

function supprimer(d){
    let n = tache.id.length;
    for(let i = d; i<n; i++){
        tache.id[i] = tache.id[i+1];
        tache.description[i] = tache.description[i+1];
        tache.titre[i] = tache.titre[i+1];
        tache.isdone[i] = tache.isdone[i+1];
    }
    tache.id.pop();
    tache.description.pop();
    tache.titre.pop();
    tache.isdone.pop();
    console.log(`---tache suppreme success!!---`)
}

function statut(i){
    if(tache.isdone[i] == false){
        tache.isdone[i] = true;
    }else{
        tache.isdone[i] = false;
    }
    console.log("+++ la tache apres mise a jour la statut +++");
    Afficher(i);
}

function tachetermine(){

    console.log(`termine -----> 1   en attente -----> 2`);
    let stt =Number( prompt(`votre reponde:`));
    let flage;
    switch(stt){
        case 1:
            flage = true;
            break;
        case 2:
            flage = false;
            break;
        default:
            while(stt != 1 && stt != 2){
                stt =Number( prompt(`entre valide number:`));
            }
            break;
    }
    let n = tache.isdone.length
    for(let i = 0; i < n; i++){
        if(tache.isdone[i] == flage) Afficher(i);
    }
}

function menubar(){
    let c;

        console.log(`====== To-Do List ======\n1. Afficher les tâches\n2. Ajouter   une tâche\n3. Rechercher une tâche\n4. Modifier une tâche\n5. Supprimer une tâche\n6. Modifier la statut d une tâche\n7. Afficher tâches (terminées/en attente)\n0. Quitte\n========================`);

        c = Number( prompt(`votre reponde: `));    
     return c;
}

let choi;
do{
    choi= menubar();
    switch(choi){
        case 1:
            console.log(`\n---------affichage tous les taches----------\n`)
            afficherAll();
            break;
        case 2:
            console.log(`\n---------ajouter un tache---------\n`)
            ajouter();
            break;
        case 3:
            console.log(`\n---------rechercher un tache---------\n`)
            Afficher(rechercher());
            break;
        case 4:
            console.log(`\n---------modifie un tache---------\n`)
            modifier(rechercher());
            break;
        case 5:
            console.log(`\n---------suppreme un tache---------\n`)
            supprimer(rechercher());
            break;
        case 6:
            console.log(`\n---------modifie statut---------\n`)
            statut(rechercher());
            break;
        case 7:
            console.log(`\n---------affichage par statut---------\n`)
            tachetermine();
            break;
        default:
            break;
    }
}while(choi != 0);
console.log('good bye!');