//1 _____________________________________________________________


const etudiant = {
    nom: "fathi",
    age: 25,
    sePresenter(){
       console.log(`Bonjour, je m’appelle ${etudiant.nom} et j’ai ${etudiant.age} ans.`)
    },
}

etudiant.sePresenter();

//2 _____________________________________________________________


for(let cle in etudiant){
    console.log(`${cle} : ${etudiant[cle]}`);
}

//3 _____________________________________________________________


const classe = {
    etudiants: ["fathi","mohammed","zakarya","sara"],
    afficherEtudiants(){
        for(let i=0; i<this.etudiants.length; i++){
            console.log(`Bonjour, je m’appelle ${classe.etudiants[i]}`)
        }
    }
}
classe.afficherEtudiants();

//4 _____________________________________________________________

   const livres = 
   [    {   titre: "livre1", 
        auteur: "mohammed", 
        annee: "2017",},

        {   titre: "livre2",
        auteur: "hamza", 
        annee: "2018",},

        {   titre: "livre3",
        auteur: "zakarya",
        annee: "2019",},    ] 


    function trouverLivre(titre){
            for(let i=0; i<livres.length; i++){
                if(titre === livres[i].titre) 
                    return console.log(livres[i]);
            }
        }

trouverLivre("livre1");