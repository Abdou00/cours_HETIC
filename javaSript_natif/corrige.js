let container = document.getElementById('container');

function combineImages(array = []) {
    array = [
        'https://dessin-humoristique.fr/wp-content/uploads/2022/01/image-drole-noel.jpg',
        'https://scontent-lhr8-2.xx.fbcdn.net/v/t1.6435-9/115777466_3203108236411863_5021570768360719396_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=UUnSX7chVl8AX_c7hkf&_nc_ht=scontent-lhr8-2.xx&oh=00_AfCIyoAlVCJxHvbnKXSlbuOPy1vCuYn9MwDtMUe1CtPlvg&oe=65546BD8',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjMguVxjD7JlgaV2qUfZTDFa6ih-SSo6l_K-vpi9pJx_UAZ8xl1sF3oyLfQmDwTZlmRAA&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVoWX5NBb8fmuVx-G9j3Vv9mS4c91o2LGGsD5oIIhfN5nyPOIV85iWovAMuNuStR2p4I&usqp=CAU',
    ]

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

(async function() {
        for (var url of images_url) {
            var img = await combineImages(url);
            container.appendChild(img);
        }
    }
)();

// const tab = [1, 3, 5, 7, 9];
// const map = tab.map((x) => x * 2);
// console.log(map);