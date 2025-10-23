const prompt = require ("prompt-sync")();

const livres = {
    id_livre: [1,2,3,4],
    titre: ["livre1","livre2","livre3","livre4"],
    auteur: ["ateur1","ateur2","ateur3","ateur4"],
    annee: [2001,2002,2003,2004],
    disponible: [false,true,true,false]
}

const abonne = {
    id_abonne: [1,2,3,4],
    nom: ["nom1","nom2","nom3","nom4"],
    prenome: ["prenom1","prenom2","prenom3","prenom4"],
    email: ["email1","email2","email3","email4"]
}

const emprunts = {
    id_abonne: [1,2],
    id_livre: [1,4],
    date: [15, 65]
}
//les operation sur les livres
function ajouter_lv(){
    let n = Number(prompt(`Combien de livres veux-tu ajouter:`))
    let l = livres.id_livre.length;
    let tit ;
    let aut;
    let an;

    for( let i = 0; i < n; i++){
        console.log(`____entre les donnes de ${i+1} livre:____`);

        l += 1;
        livres.id_livre.push(l);

        tit = prompt(`entre le titre: `);
        livres.titre.push(tit);

        aut = prompt(`entre l auteur: `);
        livres.auteur.push(aut);

        an = prompt(`entre l annee de publication: `);
        livres.annee.push(an);
        livres.disponible.push(true);
    }
    console.log(`____livres ajoute success____`);
}

function trier(){
    let t;
    let choi;
    let n = livres.titre.length;

    for(let i = 0; i < n; i++){
        for(let j = 0; j<n; j++){
            t = livres.titre[i].localeCompare(livres.titre[j]);
            if((i>j && t == -1)||(i<j && t == 1)){
                swap(livres.titre,i,j);
                swap(livres.id_livre,i,j);
                swap(livres.auteur,i,j);
                swap(livres.annee,i,j);
            }
        }
    }
    console.log(`trier ascendant --> 1     trier descendant --> 2`);
    choi = Number(prompt(`entre votre choi: `));

    switch(choi){
        case 1://ascendant
            for(let i=0; i<n; i++)
                affiche_lv(i);
            break
        case 2://descendant
            for(let i=n-1; i>=0; i--) affiche_lv(i);
            break;
        default:
            while(choi != 1 && choi != 2) 
                choi = Number(prompt(`invalid, entre 1 ou 2: `));
            break;
    }
}
//follow trier
function swap(tab, i, j){
    let temp;
    temp = tab[i];
    tab[i] = tab[j];
    tab[j] = temp
    return tab;
}

function trier_anne(){
    let tab = livres.annee;
    let n = tab.length;

    for(let i = 0; i < n; i++){
        for(let j = 0; j<n; j++){
            if((i > j && tab[i] < tab[j])||(i < j && tab[i] > tab[j])){
                temp = tab[i];
                tab[i] = tab[j];
                tab[j] = temp;
            }
        }
    }
    for(let i=0;i<n; i++) affiche_lv(i);
}

function affiche_lv(i){
    let dis;
    if(livres.disponible[i] == true) dis = "disponible";
    else dis = "indisponible";

    console.log(`==livre id: ${livres.id_livre[i]}==========`);
    console.log(`titre: ${livres.titre[i]}\nAuteur: ${livres.auteur[i]}\nanne de publication: ${livres.annee[i]}       ${dis}\n`);
}

function affiche_disponible(){
    let n = livres.disponible.length;
    for(let i=0; i<n; i++){
        if(livres.disponible[i] == true) affiche_lv(i);
    }
}

function cherche_lv(){
    let id = Number(prompt(`entre id de livre pour cherche: `));
    let n = livres.id_livre.length;
    let flage = false;
    let pos = 0;
    for(let i = 0; i<n; i++){
        if(livres.id_livre[i] == id) {
            flage = true;
            pos = i;
        }
    }
    if(flage == true) return pos;
    else console.log(`cette id n exist pas.`);
    return undefined;
}

//les operations sur les abonnes
function ajouter_ab(){
    let n = abonne.id_abonne.length;
    let nom ;
    let prenom;
    let email;

    console.log(`____entre les donnes de ${n+1} abonne:____`);
    abonne.id_abonne.push(n+1);

    nom = prompt(`entre le nom d abonne: `);
    abonne.nom.push(nom);

    prenom = prompt(`entre l prenom d abonne: `);
    abonne.prenome.push(prenom);

    email = prompt(`entre l email d abonne: `);
    abonne.email.push(email);
    
    console.log(`____abonne ajoute success____`);
}

function cherche_ab(){
    let id = Number(prompt(`entre id de abonne pour cherche: `));
    let n = abonne.id_abonne.length;
    let flage = false;
    let pos = 0;
    for(let i = 0; i<n; i++){
        if(abonne.id_abonne[i] == id) {
            flage = true;
            pos = i;
        }
    }
    if(flage == true) return pos;
    else console.log(`cette id n exist pas.`);
    return undefined;

}

function affiche_ab(i){
    console.log(`==abonne id: ${abonne.id_abonne[i]}==========`);
    console.log(`nom complet: ${abonne.nom[i]} ${abonne.prenome[i]}\nemail: ${abonne.email[i]}\n`);
}
//les operations sur les emprunts

function ajoute_em(){
    console.log(`Pour emprunter un livre donne les informations suivantes :`)
    let id_ab;
    let id_lv;

    do{
        id_ab = cherche_ab();
    }while(id_ab == undefined)
    emprunts.id_abonne.push(id_ab);
    
    do{
        id_lv = cherche_lv();
    }while(id_lv == undefined)
    if(livres.disponible[id_lv] == false) return console.log(`Livre deja emprunte`);

    livres.disponible[id_lv] = false;
    emprunts.id_livre.push(id_lv);
    
    let d = prompt(`la date d emprunt(anne-moi-jour): `);
    emprunts.date.push(d);
    console.log(`=====emprunt success=====`);
}

function affiche_em(i){
    let rt;
    if(livres.disponible[i] == true) rt = "oui";
    else rt = "non";
    console.log(`==la date: ${emprunts.date[i]}==========`);
    console.log(`id d abonne: ${emprunts.id_abonne[i]}\nid de livre: ${emprunts.id_livre[i]}`);
    console.log(`retour: ${rt}\n`);
}

function retour_em(){
    let flage = false;
    let id_lv = Number(prompt(`entre id de livre: `));
    let n = emprunts.id_livre.length;

    for(let i = 0; i<n; i++){
        if(emprunts.id_livre[i] == id_lv) flage = true;
    }
    while(flage == false) id_lv = Number(prompt(`invalid, entre correct id: `));

    if(livres.disponible[id_lv-1] == true) return console.log(`cette livre n emprunt pas`);
    else livres.disponible[id_lv-1] = true;
    console.log(`=====retour success=====`);
}

function menu(){
    console.log(`__________bibliothique__________`);
    console.log(`managment les livres:--------\najouter un livre--> 1\naffiche les livres--> 2\nchercher un livre--> 3\n`);
    console.log(`managment les abonnees:--------\najouter un abonne--> 4\naffiche les abonnes--> 5\nchercher un abonne--> 6\n`);
    console.log(`managment les empruntes:--------\najouter un empruntes--> 7\naffiche les empruntes--> 8\nanuller un emprunts--> 9\nquite la bibliothique--> 0`);
    let choi = Number(prompt(`votre reponse: `));
    return choi;
}

let choi;
let n_lv;
let n_ab;
do{
     
    choi = menu();
    switch(choi){
        case 1:
            ajouter_lv();
            break;
        case 2:
            console.log(`affichage:\ntrier par titre --> 1\ntrier par anne de publication --> 2\naffiche les livres disponibles --> 3`);
            c = Number(prompt(`votre reponse: `));
            switch(c){
                case 1:
                    trier();
                    break;
                case 2:
                    trier_anne();
                    break;
                case 3:
                    affiche_disponible();
                    break;
                default:
                    break;
            }
            break;
        case 3:
            affiche_lv(cherche_lv());
            break;
        case 4:
            ajouter_ab();
            break;
        case 5:
            n_ab = abonne.id_abonne.length;
            for(let i = 0; i<n_ab; i++) affiche_ab(i);
            break;
        case 6:
            affiche_ab(cherche_ab());
            break;
        case 7:
            ajoute_em();
            break;
        case 8:
            for(let i = 0; i < emprunts.id_livre.length; i++) affiche_em(i);
            break;
        case 9:
            retour_em();
            break;
        default:
            break;
    }
}while(choi != 0)
    console.log(`good bye!`);

