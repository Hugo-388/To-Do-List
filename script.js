const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function AjouterTâche() {
    if (inputBox.value === "") {
        alert("Vous devez écrire une tâche");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "x";
        li.appendChild(span);
    }
    inputBox.value = "";
    sauvegarde();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        sauvegarde()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        sauvegarde()
    }

}, false);


function sauvegarde() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function montrerTâche() {
    listContainer.innerHTML = localStorage.getItem("data");
}
montrerTâche();