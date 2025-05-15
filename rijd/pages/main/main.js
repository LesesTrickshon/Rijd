// document.getElementById("distance").innerHTML = 'Gefahrene Strecke: ' + localStorage.getItem("distance").toString() + 'km';
// document.getElementById("time").innerHTML = 'Zeit: ' + localStorage.getItem("time").toString() + 'min';
// document.getElementById("emmision").innerHTML = 'C02 Außstoß: ' + localStorage.getItem("emmision").toString() + 'kg';

const clear = [];
if (localStorage.getItem("array") === null) {
    localStorage.setItem("array", JSON.stringify(clear));
}

const array = JSON.parse(localStorage.getItem("array"));

let streckeTotal = 0;
for (let i = 0; i < array.length; i++){
    streckeTotal += Number(array[i][1]);
}
document.getElementById("distance").innerHTML = `Gefahrene Strecke: ${streckeTotal}km`;