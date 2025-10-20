const prompt = require ("prompt-sync")();
// 1
const voiture = {
    marque: "volswagne" ,
    modele: "passat",
    annee: "2005",
}

console.log(voiture);

//2

console.log(voiture.marque, voiture.annee);

//3

voiture.annee = "2010";
console.log(voiture);

//4

voiture.coulour = "noir";
console.log(voiture);

//5

delete voiture.modele;
console.log(voiture);