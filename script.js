let ArrayImages = [
    'beach-mountain-snow-sand.jpg',
    'chow-chow-dogs-car.jpg',
    'cloud-sea-village.jpg',
    'crow-crazy.jpg',
    'crow.jpg',
    'deers-field.jpg',
    'ducklings-ducks.jpg',
    'elephants.jpg',
    'field-tree-pink-sunset.jpg',
    'forest-tree-tube.jpg',
    'fox-snow.jpg',
    'giraffs-tree.jpg',
    'lake-dessert-mountain.jpg',
    'lamb-sheep.jpg',
    'leopards.jpg',
    'lionesses-lions-night.jpg',
    'monkeys.jpg',
    'rhinos.jpg',
    'road-idyllic-village.jpg',
    'scotland-cliff.jpg',
    'sparrows.jpg',
    'vultures-geier.jpg',
    'zebras.jpg'
];

let ArrayImagesDescription = [
    "Beach in front of a Mountain",
    "dogs enjoying the cool breeze",
    "Ocean of Clouds",
    "fuzzy Crow",
    "Crow",
    "wild Deers",
    "cuddled up Ducklings",
    "playful Elephants",
    "single Tree at beautiful Sunset",
    "mystic Trees",
    "Fox in Snow",
    "Giraffs with high Tree",
    "Lake at mounty Desert",
    "mother Sheep with Lamb",
    "fluffy Leopards",
    "Lionesses at night",
    "little Monkeys",
    "mother Rhino with Baby",
    "idyllic Road to Village",
    "scottish Cliff",
    "Sparrows on Branch",
    "Vultures in Greens",
    "Zebras in Greens"
];


// function openDialog() / closeDialog()
let dialogRef = document.getElementById('dialog');



// show images as thumbnails
function renderImages() {
    let thumbnails = document.getElementById('thumbnails');
    thumbnails.innerHTML = '';

    ArrayImages.forEach((file, index) => {
        thumbnails.innerHTML += thumbsContent(file, index);
    });
} 
// html-part
function thumbsContent(file, index) {
    return `
            <img 
                src="./assets/images/${file}" 
                alt="${ArrayImagesDescription[index]}"
                class="thumb"
                data-index="${index}"
            >
        `;
}



// onklick-event auf fotos setzen
function openDialog() {
    dialog.showModal();
    dialog.classList.add('opened')

    // // add loop for:
    // // Titles        in  "span"  ("dialogFileTitle")
    // // Descriptions  in  "title" ("dialogDescription")
    // // Images        in  "div"   ("dialogImage")
}


function closeDialog() {
    dialog.close();
    dialog.classList.remove('opened');
}


// to close dialog when clicking outside:

// for each click-event
// script at end of body instead of head (to let addEventListener work)
dialogRef.addEventListener('click', (event) => {

    // function gets Coordinates of dialog (height, top, position, ect.)
    // function is already defined in DOM
    const rect = dialogRef.getBoundingClientRect();

    // if click outside of dialog, then closeDialog()
    if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
    ) {
        closeDialog();
    }
});