let dechets = [
    "boiteDeConserve",
    "bouteillePlasticVide",
    "bouteillesPlastic",
    "bouteilleVerre",
    "bouteilleVerre2",
    "briqueLait",
    "carton",
    "dechetsAlimentaires",
    "journaux",
    "yaourt"

];

let random = Math.floor(Math.random() * dechets.length);
const box = document.querySelectorAll(".case");
let printRandomTrash = document.querySelector(".base");
const containerTrash = document.querySelector(".container-container-base");


printRandomTrash.style.background = "url(/assets/img/" + dechets[random] + ".jpg)";
printRandomTrash.style.backgroundSize = "200px";
printRandomTrash.style.backgroundRepeat = "no-repeat";

printRandomTrash.addEventListener('dragstart', dragStart);
printRandomTrash.addEventListener('dragend', dragEnd);

//apply at the first time a class for apply an style when we grab the image, and at the second time this function apply an class undefined for delete the BG
function dragStart() {
    this.className += ' tenu';

    setTimeout(() => (this.className = 'invisible'), 0);
}

//This function apply an class 'base' when the drag is over
function dragEnd() {
    this.className = 'base';
}

//A loop for apply an addEventListener for each element of box
for (const vide of box) {
    vide.addEventListener('dragover', dragOver);
    vide.addEventListener('dragenter', dragEnter);
    vide.addEventListener('dragleave', dragLeave);
    vide.addEventListener('drop', dragDrop);
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
function dragLeave() {
    this.className = "case";

}

//This function is for apply an style when u drop something, and it's for print the image u have dropped
function dragDrop() {

    this.className = "case";
    this.append(printRandomTrash);




    const divCreated = document.createElement("div");
    random = Math.floor(Math.random() * dechets.length);
    divCreated.classList = "base";
    divCreated.style.background = "url(/assets/img/" + dechets[random] + ".jpg)";
    divCreated.style.backgroundSize = "200px";
    divCreated.style.backgroundRepeat = "no-repeat";
    divCreated.draggable = "true";
    divCreated.addEventListener('dragstart', dragStart);
    divCreated.addEventListener('dragend', dragEnd);
    printRandomTrash.style.display = "none";
    console.log("dropped");

}


