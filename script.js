let arrayImagesNature = [
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

let arrayDescriptionsNature = [
    "Beach in front of a Mountain",
    "Dogs enjoying the cool breeze",
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

let arrayImagesJapan = [
    'castle.jpg',
    'fuji-san-flower-field.jpg',
    'fuji-san-temple.jpg',
    'japanese-streets.jpg',
    'karate-fighter.jpg',
    'kimono.jpg',
    'lake-trees-fall.jpg',
    'lampignon.jpg',
    'matcha.jpg',
    'mitarashi-dango.jpg',
    'onigiri.jpg',
    'onsen-winter.jpg',
    'ricefield.jpg',
    'sake-production.jpg',
    'sakura-mochi.jpg',
    'shinto-shrine.jpg',
    'sumo-fighters.jpg',
    'sushi.jpg',
    'temple-forrest- sun-rays.jpg',
    'temple-impressive.jpg',
    'tokyo.jpg'
];

let arrayDescriptionsJapan = [
    "old castle",
    "field of Flowers with Fuji-San in the distance",
    "old Temple with Fuji-San in the distance",
    "small Street with lampignons",
    "karate Fighter at sunset",
    "Kimonos - traditional garment",
    "beautiful Lake in fall",
    "Lampignion",
    "traditional Matcha - japanese green tea",
    "mitarashi dango - japanese candy",
    "Onigiri - filled riche balls",
    "Onsen in winter - hot spring",
    "rice field",
    "Sake production - traditional rice wine",
    "sakura mochi - traditional candy",
    "shinto shrine",
    "sumo fighters",
    "Sushi",
    "wooden Temple in Forests",
    "impressive Temple",
    "big crossing in Tokyo"
];

// script.js at end of body instead of head (to let addEventListener work)



// TO SWITCH BETWEEN ARRAYS
let arrayImagesCurrent = [];
let arrayDescriptionsCurrent = [];

// TO SWITCH BETWEEN H1-TITLES
let titleNature = 'Natur erleben';
let titleJapan = 'Kultur und Kulinarik Japans entdecken';



// GET DIALOG-FIELD
let dialogRef = document.getElementById('dialog');

// DIALOG: TO COUNT IMAGES
let slideShowCounter = 0;





// USE ARROWKEYS TO SWICH TROUGH .FILTERBUTTONS        (BEVOR .THUMBBUTTONS EXISTS)
// out of function to make it work befor activating a btn
document.querySelectorAll('.filterButtons').forEach((btn, index, allButtons) => {

    btn.addEventListener('keydown', (event) => {

        // navigate through .filterButtons with "->"  
        if (event.key === "ArrowRight") {
            event.preventDefault();
            let next = (index + 1) % allButtons.length;
            allButtons[next].focus();
        }

        // navigate through .filterButtons with "<-"     
        if (event.key === "ArrowLeft") {
            event.preventDefault();
            let prev = (index - 1 + allButtons.length) % allButtons.length;
            allButtons[prev].focus();
        }
    });
});





// TO ACTIVATE RENDERTHUMBNAILS WITH CHOOSEN ARRAYS (NATURE/JAPAN)
// TO RENDER H1-TITLE
function renderFiltered(i) {

    // get html-element h1
    let h1 = document.getElementById('title');

    // reset content
    h1.innerHTML = '';
    arrayImagesCurrent = '';
    arrayDescriptionsCurrent = '';

    // give new content
    if (i == 'nature') {
        arrayImagesCurrent = arrayImagesNature;
        arrayDescriptionsCurrent = arrayDescriptionsNature;

        h1.innerHTML = titleNature;
        renderThumbnails(i);
    }
    if (i == 'japan') {
        arrayImagesCurrent = arrayImagesJapan;
        arrayDescriptionsCurrent = arrayDescriptionsJapan;

        h1.innerHTML = titleJapan;
        renderThumbnails(i);
    }

    // use ArrowKeys to swich trough .thumbButtons and between .filterButtons and .thumbButtons
    document.querySelectorAll('.filterButtons, .thumbButtons').forEach((button, index, allButtons) => {

        button.addEventListener('keydown', (event) => {

            // navigate through all buttons with "->"   
            if (event.key === "ArrowRight") {
                event.preventDefault();
                let next = (index + 1) % allButtons.length;
                allButtons[next].focus();
            }

            // navigate through all buttons with "<-"    
            if (event.key === "ArrowLeft") {
                event.preventDefault();
                let prev = (index - 1 + allButtons.length) % allButtons.length;
                allButtons[prev].focus();
            }
        });
    });

    // navigate through .thumbButtons, .filterButtons, #title with ArrowKeys
    ButtonsH1ArrowNavigation();
}



// CREATE THUMBS (IMAGE-LIST)   -> used in renderFiltered(i)
function renderThumbnails() {
    let thumbnails = document.getElementById('thumbnails');
    thumbnails.innerHTML = '';
    // show images
    arrayImagesCurrent.forEach((file, arrayIndex) => {
        thumbnails.innerHTML += thumbsContent(file, arrayIndex);
    });

    // add onclick-events to .thumbButtons
    // (element, index, array) -> btn zur Nutzung spezifisch, allButtons zum Arbeiten mit Liste (navigation)
    document.querySelectorAll('.thumbButtons').forEach((button, index, allButtons) => {

        // open dialog with onclick
        button.addEventListener('click', () => {
            openDialog(index);
        });

        button.addEventListener('keydown', (event) => {

            // navigate through thumbnails with "->"
            if (event.key === "ArrowRight") {
                event.preventDefault();
                let next = (index + 1) % allButtons.length;
                allButtons[next].focus();
            }

            // navigate through thumbnails with "<-"
            if (event.key === "ArrowLeft") {
                event.preventDefault();
                let prev = (index - 1 + allButtons.length) % allButtons.length;
                allButtons[prev].focus();
            }

        });
    });

    // focus on first thumbnail after rendering
    // querySelector vs querySelectorAll -> returns just first match (insteas of all matches)
    let firstThumb = document.querySelector('.thumbButtons');  // first btn
    firstThumb.focus();
}



// CREATE HTML-PART FOR THUMBNAILS  -> used in renderThumbnails()
function thumbsContent(file, arrayIndex) {

    // class              for querySelectorAll(.thumbButtons)
    // data-image-index   to count through images
    // tabindex           to walk through with tab-key
    return ` 
            <li>    
            <figure>
            <button class="thumbButtons" data-image-index="${arrayIndex}" aria-haspopup="dialog" aria-label="open image in big view">
                <img 
                    src="./assets/images/${file}"           
                    alt="${arrayDescriptionsCurrent[arrayIndex]}"
                >
            </button>
            <figcaption>${arrayDescriptionsCurrent[arrayIndex]}</figcaption>   
            </figure> 
            </li>    
        `;  // richtige Reihenfolge, da:
    // - img = direkter Inhalt von button
    // - figcaption gehört zu figure (nicht zu button)
}



// NAVIGATE THROUGH .THUMBBUTTONS, .FILTERBUTTONS, #TITLE WITH ARROWKEYS  -> used in renderFiltered()
function ButtonsH1ArrowNavigation() {
    let elements = document.querySelectorAll('.filterButtons, .thumbButtons, #title');

    elements.forEach((hop, i) => {
        hop.addEventListener('keydown', (event) => {

            if (event.key == "ArrowRight") {
                event.preventDefault();
                elements[(i + 1) % elements.length].focus();
            }

            if (event.key == "ArrowLeft") {
                event.preventDefault();
                elements[(i - 1 + elements.length) % elements.length].focus();
            }
        })
    })
}





// OPEN DIALOG
function openDialog(imageIndex) {
    dialog.showModal();
    dialog.classList.add('opened');

    // give Counter the number of named Index
    slideShowCounter = parseInt(imageIndex);
    dialogContents(slideShowCounter);
}


// CLOSE DIALOG
function closeDialog() {
    dialog.close();
    dialog.classList.remove('opened');

    // focus on current thumbnail-img after dialog closes
    // querySelector vs querySelectorAll -> returns just first match (insteas of all matches)
    currentThumb = document.querySelector(`[data-image-index="${slideShowCounter}"]`);
    currentThumb.focus();
}





// DIALOG: CREATE CONTENT   -> used in openDialog(), backwardsDialog(), forwardsDialog()
function dialogContents(slideShowCounter) {
    document.getElementById('dialogFileTitle').innerHTML =
        arrayImagesCurrent[slideShowCounter];

    document.getElementById('dialogDescription').innerHTML =
        arrayDescriptionsCurrent[slideShowCounter];

    document.getElementById('dialogImage').innerHTML =
        `<img src="./assets/images/${arrayImagesCurrent[slideShowCounter]}">`;

    document.getElementById('dialogCounter').innerHTML =
        `${parseInt(slideShowCounter) + 1} / ${arrayImagesCurrent.length}`;
}





// DIALOG: NAVIGATE BACKWARDS WITH ARROWKEY
function backwardsDialog() {
    slideShowCounter--;

    // if firstImg reached, then Counter=lastIMG
    if (slideShowCounter < 0) {
        slideShowCounter = arrayImagesCurrent.length - 1;
    }
    dialogContents(slideShowCounter);
};



// DIALOG: NAVIGATE FORWARDS WITH ARROWKEY
function forwardsDialog() {
    slideShowCounter++;

    // if lastIMG reached, then Counter=firstImg
    if (slideShowCounter >= arrayImagesCurrent.length) {
        slideShowCounter = 0;
    }
    dialogContents(slideShowCounter);
};





// // // WORKS NOT FOR USAGE OF KEYS (EVENT.CLIENT ALWAYS SAYS 0.0!) // // //
// // CLOSE DIALOG WHEN CLICKING OUTSIDE     

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



// DIALOG: CLOSE WHEN CLICKING OUTSIDE (DON'T CLOSE AT EVERY KEY (<-, ->, ECT.))
// event.target         element which is activated (without bubbling-effect)
dialogRef.addEventListener('click', (event) => {
    if (event.target === dialogRef) {
        closeDialog();
    }
});     // Übersetzt:
// „Schließe den Dialog nur wenn Klick auf Dialog-Fläche selbst (oder außerhalb...)!
// -> nur gaaaaanz am DialogRand, falls padding>0! (Innenleben = Header, Section, Footer)



// // DIALOG: USE KEYBOARD TO NAVIGATE (ESC, <-, ->)
dialogRef.addEventListener('keydown', (event) => {
    if (event.key === "Escape") { closeDialog(); }
    if (event.key === "ArrowLeft") { backwardsDialog(); }
    if (event.key === "ArrowRight") { forwardsDialog(); }
})