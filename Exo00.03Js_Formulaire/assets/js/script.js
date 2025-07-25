const Prenom = document.getElementById('Prenom');
const Age = document.getElementById('Age');
const Valider = document.getElementById('Valider');
const Vider = document.getElementById('Vider');
const txt = document.getElementById('txt');
const txt2 = document.getElementById('txt2');
const txt3 = document.getElementById('txt3')



function validerSaisie(){



    if(Prenom.value.trim() === "" || (Age.value.trim() === "" || Age.value === !Number || Age.value <= 0)){
        txt.textContent = "Compléter/corriger le formulaire.";

    }
    else if(Age.value >= 18){
        txt.innerHTML = "Bonjour <span>" + Prenom.value + "</span> votre âge est : <span>" + Age.value + "</span>.";
        txt2.innerHTML = "Vous êtes <span>majeur</span>."
    }
    else{
        txt.innerHTML = "Bonjour <span>" + Prenom.value + "</span> votre âge est : <span>" + Age.value + "</span>.";
        txt2.innerHTML = "Vous êtes <span>mineur</span>."
    }

}

function validerRetraite(){

    if(Age.value < 64){
        txt3.innerHTML = "Il vous reste <span>"+ (64 - parseInt(Age.value)) +"</span> année(s) avant la retraite"
    }
    else if(Age.value > 64){
        txt3.innerHTML = "Vous êtes à la retraite depuis <span>"+ (parseInt(Age.value - 64)) +"</span> année(s)"
    }
    else{
        txt3.textContent = "Vous prenez votre retraite cette année !"
    }

}


function viderSaisie(){

    Prenom.value = "";
    Age.value = "";
    txt.textContent = "";
    txt2.textContent = "";
    txt3.textContent = "";

}
Valider.addEventListener('click',validerSaisie,)
Valider.addEventListener('click',validerRetraite)
Vider.addEventListener('click',viderSaisie )
console.log(Valider)