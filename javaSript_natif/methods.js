// Objets JavaScript
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date
let date = new Date().
// Permet de récuper'er les propriété de l'objet
console.log(Object.getOwnPropertyNames(date));
// Map contient des paires clés-valeurs et momorise l'odre dans lequel les clés ont été insérer.
const map = new Map();

// Array est utilisé pour créé des tableaux. Les sont des objets de haut-niveau
let array = new Array()
let array2 = []
// Object il est utilisé pour stocker des ensembles paires/clés valeurs et des entités plus complexe.
let obj = new Object()
let ojt2 = {
    "clé": "value"
}
// L'objet Promise est utilisé pour eéalisé des traitements asynchrone. Promesse représente une valeur qui peut être disponible maintenant, dans le futur ou jamais.
const promise = new Promise((success, failure) => {
    console.log('ok');

    if (Math.random() > 0.5) {
        return success('success')
    } else {
        return failure('fail')
    }
})

function success(params) {
    
}

function promisee() {
    return new Promise((success, failure) => {
        console.log('ok');

        if (Math.random() > 0.5) {
            success(() => {
                console.log("azertyuiop");
            })
        } else {
            failure((err) => {
                console.error(err)
            })
        }
    })
}
// Chaînage des promesse
promise
    .then(success, failure)
    .then((test) => {})
    .then((test2) => {})
    .catch()
    .then()

let fun = promisee();
fun.then(success, failure)
// Méthodes
// 
Promise.resolve()
// 
Promise.reject()
// 
Promise.all()
// 
Promise.race()