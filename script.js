let ImageTitles = [
    'beach-mountain-snow-sand.jpg',
    'cloud-sea-village.jpg',
    'field-tree-pink-sunset.jpg',
    'forest-tree-tube.jpg',
    'lake-dessert-mountain.jpg',
    'road-idyllic-village.jpg',
    'scotland-cliff.jpg'
];

let Images = [];

// function openDialog() / closeDialog()
let dialogRef = document.getElementById('dialogImage'); 


function renderImages() {
    let contentRef = document.getElementById('thumbnails');
    /**
     * pull images
     * show images as thumbnails
     */
}

// onklick-event auf fotos setzen
function openDialog() {
    dialogRef.showModal();
}

// onklick-event im dialog setzen
function closeDialog() {
    dialogRef.close();
}