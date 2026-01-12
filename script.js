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



// to switch between arrays
let arrayImagesCurrent = [];
let arrayDescriptionsCurrent = [];
// to switch between h1-titles
let titleNature = 'Einblicke in die Natur';
let titleJapan = 'Einblicke in Kultur und Kulinarik Japans';



// get dialog-field
let dialogRef = document.getElementById('dialog');

// for dialog arrow-buttons
let slideShowCounter = 0;



// use ArrowKeys to swich trough .filterBtns        (bevor .thumbBtns exists)
// out of function to make it work befor activating a btn
document.querySelectorAll('.filterBtns').forEach((btn, index, allBtns) => {

    btn.addEventListener('keydown', (event) => {

        // navigate through .filterBtns with "->"  
        if (event.key === "ArrowRight") {
            event.preventDefault();
            let next = (index + 1) % allBtns.length;
            allBtns[next].focus();
        }

        // navigate through .filterBtns with "<-"     
        if (event.key === "ArrowLeft") {
            event.preventDefault();
            let prev = (index - 1 + allBtns.length) % allBtns.length;
            allBtns[prev].focus();
        }
    });
});






// to do renderThumbnails with filtered arrays
// to also render h1-titles
function renderFiltered(i) {

    // for specific h1-title
    let h1 = document.getElementById('title');
    h1.innerHTML = '';

    if (i == 'nature') {
        arrayImagesCurrent = '';
        arrayImagesCurrent = arrayImagesNature;

        arrayDescriptionsCurrent = '';
        arrayDescriptionsCurrent = arrayDescriptionsNature;

        h1.innerHTML = titleNature;
        renderThumbnails(i);
    }
    if (i == 'japan') {
        arrayImagesCurrent = '';
        arrayImagesCurrent = arrayImagesJapan;

        arrayDescriptionsCurrent = '';
        arrayDescriptionsCurrent = arrayDescriptionsJapan;

        h1.innerHTML = titleJapan;
        renderThumbnails(i);
    }

    // use ArrowKeys to swich trough .thumbBtns and between .thumbBtns and .filterBtns  
    document.querySelectorAll('.filterBtns, .thumbBtns').forEach((btn, index, allBtns) => {

        btn.addEventListener('keydown', (event) => {

            // navigate through all btns with "->"      (..filterBtns and .thumbBtns)
            if (event.key === "ArrowRight") {
                event.preventDefault();
                let next = (index + 1) % allBtns.length;
                allBtns[next].focus();
            }

            // navigate through all btns with "<-"       (..filterBtns and .thumbBtns)
            if (event.key === "ArrowLeft") {
                event.preventDefault();
                let prev = (index - 1 + allBtns.length) % allBtns.length;
                allBtns[prev].focus();
            }
        });
    });

    // navigate through .thumbBtns, , .filterBtns, #title with ArrowKeys
    BtnsH1ArrowNavigation();

}



// create images and onclick-events
function renderThumbnails() {
    let thumbnails = document.getElementById('thumbnails');
    thumbnails.innerHTML = ''; // reset
    // show images
    arrayImagesCurrent.forEach((file, arrayIndex) => {
        thumbnails.innerHTML += thumbsContent(file, arrayIndex);
    });
    // (element, index, array) -> btn zur Nutzung spezifisch, allBtns zum Arbeiten mit Liste (navigation)
    document.querySelectorAll('.thumbBtns').forEach((btn, index, allBtns) => {

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

    // focus on first thumbnail after rendering
    // querySelector vs querySelectorAll -> returns just first match (insteas of all matches)
    let firstThumb = document.querySelector('.thumbBtns');
    if (firstThumb) { firstThumb.focus(); }
}



// show images -> html-part
function thumbsContent(file, arrayIndex) {

    // class              for querySelectorAll(.thumbBtns)
    // data-image-index   to count through images
    // tabindex           to walk through with tab-key
    return ` 
            <li>    
            <figure>
            <button class="thumbBtns" data-image-index="${arrayIndex}" aria-haspopup="dialog">
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



// navigate through .thumbBtns, , .filterBtns, #title with ArrowKeys
function BtnsH1ArrowNavigation() {
    let elements = document.querySelectorAll('.filterBtns, #title, .thumbBtns');

    elements.forEach((el, i) => {
        el.addEventListener('keydown', (event) => {

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
        arrayImagesCurrent[slideShowCounter];

    document.getElementById('dialogDescription').innerHTML =
        arrayDescriptionsCurrent[slideShowCounter];

    document.getElementById('dialogImage').innerHTML =
        `<img src="./assets/images/${arrayImagesCurrent[slideShowCounter]}">`;

    document.getElementById('dialogCounter').innerHTML =
        `${parseInt(slideShowCounter) + 1} / ${arrayImagesCurrent.length}`;
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
        slideShowCounter = arrayImagesCurrent.length - 1;
    }
    dialogContents(slideShowCounter);
};

function forwardsDialog() {
    slideShowCounter++;

    // if lastIMG reached, then Counter=firstImg
    if (slideShowCounter >= arrayImagesCurrent.length) {
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