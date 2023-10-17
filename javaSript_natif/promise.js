/**
 * La fonction passé à new Promise est appélée l'exécuteur.
 *  Quand new Promise est créé, elle est lancé automatiquement.
 * Elle contient le producteur de code, qui doit produire un résulat final.
 * Ses arguments "resolve", et "reject" sont les fonctions de retours (callbacks) directement fournies par javascript
 * 
 * L'objet promise retourné par le constructeur "new Promise" a des proprité internes:
 * 
 * state: initialement à "pending", se changer soit en "fulfilled" lorsque resolve est appelé ou "rejected" si jamais c'est reject est appelé
 * 
 * result: initialement à "undefined" se change en "value" quand
 * "resolve(value)"est appelé ou en "error" quand "reject(error)" est appelé */
// let promise = new Promise((resolve, reject) => { state: pending
//     // 1. L'executeur est appélé automatiquement et immédiatement (avec new Promise)
//     // 2. L'executeur reçoit ses 2 argument (resolve et reject)
//     setTimeout(() => {
//         resolve('done') state: fulfilled
//     }, 2000);
//     // 3. Après 2 seconde de traitement l'executeur appel le callback pour produire le résultat. Cela va changé l'état de l'objet promise.
//     setTimeout(() => {
//         reject(new Error('Ouppps')) // state: rejected
//     }, 1000);
// });
/**
 * Il ne peut y avoir qu'un seul résultat ou une erreur. L'executeur ne devrait appeler qu'une seul fois resolve ou reject. N'importe quel changement d'état est définitif.
 * L'idée est que la tâche exécutée par l'executeur ne peut avoir qu'un seul résultat ou une erreur.
 * De plus resolve/reject n'attendent qu'un seul argument (ou aucun) et ignorera les arguments suivants.
 */
// let promise2 = new Promise((resolve, reject) => {
//     resolve('done', 123, ['azertyuiop', 4]);
//     reject(new Error('Oopps'), "azertyuiop");
//     setTimeout(() => {
//         reject(new Error('Ouppps'));
//     }, 1000);
// });

// promise.then(
//     result => alert(result), // afficher "done après 2 seconde"
//     error => alert(error) // ne se lance pas
// );
// promise2.then(
//     result => alert(result), // afficher "done après 2 seconde"
//     error => alert(error) // ne se lance pas
// );

/**
 * L'objet promise retourné par le constructeur "new Promise" a des proprité internes:
 * 
 * state: initialement à "pending", se changer soit en "fulfilled" lorsque resolve est appelé ou "rejected" si jamais c'est reject est appelé
 * 
 * result: initialement à "undefined" se change en "value" quand
 * "resolve(value)"est appelé ou en "error" quand "reject(error)" est appelé
 * */
let test = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('Value transmise');// La value 
        reject(new Error('error'))
    }, 2000);
})
test
    .finally(() => alert('Promise ready'))// La Value renvoyer par la première promesse est transmise par finally au prochin "then".
    // C’est très pratique, car finally n’est pas destiné à traiter un résultat de promesse. Comme déjà dit, c’est un endroit pour faire un nettoyage générique, quel que soit le résultat.
    .then(res => alert(res))
    .catch(err =>  alert(err))

/** 
 * 1. finally n'a pas d'argument. Dans"finally nous ne savons si la promesse est réussi ou non. Ce n'est pas grave, car notre tâche consiste généralement à effectuer des procédure de finalisations "générales".
 * 
 * 2. Un gestionnaire "finally" transmet le résultat ou l'erreur au
 * prochain gestionnaire. La value renvoyée par la première promesse est
 * transmise par finally au prochain then.
 * C’est très pratique, car finally n’est pas destiné à traiter un
 * résultat de promesse. Comme déjà dit, c’est un endroit pour faire un
 * nettoyage générique, quel que soit le résultat.
 * 
 * 3. Un gestionnaire "finally" ne devrait pas non plus renvoyer quoi que ce soit. Si c'est le cas , la valeur renvoyer est silencieusement ignorée.
 * La seule exception à cette règle est lorsqu'un gestionnaire "finally" génère une erreur. E
*/

new Promise(); // Mauvaise pratique

let promise = new Promise();

function promiser() {
    return new Promise();
}