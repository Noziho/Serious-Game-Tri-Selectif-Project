
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
const cases = document.querySelectorAll(".sameSize");
let printRandomTrash = document.getElementById("selectTrash");

    printRandomTrash.style.background = "url(/assets/img/" + dechets[random] + ".jpg)";
    printRandomTrash.style.backgroundSize = "200px";
    printRandomTrash.style.backgroundRepeat = "no-repeat";


