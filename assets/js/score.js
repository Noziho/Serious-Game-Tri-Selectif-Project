const counter = localStorage.getItem("counter");
const wrongTrashString = localStorage.getItem("WrongTrash");
const wrongTrashArray = JSON.parse(wrongTrashString);
console.log(wrongTrashArray);
document.getElementById("score").innerHTML += counter + "/10";

const buttonRetry = document.getElementById("reTry");
buttonRetry.addEventListener('click', () => {
    document.location = "index.html";
})

for (let i = 0; i < wrongTrashArray.length; i++) {
    document.getElementById("wrongTrash").innerHTML += wrongTrashArray[i] + " poubelle" +"<br>";
}


