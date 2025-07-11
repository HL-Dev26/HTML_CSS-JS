const Cliquer_moi = document.getElementById("monBouton");
const Reinitialiser = document.getElementById("Reinitialiser");
const clic = document.getElementById("click");

Cliquer_moi.addEventListener("click", event =>{

    let compteur = click.innerText; // récupérer la valeur 
    compteur = parseInt(compteur); // Convertir en INT
    compteur++;
    click.innerText = compteur; // renvoi de la valeur dans le DOM

});

Reinitialiser.addEventListener("click", event =>{

    let compteur = 0;
   click.innerText = compteur;
});