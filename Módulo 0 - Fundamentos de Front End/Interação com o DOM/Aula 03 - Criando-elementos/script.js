var fsList = document.querySelectorAll(".multiple-field");
for (var i = 0; i < fsList.length; i++) {
  initMultipleFieldSet(fsList[i]);
}

function initMultipleFieldSet(fs) {
  var addButton = document.createElement("button");
  addButton.textContent = "Adicionar";
  addButton.type = "button"; // propriedade.type = muda o tipo do botão

  fs.appendChild(addButton);

  var firstInput = fs.querySelector("input"); // querySelector = Realiza busca de elementos

  addButton.addEventListener("click", function () {
    var div = document.createElement("div");
    var newInput = document.createElement("input");
    newInput.name = firstInput.name;
    newInput.type = firstInput.type;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    deleteButton.type = "button";

    div.appendChild(newInput);
    div.appendChild(deleteButton);

    deleteButton.addEventListener("click", function () {
      div.remove();
    });

    fs.insertBefore(div, addButton); // Propriedade insertBefore = Insere elementos antes

    /* Insere elementos após o botão.
    fs.appendChild(div);
    */
  });
}

/*var fsList = document.querySelectorAll(".multiple-field");
for (var i = 0; i < fsList.length; i++) {
  initMultipleFieldSet(fsList[i]);
}

function initMultipleFieldSet(fs) {
  var addButton = document.createElement("button");
  addButton.textContent = "Adicionar";
  addButton.type = "button";

  fs.appendChild(addButton);

  var firstInput = fs.querySelector("input");

  addButton.addEventListener("click", function () {
    var div = document.createElement("div");
    var newInput = document.createElement("input");
    newInput.name = firstInput.name;
    newInput.type = firstInput.type;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Excuir";
    deleteButton.type = "button";

    div.appendChild(newInput);
    div.appendChild(deleteButton);

    deleteButton.addEventListener("click", function () {
      div.remove();
    });

    fs.insertBefore(div, addButton);
  });
}
*/
