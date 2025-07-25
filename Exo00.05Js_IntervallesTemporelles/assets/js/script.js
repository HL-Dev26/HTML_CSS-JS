const myDate = document.getElementById('mydate')
const myHour = document.getElementById('myHour')
const afficher = document.getElementById('txt')
const calculate = document.getElementById('calculate')
const result = document.getElementById('result')
let today;

function calculateDate(){

    let userDate = myDate.value;
    let userHour = myHour.value;
    userDate = Date.prototype.toLocaleString('fr-FR');
    //userDate = Date.parse(userDate);
    //userDate = new Date(userDate);
    userHour = Date.prototype.toLocaleString();
    today = new Date();

    if (userDate !== today) {
        result.textContent = "ERROR : veulliez entrer la date d'aujourd'hui";
    }

    result.innerHTML = "Aujourd'hui nous somme le <span>" + userDate + "</span> , l'heure courante est : <span>" + userHour + "</span>";

}

    calculate.addEventListener('click', calculateDate)