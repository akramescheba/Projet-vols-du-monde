//affichage modal
$("#myModal").on("shown.bs.modal", function () {
  $("#myInput").trigger("focus");
});

//ajout vol
var list = document.getElementById("users");

function addUser() {
  var Heure = document.getElementById("Heure").value;
  var Nom = document.getElementById("Nom").value;
  var Depart = document.getElementById("Depart").value;
  var Destination = document.getElementById("Destination").value;
  var tbodyRef = document
    .getElementById("table")
    .getElementsByTagName("tbody")[0];
  var rowCount = $("#table tr").length;
  // insertion ligne a la fin de table
  var newRow = tbodyRef.insertRow();

  // donner id a la ligne
  newRow.id = "tr-" + rowCount;

  // creation boutton
  let btn = document.createElement("button");

  // creation fonction delete avec le id
  btn.innerHTML = "Delete";

  btn.onclick = function () {
    var row = document.getElementById("tr-" + rowCount);
    row.parentNode.removeChild(row);
  };

  // Append a nom
  var newHeure = document.createTextNode(Heure);
  var newCell = newRow.insertCell();
  newCell.appendChild(newHeure);
  // Append a nom
  var newNom = document.createTextNode(Nom);
  var newCell = newRow.insertCell();
  newCell.appendChild(newNom);
  // Append a nom
  var newDepart = document.createTextNode(Depart);
  var newCell = newRow.insertCell();
  newCell.appendChild(newDepart);
  // Append a nom
  var newDestination = document.createTextNode(Destination);
  var newCell = newRow.insertCell();
  newCell.appendChild(newDestination);
  // Append  buton
  var newCell = newRow.insertCell();
  newCell.appendChild(btn);
  return false;
}

// Reset form après la fermeture
function reset() {
  document.getElementById("tache").value = "";
}

function addTache() {
  var tache = document.getElementById("tache").value;
  var tbodyRef = document
    .getElementById("table")
    .getElementsByTagName("tbody")[0];
  var rowCount = $("#table tr").length;
  // insertion ligne a la fin de table
  var newRow = tbodyRef.insertRow();

  // donner id a la ligne
  newRow.id = "tr-" + rowCount;

  // creation boutton
  let btn = document.createElement("button");

  // creation fonction delete avec le id
  btn.innerHTML = "Delete";

  btn.onclick = function () {
    var row = document.getElementById("tr-" + rowCount);
    row.parentNode.removeChild(row);
  };

  // Append a tache
  var newNom = document.createTextNode(tache);
  var newCell = newRow.insertCell();
  newCell.appendChild(newNom);

  // Append  buton
  var newCell = newRow.insertCell();
  newCell.appendChild(btn);
  return false;
}

// Reset form après la fermeture
function reset() {
  document.getElementById("tache").value = "";
}
