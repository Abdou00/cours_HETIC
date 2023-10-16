/**
 * Un objet est entité à part entière qui possède des propriétés et des méthodes
 */

// let => variable déclarées avec let sont hissé au sommet de leur portée global, locale ou de bloc
// var => variable déclarées avec let sont hissé au sommet de leur portée global, locale ou de bloc. les variables "var" sont hissée avec une valeur par défaut "undefined" ce qui rend accessible avant leur ligne de déclaration
// const => Les variables déclarées avec const, tout comme let, sont hissées au sommet de leur portée globale, locale ou de bloc – mais sans initialisation par défaut.
// let person = new Object();

let personas = {
    clé: "valeur",
    obj: {
        taille: "azertyuiop"
    },
    maMethode: function (params) {
        // fait qq ch
    }
}

// function Voiture(marque, modele, annee, carburant) {
//     this.marque = marque;
//     this.modele = modele;
//     this.annee = annee;
//     this.carburant = carburant;
// }

class Voiture {
    constructor(marque, modele, annee, carburant) {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
        this.carburant = carburant;
    }
}

let maVoiture = new Voiture('BMW', 'M3', 2012, 'Essence');
console.log(maVoiture);

class Machin extends Voiture {
    constructor(marque, modele, annee, carburant, mod) {
        super(marque, modele, annee, carburant, mod)
        this.mod = mod;
    }
}

let tt = new Machin('Audi', 'S3', 2022, 'Diesel', 'azertyuiop')
console.log(tt);