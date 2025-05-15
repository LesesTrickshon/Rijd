document.getElementById("verbrauch").value = localStorage.getItem("verbrauch");
let clear = [];

function save() {
  let car_type = document.getElementById("car-option").value;
  let verbrauch = document.getElementById("verbrauch").value;
  console.log(car_type);
  console.log(verbrauch);
  localStorage.setItem("car_type", car_type);
  localStorage.setItem("verbrauch", verbrauch);
}

function RM_Data() {
  if (confirm("You are forcefully removing all of your Data!")) {
    localStorage.removeItem("distance");
    localStorage.removeItem("time");
    localStorage.removeItem("emmision");
    localStorage.removeItem("car-option");
    localStorage.removeItem("verbrauch");
    localStorage.removeItem("array");

    window.location.href = "/pages/setup/setup.html";
  }
}

function Reset_Data() {
  if (confirm("You are removing all your booked Data!")) {
    localStorage.setItem("distance", 0);
    localStorage.setItem("time", 0);
    localStorage.setItem("emmision", 0);
    localStorage.setItem("array", JSON.stringify(clear));
  }
}
