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

// script.js at end of body instead of head (to let addEventListener work)



// get dialog-field
let dialogRef = document.getElementById('dialog');

// for arrow-buttons
let slideShowCounter = 0;



// create images and onclick-events
function renderImages() {
    let thumbnails = document.getElementById('thumbnails');
    thumbnails.innerHTML = ''; // reset
    // show images
    ArrayImages.forEach((file, arrayIndex) => {
        thumbnails.innerHTML += thumbsContent(file, arrayIndex);
    });
    // (element, index, array) -> btn zur Nutzung spezifisch, allBtns zum Arbeiten mit Liste (navigation)
    document.querySelectorAll('.thumb-btn').forEach((btn, index, allBtns) => {

        // open dialog with onclick
        btn.addEventListener('click', () => {
            openDialog(index);
        });

        btn.addEventListener('keydown', (event) => {

            // navigate through thumbnails with "->"
            if (event.key === "ArrowRight") {
                event.preventDefault();
                let next = (index + 1) % allBtns.length;
                allBtns[next].focus();
            }

            // navigate through thumbnails with "<-"
            if (event.key === "ArrowLeft") {
                event.preventDefault();
                let prev = (index - 1 + allBtns.length) % allBtns.length;
                allBtns[prev].focus();
            }

        });
    });
}

// show images -> html-part
function thumbsContent(file, arrayIndex) {

    // class              for querySelectorAll(.thumb-btn)
    // data-image-index   to count through images
    // tabindex           to walk through with tab-key
    return ` 
            <button class="thumb-btn" data-image-index="${arrayIndex}" tabindex="0">
                <img 
                    src="./assets/images/${file}"           
                    alt="${ArrayImagesDescription[arrayIndex]}"
                >
            </button>        
        `;
}


// open dialog
function openDialog(imageIndex) {
    dialog.showModal();
    dialog.classList.add('opened');

    // give Counter the number of named Index
    slideShowCounter = parseInt(imageIndex);
    dialogContents(slideShowCounter);
}

function dialogContents(slideShowCounter) {
    document.getElementById('dialogFileTitle').innerHTML =
        ArrayImages[slideShowCounter];

    document.getElementById('dialogDescription').innerHTML =
        ArrayImagesDescription[slideShowCounter];

    document.getElementById('dialogImage').innerHTML =
        `<img src="./assets/images/${ArrayImages[slideShowCounter]}">`;

    document.getElementById('dialogCounter').innerHTML =
        `${parseInt(slideShowCounter) + 1} / ${ArrayImages.length}`;
}




function closeDialog() {
    dialog.close();
    dialog.classList.remove('opened');

    // focus on current thumbnail-img after dialog closes
    // querySelector vs querySelectorAll -> returns just first match (insteas of all matches)
    currentThumb = document.querySelector(`[data-image-index="${slideShowCounter}"]`);
    if (currentThumb) currentThumb.focus();
}


// dialog: navigate through images (use arrow-buttons)
function backwardsDialog() {
    slideShowCounter--;   

    // if firstImg reached, then Counter=lastIMG
    if (slideShowCounter < 0) {
        slideShowCounter = ArrayImages.length - 1;
    }
    dialogContents(slideShowCounter);
};

function forwardsDialog() {
    slideShowCounter++;
    
    // if lastIMG reached, then Counter=firstImg
    if (slideShowCounter >= ArrayImages.length) {
        slideShowCounter = 0;
    }
    dialogContents(slideShowCounter);
};


// // // WORKS NOT FOR USAGE OF KEYS (event.client always says 0.0!) // // //
// // close dialog when clicking outside:           

// dialogRef.addEventListener('click', (event) => {

// // function gets Coordinates of dialog (height, top, position, ect.)
// // function is already defined in DOM
// // rect -> rectangular path => size is specified by width and height

//     const rect = dialogRef.getBoundingClientRect();

// // when click outside of dialog, then closeDialog()

//     if (
//         event.clientX < rect.left ||
//         event.clientX > rect.right ||
//         event.clientY < rect.top ||
//         event.clientY > rect.bottom
//     ) {
//         closeDialog();
//     }
// });      


// close dialog when clicking outside (don't close when using keys):
// event.target         Element, welches angeklickt wird (ohne Bubbling-Effekt)
dialogRef.addEventListener('click', (event) => {
    if (event.target === dialogRef) {
        closeDialog();
    }
});     // Übersetzt:
// „Schließe den Dialog nur wenn Klick auf Dialog-Fläche selbst!
// -> nur gaaaaanz am DialogRand! (Innenleben = Header, Section, Footer)



// run dialog with keys
dialogRef.addEventListener('keydown', (event) => {
    if (event.key === "Escape") { closeDialog(); }
    if (event.key === "ArrowLeft") { backwardsDialog(); }
    if (event.key === "ArrowRight") { forwardsDialog(); }
})