const Prenom = document.getElementById('Prenom');
const Age = document.getElementById('Age');
const Valider = document.getElementById('Valider');
const Vider = document.getElementById('Vider');
const txt = document.getElementById('txt');



function validerSaisie(){



    if(Prenom.value.trim() === "" || (Age.value.trim() === "" || Age.value === !Number || Age.value <= 0)){
        txt.textContent = "Compléter/corriger le formulaire.";

    }
    else if(Age.value >= 18){
        txt.textContent = "Bonjour " + Prenom.value + "votre âge est : " + Age.value + ".";
        txt2.textContent = "Vous êtes majeur."
    }
    else{
        txt.textContent = "Bonjour " + Prenom.value + "votre âge est : " + Age.value + ".";
        txt2.textContent = "Vous êtes mineur."
    }
}

function viderSaisie(){

    Prenom.value = "";
    Age.value = "";
    txt.textContent = "";
    txt2.textContent = "";

}
Valider.addEventListener('click',validerSaisie)
Vider.addEventListener('click',viderSaisie )
console.log(Valider)