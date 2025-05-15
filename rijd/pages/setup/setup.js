function save(){
    let car_type = document.getElementById("car-option").value;
    let verbrauch = document.getElementById("verbrauch").value;

    console.log(car_type);
    console.log(verbrauch);

    localStorage.setItem("car_type", car_type);
    localStorage.setItem("verbrauch", verbrauch);

    if (localStorage.getItem("distance") === null || localStorage.getItem("distance") === 0){
        localStorage.setItem("distance", 0);
        localStorage.setItem("time", 0);
        localStorage.setItem("emmision", 0);
        console.log("No User Data found. Created new Variables");
    }

    window.location.href = "/pages/main/main.html";
}

const textInput = document.getElementById('verbrauch');
textInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        save();
    }
});