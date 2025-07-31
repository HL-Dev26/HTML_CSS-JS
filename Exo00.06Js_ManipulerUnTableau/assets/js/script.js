const tabl = document.getElementById("tabl");
const table = document.getElementById("table");
const people = ["Mike Dev", "John Makenzie", "Léa Grande"];

/**
 *
 */
people.forEach(function (item, array) {
  // liste des personnes inscrites (item pour les éléments et array pour afficher le tableau)
  //   console.log(item);
  let li = document.createElement("li"); // création de l'élément (li)
  li.textContent = item; // a chaque boucle li s'agrandit avec les items
  tabl.append(li); // tabl ajoute (li)
});

//tableau
//table.innerHTML = "";
let tbody = document.createElement("tbody");
table.appendChild(tbody);

people.forEach((person) => {
  // boucle pour separer nom, prenom et creer l'element (tr)

  let [firstName, name] = person.split(" "); // separation du nom et prenom
  //   console.log([name, firstName]);// verifie dans la console
  let email =
    name.toLowerCase() + "." + firstName.toLowerCase() + "@exemple.com"; // creation d'un email
  //   console.log(email);// verification

  let row = document.createElement("tr"); // creation de (tr)
  tbody.appendChild(row); // ajout de (tr) dans le tableau  
  let ligne = [firstName, name, email];

  console.log(ligne);
  
  ligne.forEach((text) => {

    let td = document.createElement("td"); // Crée un nouveau <td> à chaque boucle
    row.appendChild(td); // ajout de (td) dans le tableau
    td.textContent = text;

    console.log(text);
  });


});

