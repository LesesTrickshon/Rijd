// Array Graber
const clear = [];
if (localStorage.getItem("array") === null) {
    localStorage.setItem("array", JSON.stringify(clear));
}
const array = JSON.parse(localStorage.getItem("array"));

// Creates a div for every row and puts da info in
const container = document.getElementById("container");

for (let i = 0; i < array.length; i++){
    const div = document.createElement("div");
    div.className = "info";

    for (let j = 0; j < 4; j++) {
        const p = document.createElement("p");
        if (j === 0){
            p.textContent = String(`Datum: ${array[i][j]}`);
        } else if (j === 1){
            p.textContent = String(`Strecke: ${array[i][j]}km`);
        } else if (j === 2){
            p.textContent = String(`Startzeit: ${array[i][j]}`);
        } else if (j === 3){
            p.textContent = String(`Ankunft: ${array[i][j]}`);
        }

        div.appendChild(p);
    }

    container.appendChild(div);
}