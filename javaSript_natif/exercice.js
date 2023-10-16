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
let container = document.getElementById('container');

images_url = [
    'https://dessin-humoristique.fr/wp-content/uploads/2022/01/image-drole-noel.jpg',
    'https://scontent-lhr8-2.xx.fbcdn.net/v/t1.6435-9/115777466_3203108236411863_5021570768360719396_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=UUnSX7chVl8AX_c7hkf&_nc_ht=scontent-lhr8-2.xx&oh=00_AfCIyoAlVCJxHvbnKXSlbuOPy1vCuYn9MwDtMUe1CtPlvg&oe=65546BD8',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjMguVxjD7JlgaV2qUfZTDFa6ih-SSo6l_K-vpi9pJx_UAZ8xl1sF3oyLfQmDwTZlmRAA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVoWX5NBb8fmuVx-G9j3Vv9mS4c91o2LGGsD5oIIhfN5nyPOIV85iWovAMuNuStR2p4I&usqp=CAU',
]

function combineImages(array = []) {
    return new Promise(
        (resolve, reject) => {
            let image = new Image(500, 500);
            image.src = array
            image.onload = function() {
                resolve(image);
                reject('No image')
            }
            
            console.log(image);
        }
    )
}

(
    async function() {
        for (var url of images_url) {
            var img = await combineImages(url);
            container.appendChild(img);
        }
    }
)();

