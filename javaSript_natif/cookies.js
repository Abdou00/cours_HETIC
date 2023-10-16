/**
 * Un cookie est un petit fichier qui ne contient généralement qu’une seule donnée et qui va être stocké directement dans le navigateur d’un utilisateur.

Le plus souvent, les cookies sont mis en place (créés) côté serveur et vont être envoyés avec une page lorsque l’utilisateur demande à y accéder.

Les cookies sont très pratiques car ils permettent de conserver des informations envoyées par l’utilisateur et donc de pouvoir s’en resservir et cela de manière relativement simple.

Les cookies vont nous permettre d’enregistrer des informations à propos de l’utilisateur comme une liste de préférences indiquées (par exemple : « je préfère que ce site utilise son thème foncé » ou « je ne souhaite plus voir ce message ») ou vont encore notamment pouvoir servir aux utilisateurs à se connecter plus facilement à un site en gardant en mémoire leurs informations de connexion.
 */

document.cookie = 'myLanguage=Javascript'
document.cookie = 'myOtherLanguage=PHP'

var cookies = document.cookie.split('; ');
console.log(cookies);
// On va déjà pouvoir préciser un répertoire dans lequel le cookie est accessible avec l’option path. Le chemin fourni doit être absolu. Par défaut, un cookie est accessible dans la page courante.

// L’option domain permet de préciser le domaine sur lequel le cookie doit être accessible.

// L’option expires permet de préciser une date d’expiration pour un cookie, afin de faire en sorte qu’un cookie soit conservé plus longtemps pour pouvoir être réutilisé dans le futur.

// Notez qu’on peut également utiliser l’option max-age pour définir la date d’expiration d’un cookie en secondes à partir du moment actuel. Cette option est une alternative à expires qui nous permet d’utiliser des nombres.

// L’option secure permet d’indiquer qu’un cookie doit être envoyé uniquement via HTTPS et ne pas l’être via HTTP. Cette option est très utile si un cookie possède des données sensibles qui ne doivent pas être envoyées sans encryptage.

// L’option samesite permet de se prémunir contre ce type d’attaque. Pour cela, on va pouvoir choisir parmi l’une de ces deux valeurs :

// samesite="strict" indique qu’un cookie ne doit jamais être envoyé si l’utilisateur arrive sur le site depuis un autre site ;

// samesite="lax" possède les mêmes caractéristiques que la valeur strict à la différence que les cookies provenant de requêtes de type get de navigation top level (requêtes qui modifient l’URL dans la barre d’adresse du navigateur) seront envoyés.

let date = new Date(Data.now() + 86400000) // 86400000)ms = 24h
date = date.toUTCString();

document.cookie = 'user=samnba; path=/; domain=samba.com; expires=' + date
document.cookie = 'user=samba; path=/; domain=samba.com; max-age=86400; secure; samesite=strict'

