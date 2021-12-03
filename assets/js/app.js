let dechets = [
    ["boiteDeConserve", "green"],
    /*
    "bouteillePlasticVide",
    "bouteillesPlastic",
    "bouteilleVerre",
    "bouteilleVerre2",
    "briqueLait",
    "carton",
    "dechetsAlimentaires",
    "journaux",
    "yaourt"
    */
];
const boxes = document.querySelectorAll(".case");
const containerTrash = document.querySelector(".container-container-base");
let printRandomTrash = document.querySelector(".base");


let random = Math.floor(Math.random() * dechets.length);

printRandomTrash.src = `/assets/img/${dechets[random][0]}.jpg`
printRandomTrash.id = dechets[random][1]

printRandomTrash.addEventListener('dragstart', dragStart);
printRandomTrash.addEventListener('dragend', dragEnd);
printRandomTrash.addEventListener("drop", dragDrop);

//apply at the first time a class for apply an style when we grab the image, and at the second time this function apply an class undefined for delete the BG
function dragStart() {
    this.classList += ' tenu';

    setTimeout(() => (this.classList = 'invisible'), 0);
}

//This function apply an class 'base' when the drag is over
function dragEnd() {
    this.className = 'base';
}

//A loop for apply an addEventListener for each element of box
for (const box of boxes) {
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', dragDrop);
}

// This function is for turn off the Default comportment when the drag are over
function dragOver(e) {
    e.preventDefault();

}

// This function is for turn off the Default comportment when u enter on a box whith a image grab
function dragEnter(e) {
    e.preventDefault();

}

//This function is for apply a style when u leave one box
function dragLeave(e) {
    e.preventDefault();


}

//This function is for apply an style when u drop something, and it's for print the image u have dropped
function dragDrop(e) {
    e.preventDefault();
if (this.id === printRandomTrash.id){

}
    printRandomTrash.remove();


    const imgCreated = document.createElement("img");
    random = Math.floor(Math.random() * dechets.length);
    imgCreated.classList = "base";
    imgCreated.src = `/assets/img/${dechets[random]}.jpg`;
    imgCreated.draggable = "true";
    imgCreated.addEventListener('dragstart', dragStart);
    imgCreated.addEventListener('dragend', dragEnd);
    containerTrash.append(imgCreated);
    printRandomTrash = document.querySelector(".base");

}


