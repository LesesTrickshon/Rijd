function eintragen(){
    // Collects all the values from the html elements
    const clear = [];
    const date = document.getElementById("date").value;
    const strecke = document.getElementById("strecke").value;
    const start_fahrt = document.getElementById("start-fahrt").value;
    const ende_fahrt = document.getElementById("ende-fahrt").value;

    // Creates the array if it doesn't already exsist
    if (localStorage.getItem("array") === null) {
        localStorage.setItem("array", JSON.stringify(clear));
    }

    // Cleans the array and adds the new content (BTW these are not chatgpt comments. I am actually commenting this :3)
    let array = JSON.parse(localStorage.getItem("array"));
    array.push([date, strecke, start_fahrt, ende_fahrt]);
    localStorage.setItem("array", JSON.stringify(array));

    // go back to web page
    window.location.href = '/pages/book/book.html'
}
