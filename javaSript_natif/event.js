function showKey(e) {
    var key;
    if (window.event) {
        key = window.event.keyCode;
    } else {
        key = e.keyCode;
    }

    key = String.fromCharCode(key);
    document.getElementById("container").innerHTML += key;
}
window.onload = function() {
    document.onkeydown = showKey;
}
/**
 * tous les caractères présentés en majuscules car javascript prend en compte uniquement la touche sur laquelle l'utilisateur a appuyer mais non s'il s'agit d'une minuscule ou d'une majuscule. Vous toutefois savoir si des touches spéciales ont été enfoncées avec les propriétés "altKey", "ctrlKey", "shiftKey"
 */
// TODO: Envoyer les PDF avec la liste des méthodes natives et la liste des événements