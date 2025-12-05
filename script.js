let ArrayImages = [
    '<img src="./assets/images/beach-mountain-snow-sand.jpg" alt="Beach in front of a Mountain">',
    '<img src="./assets/images/chow-chow-dogs-car.jpg" alt="dogs enjoying the cool breeze">',
    '<img src="./assets/images/cloud-sea-village.jpg" alt="Ocean of Clouds">',
    '<img src="./assets/images/crow-crazy.jpg" alt="fuzzy Crow">',
    '<img src="./assets/images/crow.jpg" alt="Crow">',
    '<img src="./assets/images/deers-field.jpg" alt="wild Deers">',
    '<img src="./assets/images/ducklings-ducks.jpg" alt="cuddled up Ducklings">',
    '<img src="./assets/images/elephants.jpg" alt="playful Elephants">',
    '<img src="./assets/images/field-tree-pink-sunset.jpg" alt="single Tree at beautiful Sunset">',
    '<img src="./assets/images/forest-tree-tube.jpg" alt="mystic Trees">',
    '<img src="./assets/images/fox-snow.jpg" alt="Fox in Snow">',
    '<img src="./assets/images/giraffs-tree.jpg" alt="Giraffs with high Tree">',
    '<img src="./assets/images/lake-dessert-mountain.jpg" alt="Lake at mounty Desert">',
    '<img src="./assets/images/lamb-sheep.jpg" alt="mother Sheep with Lamb">',
    '<img src="./assets/images/leopards.jpg" alt="fluffy Leopards">',
    '<img src="./assets/images/lionesses-lions-night.jpg" alt="Lionesses at night">',
    '<img src="./assets/images/monkeys.jpg" alt="little Monkeys">',
    '<img src="./assets/images/rhinos.jpg" alt="mother Rhino with Baby">',
    '<img src="./assets/images/road-idyllic-village.jpg" alt="idyllic Road to Village">',
    '<img src="./assets/images/scotland-cliff.jpg" alt="scottish Cliff">',
    '<img src="./assets/images/sparrows.jpg" alt="Sparrows on Branch">',
    '<img src="./assets/images/vultures-geier.jpg" alt="Vultures in Greens">',
    '<img src="./assets/images/zebras.jpg" alt="Zebras in Greens">'
];


// let ImageTitles = [
//     'beach-mountain-snow-sand.jpg',
//     'chow-chow-dogs-car.jpg',
//     'cloud-sea-village.jpg',
//     'crow-crazy.jpg',
//     'crow.jpg',
//     'deers-field.jpg',
//     'ducklings-ducks.jpg',
//     'elephants.jpg',
//     'field-tree-pink-sunset.jpg',
//     'forest-tree-tube.jpg',
//     'fox-snow.jpg',
//     'giraffs-tree.jpg',
//     'lake-dessert-mountain.jpg',
//     'lamb-sheep.jpg',
//     'leopards.jpg',
//     'lionesses-lions-night.jpg',
//     'monkeys.jpg',
//     'rhinos.jpg',
//     'road-idyllic-village.jpg',
//     'scotland-cliff.jpg',
//     'sparrows.jpg',
//     'vultures-geier.jpg',
//     'zebras.jpg'
// ];


// function openDialog() / closeDialog()
let dialogRef = document.getElementById('dialog');

// show images as thumbnails
function renderImages() {
    let thumbnails = document.getElementById('thumbnails');
    thumbnails.innerHTML = ArrayImages.join('');
}

    // onklick-event auf fotos setzen
function openDialog() {
    dialogRef.showModal();
    dialogRef.classList.add('opened');
}

    // onklick-event im dialog setzen
function closeDialog() {
    dialogRef.close();
}