# Évènement
Les événements JavaScript permettent d'intercepter les changements d'états de l'environnement provoqués par le document HTML, les scripts ou l'interaction du client. Lorsqu'un événement survient, un objet Event permettant de le décrire est créé. Il se propage alors dans l'arbre DOM selon trois phases déterminées par la cible (l'objet depuis lequel l’événement est intercepté) :

- Capture : l'événement se propage de la racine du document (incluse) à la cible (exclue).
- Cible : l'événement atteint la cible.
- Bouillonnement : l'événement se propage dans le sens inverse : de la cible (exclue) à la racine du document (incluse).

Cet objet a été défini par le W3C, mais malheureusement Internet Explorer en a sa propre définition ce qui oblige le développeur à tenir compte du navigateur.

Certaines propriétés de cet objet concernent tous les types d'événements et d'autres, tels que le bouton de la souris, sont spécifiques à un ou plusieurs événements. Seuls les premières nous intéressent dans cette partie, nous verrons les autres dans la description des événements.

#### type
Identique sous Internet Explorer.
Renvoie le type d’événement (onkeydown, onload...).

#### target
Équivalent Internet Explorer : srcElement.
Permet de récupérer l'élément depuis lequel l’événement à été envoyé. Il ne s'agit pas forcément de celui auquel on associe la fonction, mais de l'élément qui a récupéré le focus ou qui le récupère au moment de l'action. Par exemple, lors
du clique de la souris sur un bouton, c'est ce bouton qui est renvoyé. Ou bien lorsque l'on appuie sur une touche du clavier, c'est l'objet qui a le focus qui est renvoyé.

#### currentTarget
Non supporté par Internet Explorer.
Permet de récupérer l'objet auquel l’événement à été rattaché. Équivaut à utiliser la référence this qui fonctionne dans
certain cas sous Internet Explorer.
Équivalent Internet Explorer : l'attribut cancelBubble.
L'objet Event
type
target
currentTarget
stopPropagation
Programmation JavaScript/Version imprimable... https://fr.wikibooks.org/w/index.php?title=Prog...
100 sur 161 16/09/2018 à 22:19
Cette méthode arrête la propagation de l'événement dans l'arbre DOM après le nœud sur lequel il se trouve. Il faut faire
attention au fait qu'il s'agisse d'une méthode dans le W3C mais d'un attribut sous Internet Explorer.
Équivalent Internet Explorer : l'attribut event.returnValue = false.
Empêche l'action normalement prévue de se dérouler. Par exemple, lors de l'appuie sur la touche tabulation dans un
champ texte, cela annulera le changement de focus et permettra l'insertion d'une indentation. Il est préférable d'utiliser
l'expression "return false;" (sauf pour Internet Explorer) qui est mieux supportée.
Chaque événement peut être capté par les objets HTML concernés en leurs associant une fonction ou une commande
JavaScript. Nous verrons plus loin comment fonctionnent les écouteurs (gestionnaires d'événements DOM-2). Ici nous
utiliserons le type de gestionnaire d’événement DOM-0, plus simple et plus fiable : les événements sont des méthodes
(le nom de l’événement avec le préfixe "on") qu'il suffit de définir. Ces méthodes peuvent prendre en paramètre un objet
Event qui permettra de contrôler l'événement. Cependant, ce paramètre n'est pas toujours nécessaire.
Il existe deux façons de définir les événements :
1. Directement dans la balise de l'objet concerné :
L'appuie sur le bouton "bt" envoie un message avec son id :
<FORM>
<INPUT type="button" id="bt" onclick="alert('Vous avez cliqué sur '+this.id+'.');">
</FORM>
La commande peut aussi être une fonction que vous avez vous même définie ultérieurement.
2. En associant une fonction via JavaScript :
preventDefault
Gestionnaires d’événements DOM-0
Programmation JavaScript/Version imprimable... https://fr.wikibooks.org/w/index.php?title=Prog...
101 sur 161 16/09/2018 à 22:19
Le même effet est obtenu différemment :
<FORM>
<INPUT type="button" id="bt">
</FORM>
La fonction javascript est définie après :
document.getElementById("bt").onclick = function(event)
{
alert("Vous avez cliqué sur "+this.id+".");
}
Le paramètre Event n'est pas accessible avec Internet Explorer, il faut donc passer par la variable globale window.event.
Autrement, il suffit de récupérer l'instance de l'Event en paramètre de la fonction.
//Capture la touche de clavier enfoncée
document.onkeydown = function(event)
{
//Internet Explorer ne prend pas d'objet Event en paramètre, il faut donc aller le
chercher dans l'objet window
if (typeof event == "undefined" ) event = window.event;
}
Il est possible d'intercepter le flux d’événements dans l'arbre DOM avec des écouteur d’événements. Pour ajouter un
écouteur à un objet HTML il suffit d'utiliser la méthode addEventListener. Cet écouteur peut-être supprimé avec
removeEventListener. Il s'agit du type de gestionnaire d’événement DOM-2.
Équivalent Internet Explorer : attachEvent;
Cette méthode crée un écouteur pour un objet HTML. Il prend trois paramètres :
type : le type d’événement. Le suffixe "on" n'est requis que pour Internet Explorer.
EventListener : la fonction appelée lors de l’événement.
useCapture : true pour la phase de capture et false pour celles de la cible et du
bouillonnement. Ce paramètre n'est pas disponible sous Internet Explorer qui ne traite
que la cible et le bouillonnement.
Le mot clé this n'est hélas pas reconnu dans cette méthode, c'est pourquoi il est préférable d'utiliser le gestionnaire
d’événement DOM-0.
Lors de l'appuie sur le bouton "my_button", on affiche le type d'évènement la cible courante et on
efface l'écouteur de sorte à ce que cette action ne s'effectue qu'une seule fois.
Écouteurs d'événements
addEventListener
Programmation JavaScript/Version imprimable... https://fr.wikibooks.org/w/index.php?title=Prog...
102 sur 161 16/09/2018 à 22:19
function clickMe(event)
{
//this.id renvoie "undefined" : this n'est pas reconnu ici
alert("Type : "+event.type+"\nCible courante : "+this.id);
if(navigator.appName == "Microsoft Internet Explorer")
{
//Ne fonctionne pas : this n'est pas reconnu ici
this.detachEvent("onclick", clickMe);
}
else
{
this.removeEventListener("click", clickMe, false);
}
}
if(navigator.appName == "Microsoft Internet Explorer")
{
document.getElementById("my_button").attachEvent("onclick", clickMe);
}
else
{
document.getElementById("my_button").addEventListener("click", clickMe, false);
}
Équivalent Internet Explorer : detachEvent;
Pour détruire un écouteur, il faut utiliser cette méthode avec les mêmes paramètres que addEventListener (ou
detachEvent).
En cas d'interruption de chargement d'une image.
Objets concernés : Image.
Lorsque l'utilisateur quitte l'objet et que celui-ci perd le focus.
Objets concernés : Button, Checkbox, FileUpload, Layer, Password, Radio, Reset, Select, Submit, Text, TextArea et
window.
Lorsque l'utilisateur quitte l'objet après l'avoir modifié et que celui-ci perd le focus.
removeEventListener
Événements
onabort
onblur
onchange
Programmation JavaScript/Version imprimable... https://fr.wikibooks.org/w/index.php?title=Prog...
103 sur 161 16/09/2018 à 22:19
Objets concernés : FileUpload, Select, Submit, Text et TextArea.
Lors d'un clique de souris sur l'objet.
Objets concernés : Button, document, Checkbox, Link, Radio, Reset, Select et Submit.
Lors d'un double clique de souris sur l'objet.
Objets concernés : Button, document, Checkbox, Link, Radio, Reset, Select et Submit.
Survient lors d'une erreur de chargement.
Objets concernés : Image et window.
Lorsque l'objet est sélectionné et prend le focus.
Objets concernés : Button, Checkbox, FileUpload, Layer, Password, Radio, Reset, Select, Submit, Text, TextArea et
window.
Lorsqu'on appuie sur une touche. Pour tous les évènements clavier, Event a pour attribut keyCode (Internet Explorer) ou
which (Netscape) et contient le code de la touche enfoncée.
Dans cet exemple un message envoie le code de la touche appuiée :
document.onkeydown = function(event)
{
//On vérifie le navigateur
if(navigator.appName === "Microsoft Internet Explorer")
{
//On envoie un message avec la touche appuyée pour Internet Explorer
alert(event.keyCode);
}
else
{
//On envoie un message avec la touche appuyée pour Netscape
alert(event.which);
}
}
onclick
ondblclick
onerror
onfocus
onkeydown
Programmation JavaScript/Version imprimable... https://fr.wikibooks.org/w/index.php?title=Prog...
104 sur 161 16/09/2018 à 22:19
Objets concernés : document, Image, Input (type=file, password ou text), Link et TextArea.
Lorsqu'on maintient une touche appuyée. Pour tous les événements clavier, Event à pour attribut keyCode (Internet
Explorer) ou which (Netscape) et contient le code de la touche enfoncée.
Objets concernés : document, Image, Link et TextArea.
Lorsqu'on relâche sur une touche. Pour tous les événements clavier, Event à pour attribut keyCode (Internet Explorer) ou
which (Netscape) et contient le code de la touche enfoncée.
Objets concernés : document, Image, Link et TextArea.
Lors du chargement de la page HTML, d'une frame ou d'une image.
Objets concernés : Image, Layer et window.
En quittant le fichier. L'objet Event ne subit pas la phase de bouillonnement avec onunload.
Objet concerné : window.
En maintenant une touche de la souris appuyée.
Les attributs de Event pour la souris sont les suivants :
pageX (Netscape) ou x (Internet Explorer) : position horizontale de la souris. Sous
Netscape, le défilement du document n'est pas pris en compte.
pageY (Netscape) ou y (Internet Explorer) : position horizontale de la souris. Sous
Netscape, le défilement du document n'est pas pris en compte.
which (Netscape) ou button (Internet Explorer) : bouton de la souris enfoncé, relâché ou
maintenu. Avec which, le clique gauche renvoie 1, le milieu renvoie 2 et le droit renvoie 3.
Avec button (sous Internet Explorer), le clique gauche renvoie 0, le milieu renvoie 4 et le
droit renvoie 2.
Lorsque l'on clique avec la souris un message apparaît avec la position de la souris et le bouton
cliqué :
document.onmousedown = function(event)
{
onkeypress
onkeyup
onload
onunload
onmousedown
Programmation JavaScript/Version imprimable... https://fr.wikibooks.org/w/index.php?title=Prog...
105 sur 161 16/09/2018 à 22:19
//Netscape
if(navigator.appName != "Microsoft Internet Explorer")
{
alert(event.pageX+" - "+event.which);
}
//Internet Explorer
else
{
alert(window.event.x+" - "+window.event.button);
}
}
Objets concernés : Button, document et Link.
En relâchant une touche de la souris. Pour les attributs de Event voir onmousedown.
Objets concernés : Button, document et Link.
En bougeant la souris. Pour les attributs de Event voir onmousedown.
Objets concernés : window et document
En quittant l'élément avec la souris.
Objets concernés : Area, Layer et Link. Pour les attributs de Event voir onmousedown.
En passant sur l'élément avec la souris.
Objets concernés : Area, Layer et Link. Pour les attributs de Event voir onmousedown.
En sélectionnant du texte.
Objets concernés : text et Textarea.
Lors de l'initialisation du formulaire.
Objet concerné : form.
onmouseup
onmousemove
onmouseout
onmouseover
onselect
onreset
Programmation JavaScript/Version imprimable... https://fr.wikibooks.org/w/index.php?title=Prog...
106 sur 161 16/09/2018 à 22:19
En envoyant le formulaire
Objets concernés : form
Lors du redimensionnement du fichier.
Objet concerné : window.
Lors du déplacement du fichier.
Objet concerné : window.
Lors d'un glisser-déposer vers la fenêtre.
Objet concerné : window.
Lorsqu'un lien est activé.
Objets concernés : Link