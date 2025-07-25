// Variable
const btnIncrease = document.getElementById("btnIncrease"); // récupèrer l'élément HTLM
const btnDecrease = document.getElementById("btnDecrease");
const txtSize = document.querySelector("#txtSize"); // recuperer l'Id # HTML
const txt = document.getElementById("txt");

// Fonction

function changeTextSise(event) {
  console.log(event.target.id); // quel élément a déclenché l'évènement dans les logs

  let btnId = event.target.id;

  let myFontSize = txtSize.value; // récupère la valeur dans le <input id="txtSize">
  myFontSize = parseInt(myFontSize); // conversion en (Int) nombre

  if (isNaN(myFontSize)) {
    // si myFontSize n'est pas un nombre valide
    console.error("nombre invalide");
    alert("Nombre invalide !");
    return;
  }

  if (myFontSize >= 8 && myFontSize <= 48 && btnId === "txtSize") {
    // Do Nothing !
  } else if (myFontSize >= 8 && myFontSize <= 48 && btnId === "btnIncrease") {
    myFontSize++;
  } else if (myFontSize >= 8 && myFontSize <= 48 && btnId === "btnDecrease") {
    myFontSize--;
  } else {
    myFontSize = 16;
  }

  txtSize.value = myFontSize; // on réinjecte la valeur dans le DOM
  txt.style.fontSize = myFontSize + "px"; // On applique la taille au texte en modifiant son style
}



btnIncrease.addEventListener('click', changeTextSise);
btnDecrease.addEventListener('click', changeTextSise);
txtSize.addEventListener('change', changeTextSise);


/*btnIncrease.addEventListener('click', function(event) {   Encienne Méthode
    console.log(this);
    console.log(event);
});*/


/*
btnIncrease.addEventListener('click', () => {           Nouvelle Méthode
    console.log(4, this);
});*/