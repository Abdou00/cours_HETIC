/**
 * Exercice - Promesses#
Créer une fonction combineImages avec un seul paramètre: un tableau d’URL
Cette fonction doit charger chaque URL du tableau afin d’effectuer le chargement asynchrone des images (avec new Image(), puis onload)
Dessiner chaque image dans un canvas HTML (avec ctx.drawImage(img, x, y)). x et y doivent être des positions aléatoires mais l’image doit toujours être visible entièrement

Insérer le canvas dans la page
On note que les images s’affichent progressivement (dégradez les performances réseaux, ou mettez un timer pour mieux voir l’effet). Si l’on veut obtenir une image finale «terminée», nous allons modifier notre code et utiliser les promesses :

Votre fonction doit retourner une Promesse qui contient l’image générée, au lieu de modifier directement un canvas. Attention de bien attendre le chargement de toutes les images avant de résoudre la promesse.
Avec le résultat de l’appel de cette fonction, créer une nouvelle image qui recevra son contenu et qui sera intégrée dans la page (ou en arrière-plan CSS d’une div)
*/
// let container = document.getElementById('container');

// images_url = [
//     'https://dessin-humoristique.fr/wp-content/uploads/2022/01/image-drole-noel.jpg',
//     'https://scontent-lhr8-2.xx.fbcdn.net/v/t1.6435-9/115777466_3203108236411863_5021570768360719396_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=UUnSX7chVl8AX_c7hkf&_nc_ht=scontent-lhr8-2.xx&oh=00_AfCIyoAlVCJxHvbnKXSlbuOPy1vCuYn9MwDtMUe1CtPlvg&oe=65546BD8',
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjMguVxjD7JlgaV2qUfZTDFa6ih-SSo6l_K-vpi9pJx_UAZ8xl1sF3oyLfQmDwTZlmRAA&usqp=CAU',
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVoWX5NBb8fmuVx-G9j3Vv9mS4c91o2LGGsD5oIIhfN5nyPOIV85iWovAMuNuStR2p4I&usqp=CAU',
// ]

// function combineImages(array = []) {
//     return new Promise(
//         (resolve, reject) => {
//             let image = new Image(500, 500);
//             image.src = array
//             image.onload = function() {
//                 resolve(image);
//                 reject('No image')
//             }
            
//             console.log(image);
//         }
//     )
// }

// (
//     async function() {
//         for (var url of images_url) {
//             var img = await combineImages(url);
//             container.appendChild(img);
//         }
//     }
// )();

/**
 * 
 * Exercice 2: Créé la fonction de préparation du burger
 * Créé la fonction de préparation du milshake
 */

// opération asynchrone
// function cuireBurger (type) {
//     const carte = [
//         {
//             name: "Burger #1",
//             meat: "Beef" ,
//             ready: () => {}
//         },
//         {
//             name: "Burger #2",
//             meat: "Beef" ,
//             ready: () => {}
//         },
//         {
//             name: "Burger #3",
//             meat: "Beef" ,
//             ready: () => {}
//         }
//     ];

//     return  new Promise((resolve, reject) => {
//         // Solution 1:
//         // carte.forEach(element => {
//         //     if (type == element.name) {
//         //         resolve(element);
//         //     }
//         // });

//         // reject('Pas cette recette');

//         // Solution 2
//         let burger = carte.find((element) => element.name == type);
//         if(burger) resolve(burger);
//         reject('Pas cette recette');
//     })
// }

// opération normale
// function faireMilkshake (type) {
//     const carte = [
//         {
//             name: "Milkshake #1",
//             flavour: "Chocolate" ,
//         },
//         {
//             name: "Milkshake #2",
//             flavour: "Vanilla" ,
//         },
//         {
//             name: "Milkshake #3",
//             flavour: "Bannana" ,
//         }
//     ];

//     const milkshake = carte.find((element) => element.flavour == type)
//     if (milkshake) return milkshake;
//     return 'Recette inexistante'
// }

// fonction commander qui retourne une promesse
// function commander (type) {
//   return new Promise(async function(resolve, reject) {

//     var burger = await cuireBurger(type)
//     if (burger) resolve(burger)

//     reject(Error('Erreur en cuisine'))

//     // burger.ready  = (err, burger) => {
//     //     console.log(err);
//     //     if (err) {
//     //       return reject(Error('Erreur en cuisine'))
//     //     }
//     //     return resolve(burger)
//     // }
//   })
// }

// commander('Burger #1')
//     .then( burger => {
//         const milkshake = faireMilkshake('Orange')
//         return { burger: burger, shake: milkshake }
//     })
//     .then( foodItems => {
//         console.log('C’EST LA FÊTE DU BURGER !', foodItems)
//     })
//     .catch( err => {
//         console.log('Une erreur est survenue ' + err)
//     }) // alias .then(null, onRejected)

// // Exercice 3: 
// let promise = new Promise(function(resolve, reject) {
//     resolve(1);
//     setTimeout(() => resolve(2), 1000);
// });
  
// promise.then(alert);

/**
 * Un délai avec une promesse
 * La fonction de base setTimeout utilise des fonctions de retour. Créez une alternative
 * avec une promesse.
 * La fonction dealy(ms) doit retourner une promesse. Cette promesse doit s’acquitter après
 * ms milliseconds, pour que l’on puisse ajouter .then à celle-ci, comme cela :
 */
/**
 * 
 * @param {*} ms 
 * @returns {Promise}
 */
// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//     // return new Promise((resolve, reject) => setTimeout(resolve, ms))
// }
  
// delay(3000) // delay => promise
//     .then( // then => consomeur
//         () => alert('runs after 3 seconds') // handler
//     )
//     .catch()

/**
 * 
 * EXERCISE 1
 * Utilisez Promise.resolve(value) pour créer une promesse qui se résoudra avec la valeur 3.
 * @returns {Promise<3>}
 */
// function makePromiseResolveWith3(){
//     /* IMPLEMENT ME! */

//     return Promise.resolve(3);

//     // return new Promise(
//     //     (resolve, reject) => {
//     //         resolve(3)
//     //     }
//     // )
// }

/**
 * 
 * EXERCISE 2
 * 
 * @returns {Promise<,"Boo!">}
 */
// function makePromiseRejectWithBoo(){
//     /* IMPLEMENT ME! */
//     return Promise.reject('Boo');
// }

/**
 * 
 * EXERCISE 3
 * 
 * @param {boolean} itShouldResolve - Whether the promise should resolve or reject
 * @returns {Promise<undefined, undefined>}
 */

// function makePromiseWithConstructor(itShouldResolve){
//     return new Promise((resolve, reject) => {
//         /* If itShouldResolve is true, call resolve */
//         if (itShouldResolve) resolve(true)
//         /* If itShouldResolve is false, call reject */
//         reject(false)
//     });
// }

/**
 * 
 * EXERCISE 4
 *Il s'agit d'une utilisation courante du constructeur Promise. Si vous voulez simuler l'attente d'une valeur, une technique courante consiste à créer une fonction comme celle-ci. Il accepte simplement une valeur, et un delayInMs, puis retourne une promesse qui se résoudra avec cette valeur après ce délai.
 * @param {any} value 
 * @param {number} delayInMs 
 * @return {Promise<any>} - A promise that will resolve with the value after delayInMs milliseconds
 */
// function makeDelayPromise(value, delayInMs){
//     /* Return a promise that resolves with the value after delayInMs */
//     return new Promise(
//         resolve => setTimeout(resolve(value), delayInMs)
//     )
// }

/**
 * 
 * EXERCISE 1
 * Il s'agit d'un exercice simple consistant à attendre qu'une promesse soit faite avant d'accomplir une action. La promesse se résoudra après un certain nombre de millisecondes.
 * @param {Promise} promise
 * @param {thunk} action
 * 
 */
// function waitForPromise(promise, action){
//     /* IMPLEMENT ME */
//     return new Promise(resolve => setTimeout(resolve(promise().then(action)), 1000));
// }
// waitForPromise(makePromiseResolveWith3, (res) => res)
//     .then(
//         (result) => {
//             // console.log(result);
//         }
//     )
//     .catch((err) => console.log(err))

/**
 * 
 * EXERCISE 2
 * Dans cet exercice, nous allons utiliser puis et attraper pour leur utilisation la plus
 * élémentaire: consommer le résultat d'un processus asynchrone réussi, ou gérer l'erreur
 * d'un processus asynchrone échoué. Nous aurons une promesse, un consommateur et un
 * gestionnaire. Configurez-le de façon à ce que, si la promesse se résout, le consommateur
 * soit appelé avec le résultat, et si la promesse refuse, le gestionnaire soit appelé avec
 * l'erreur.
 * @param {Promise} promise 
 * @param {consumer} consumer 
 * @param {handler} handler 
 * @return array|boolean
 */
// function consumePromise(promise, consumer, handler){
//     /* IMPLEMENT ME! */
//     promise()
//         .then(
//             (data) => {
//                 consumer(data)
//             }
//         )
//         .catch(
//             (err) => {
//                 handler(err)
//             }
//         )
// }

// consumePromise(makePromiseResolveWith3, console.log, console.error)

/**
 * Définir un objet 'member' (membre) avec les attributs 'id' (identifiant), 'name' (nom) et
 * 'grade' et une méthode 'toString' personnalisée. Créer un objet 'team' qui contient des
 * membres. Créer une instance de 'team' et y ajouter des membres. Afficher les membres de
 * 'team' en utilisant la fonction 'toString' de 'member'.
 */
// class Member {
//     constructor(id, name, grade) {
//         this.id = id;
//         this.name = name;
//         this.grade = grade;
//         this.toString = () => {
//             return "ID: " + this.id + ", Name: " + this.name + " Grade: " + this.grade;
//         }
//     }
// }
// class Team extends Member {
//     constructor() {
//         this.members = [];
//         super()
//     }

//     addMember(member) {
//         this.members.push(member)
//     }
// }

// function member(id, name, grade) {
//     this.id       = id;
//     this.name     = name;
//     this.grade    = grade;
//     this.toString = function() {
//       return "ID: "+this.id+", Name: "+this.name+", Grade: "+this.grade;
//     }
// }
   
// function team() {
//     this.members  = new Array();
//     this.add      = function(member) {
//       var index           = this.members.length;
//       this.members[index] = member;
//       return index;
//     }
//     this.toString = function() {
//       return this.members.join("\\n");
//     }
// }
// let myTeam = new team();
// myTeam.add(new member(1, "samba", "grade"))
// myTeam.add(new member(2, "diara", "grade Z"))
// document.write(myTeam)
// member.prototype.toString = () => {}

// Au chargement de la page, dimensionner la fenêtre à une largeur de 600 pixels et une hauteur de 500 pixels.
let width = window.innerWidth;
let height = window.innerHeight;

let width2 = window.outerWidth;
let height2 = window.outerHeight;

function init() {
    window.resizeTo(600, 500);
    console.log(width + "       " + height);
    console.log(width2 + "       " + height2);
}
// Ajouter un bouton appelant une fonction déplaçant la fenêtre en 50, 50.
function deplace() {
    window.moveTo(50, 50)
    console.log(width + "       " + height);
    console.log(width2 + "       " + height2);
}
// Ajouter un bouton appelant une fonction déplaçant la fenêtre de 50, 50 par rapport à la position courante.
function deplace_relatif() {
    window.moveBy(50, 50)
    console.log(width + "       " + height);
    console.log(width2 + "       " + height2);
}
// Ajouter un bouton appelant une fonction diminuant la hauteur de la fenêtre de 100 pixels, et augmentant la largeur de 100 pixels.
function resize() {
    window.resizeBy(100, -100)
    console.log(width + "       " + height);
    console.log(width2 + "       " + height2);
}
// Au chargement de la page, lancer la fonction Init(). Cette fonction :
// Identifie les éléments span et paragraphes porteurs d'identifiants ;
// Cache les deux paragraphes ;
// Affecte à un mouseover sur les span la fonction masqueAffiche avec une méthode addEventListener (addEventListener("mouseover", masqueAffiche, false);).
// La fonction masqueAffiche affiche l'un ou l'autre des paragraphes.
// function init() {
//     const pf = document.getElementsByTagName('p')
//     const span = document.getElementsByTagName('span')

//     const idpf = []
//     const spans = []

//     for (let index = 0; index < pf.length; index++) {
//         const element = pf[index];
//         if (element.id) {
//             element.style.visibility = 'hidden'
//             idpf.push(element)
//         }
//     }

//     for (let index = 0; index < spans.length; index++) {
//         const element = spans[index];
//         if (element.id) {
//             element.addEventListener('mouseenter',  () => {
//                 masqueAffiche(idpf[i])
//             })
//         }
//     }
// }

function init() {
    let span1 = document.getElementById('mContenu1')
    let span2 = document.getElementById('mContenu2')
    let p1 = document.getElementById('contenu1')
    let p2 = document.getElementById('contenu2')

    p1.style.display = 'none'
    p2.style.display = 'none'

    span1.addEventListener('mouseover', masqueAffiche, false)
    span2.addEventListener('mouseover', masqueAffiche, false)
}

function masqueAffiche(event) {
    let tabs = document.querySelectorAll('p[id]')
    for (let i=0;i<tabs.length;i++) tabs[i].style.display="none";
    console.log("c"+this.id.substr(2));
    document.getElementById("c"+this.id.substr(2)).style.display="block";
}

/**
 * Constructeur sans valeur par défaut
Déclarez un nouvel objet test, basé sur le prototype Test. Cet objet :
possède une propriété privée nommée ajout, égale à 4 ;
possède une méthode publique affiche, qui affiche l'addition de la variable ajout avec le contenu du champ de saisie.
Tester en essayant d'accéder à la valeur d'ajout depuis l'extérieur de la définition de l'objet.

 */
// Constructeur avec valeurs par défaut
// Modifiez le code précédent de manière à ce que Test prenne comme argument l'identifiant du champ à lire d'une part, et la valeur de laquelle il faut augmenter le contenu du champ de saisie d'autre part. Les valeurs par défaut doivent être respectivement "champSaisie" et 4.