let dechets = [
    ["boiteDeConserve", "green"],
    ["bouteillePlasticVide", "yellow"],
    ["bouteillesPlastic", "yellow"],
    ["bouteilleVerre", "green"],
    ["bouteilleVerre2", "green"],
    ["briqueLait", "yellow"],
    ["yaourt", "brown"],
    ["reste", "brown"],
    ["journaux", "blue"],
    ["carton", "blue"]

];

const boxes = document.querySelectorAll(".case");
const containerTrash = document.querySelector(".container-container-base");
let actualTrash;
let printRandomTrash = document.querySelector(".base");
let a = 10;
let random = Math.floor(Math.random() * dechets.length);
let trashWrong = [];

printRandomTrash.src = `/assets/img/${dechets[random][0]}.jpg`;
printRandomTrash.id = dechets[random][1];
printRandomTrash.addEventListener('dragstart', dragStart);
printRandomTrash.addEventListener('dragend', dragEnd);
printRandomTrash.addEventListener("drop", dragDrop);

// function for create a new Img for print random trash.
function createImg () {
    const imgCreated = document.createElement("img");
    random = Math.floor(Math.random() * dechets.length);
    imgCreated.classList = "base";
    imgCreated.src = `/assets/img/${dechets[random][0]}.jpg`;
    imgCreated.draggable = "true";
    imgCreated.addEventListener('dragstart', dragStart);
    imgCreated.addEventListener('dragend', dragEnd);
    imgCreated.id = dechets[random][1];
    printRandomTrash.id = dechets[random][1];
    actualTrash = dechets[random];
    containerTrash.append(imgCreated);
    printRandomTrash = document.querySelector(".base");

}
//apply at the first time a class for apply an style when we grab the image, and at the second time this function apply an class undefined for delete the BG
function dragStart() {
    this.classList += ' tenu';

    setTimeout(() => this.classList = 'invisible', 0);
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

let counter = 0;


//This function is for apply an style when u drop something, and it's for print the image u have dropped
function dragDrop(e) {
    e.preventDefault();
    a--;

    if (this.id === printRandomTrash.id) {
        counter++;
    }
    else {
        trashWrong.push(actualTrash);
    }
    printRandomTrash.remove();
    if (a === 0) {
        localStorage.setItem("counter", counter);
        localStorage.setItem("WrongTrash", JSON.stringify(trashWrong));
        document.location = "score.html";
    }

    createImg();
}