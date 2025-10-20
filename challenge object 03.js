//1 _____________________________________________________________
const entreprise = {
    nom: "detablo",
    adresse: {
        rue: "rue 5",
        ville:"casablanca",
        codepostal: "22580",
    }
}
console.log(entreprise.adresse.ville);

//2 _____________________________________________________________

const produits = [

    {nom: "bimo",
    prix: "2",
    quantite: "20"},

    {nom: "pc",
    prix: "2500",
    quantite: "5"},

    {nom: "cartable",
    prix: "150",
    quantite: "50"},
]

for(let i=0; i<produits.length; i++){
    let prixtotal = produits[i].prix * produits[i].quantite;
    console.log(`le prix total de ${produits[i].nom} est: ${prixtotal}`)
}

//3 _____________________________________________________________

class animal {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    parler(){
        return console.log(`le type est :${this.type} \net son nom est :${this.name}`);
    }
}

const animal1 = new animal("jak", "chein");

animal1.parler();

//4 _____________________________________________________________

const employes = [
    {   nom: "emp1",
        salaire: "8000" },

    {   nom: "emp2",
        salaire: "5000"},
    
    {   nom: "emp3",
        salaire: "2500" }
]

for (let i=0; i<employes.length; i++){

    if(employes[i].salaire > "3000")
        console.log(`${employes[i].nom} leur salaire: ${employes[i].salaire}`);
}

//5 _____________________________________________________________

function cloner(obj){
    const cln = {};
    for(let key in obj){
        cln[key] = obj[key];
    }
return cln
}

console.log(cloner(employes[1]));
