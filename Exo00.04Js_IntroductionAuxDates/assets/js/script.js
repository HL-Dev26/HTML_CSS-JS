let today;
const myDate = document.getElementById('myDate');
const calculate = document.getElementById('calculate');
const result = document.getElementById('result');
const zodiac = document.getElementById('zodiac')

/**
 * Calcule l'age à partir de la date fournie dans le champ "myDate"
 * 1. Récupérer la valeur dans le champ "myDate"
 * 2. Vérifier la validité de la date (format, date dans le passé)
 *      2.1 : Si la date est incorrecte : afficher le message d'erreur
 *      2.2 : Retour à l'étape 1
 * 3. Afficher la date au format français (DD/MM/YYYY) et l'heure au format (HH:II:SS).
 * 4. Calculer et afficher l'âge à partir de la date fournie.
 * 
 */
function calculateAge() {
    result.textContent = ""; 
    let userDate = myDate.value; // Récupère la valeur du champ sous forme de chaine de caractères
    userDate = Date.parse(userDate); // Convertit la chaine et nombre de millisecondes depuis EPOCH
    userDate = new Date(userDate); // Crée une instance de Date 
    today = new Date(); // date d'aujourd'hui
    

    if(userDate > today) {
        result.textContent = "ERREUR : Sélectionnez une date dans le passé.";
        return;
    }

    let dateFr = userDate.toLocaleDateString('fr-FR'); // Récupération de la date au format Français (DD/MM/YYYY)
    let timeFr = userDate.toLocaleTimeString(); // Récupération de l'heure au format HH:II:SS

    result.innerHTML = "<hr>Vous êtes né(e) le <span>" + dateFr + "</span> à <span>" + timeFr + "</span>";

    let dateDiff = today - userDate;
    dateDiff = dateDiff / 1000 / 60 / 60 / 24 / 365.25; // convertit millescondes en années
    dateDiff = Math.floor(dateDiff); // on conserve la partie entière du nombre, on aurait pu utiliser "parseInt(dateDiff)"

    result.innerHTML += "<br><br>Il s'est écoulé " + dateDiff + " année(s) depuis votre naissance. <hr>";
    zodiac.innerHTML = "Votre signe du zodiaque est : <span>" + SigneZodiaque(userDate) +"</span>";
}

calculate.addEventListener('click', calculateAge, SigneZodiaque);
/**
 * trouver la date selon le signe du zodiac
 * @param {date} _userDate 
 * @returns chaine de charatere signe du zodiac
 */
function SigneZodiaque(_userDate) {
    const jour = _userDate.getDate();
    const mois = _userDate.getMonth() + 1; // Les mois commencent à 0 en JavaScript

    if ((mois === 3 && jour >= 21) || (mois === 4 && jour <= 19)) {
        return "Bélier";
    } else if ((mois === 4 && jour >= 20) || (mois === 5 && jour <= 20)) {
        return "Taureau";
    } else if ((mois === 5 && jour >= 21) || (mois === 6 && jour <= 20)) {
        return "Gémeaux";
    } else if ((mois === 6 && jour >= 21) || (mois === 7 && jour <= 22)) {
        return "Cancer";
    } else if ((mois === 7 && jour >= 23) || (mois === 8 && jour <= 22)) {
        return "Lion";
    } else if ((mois === 8 && jour >= 23) || (mois === 9 && jour <= 22)) {
        return "Vierge";
    } else if ((mois === 9 && jour >= 23) || (mois === 10 && jour <= 22)) {
        return "Balance";
    } else if ((mois === 10 && jour >= 23) || (mois === 11 && jour <= 21)) {
        return "Scorpion";
    } else if ((mois === 11 && jour >= 22) || (mois === 12 && jour <= 21)) {
        return "Sagittaire";
    } else if ((mois === 12 && jour >= 22) || (mois === 1 && jour <= 19)) {
        return "Capricorne";
    } else if ((mois === 1 && jour >= 20) || (mois === 2 && jour <= 18)) {
        return "Verseau";
    } else if ((mois === 2 && jour >= 19) || (mois === 3 && jour <= 20)) {
        return "Poissons";
    }
   
}




