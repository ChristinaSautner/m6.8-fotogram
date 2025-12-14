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



// create images and onclick-events
function renderImages() {
    let thumbnails = document.getElementById('thumbnails');
    thumbnails.innerHTML = ''; // reset
    // show images
    ArrayImages.forEach((file, index) => {
        thumbnails.innerHTML += thumbsContent(file, index);
    });
    // onclick-event for each img
    document.querySelectorAll('.thumb').forEach(img => {
        img.addEventListener('click', () => {
            let index = img.dataset.index;
            openDialog(index);
        });
    });
}
// show images -> html-part
function thumbsContent(file, index) {
    // class        for querySelectorAll(.thumb)
    // data-index   to count through images
    return ` 
            <img 
                src="./assets/images/${file}"           
                alt="${ArrayImagesDescription[index]}"
                class="thumb"
                data-index="${index}"
            >
        `;
}



// open dialog
function openDialog(index) {
    dialog.showModal();
    dialog.classList.add('opened');

    dialogContents(index);
}
function dialogContents(index) {
    document.getElementById('dialogFileTitle').innerHTML = ArrayImages[index];
    document.getElementById('dialogDescription').innerHTML = ArrayImagesDescription[index];
    document.getElementById('dialogImage').innerHTML =
        `<img src="./assets/images/${ArrayImages[index]}">`;
    document.getElementById('dialogCounter').innerHTML =
        `${parseInt(index) + 1} / ${ArrayImages.length}`;
}




function closeDialog() {
    dialog.close();
    dialog.classList.remove('opened');
}


// close dialog when clicking outside:

// script at end of body instead of head (to let addEventListener work)
dialogRef.addEventListener('click', (event) => {

    // function gets Coordinates of dialog (height, top, position, ect.)
    // function is already defined in DOM
    // rect -> rectangular path => size is specified by width and height
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

// close dialog with "esc"
dialogRef.addEventListener('keydown', (event) => {
    if (
        event.key === "Escape"
    ) {
        closeDialog();
    }
})