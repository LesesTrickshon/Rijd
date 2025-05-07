let usage = localStorage.getItem("distance");

if (usage !== null){
    document.getElementById("button").innerHTML = 'Open App'
}

function open_page(){
    if (usage === null){
        window.location.href = '/pages/setup/setup.html';
    }else{
        window.location.href = '/pages/main/main.html';
    }
}