const counter = localStorage.getItem("counter");
console.log(counter);
document.getElementById("score").innerHTML += counter + "/10";