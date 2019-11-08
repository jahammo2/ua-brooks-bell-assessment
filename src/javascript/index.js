// I have not had to add "use strict" in in a long time but if
// I don't have modern tools, I should be using it
"use strict";

function addChildRow(rowContainer, text) {
  var row = document.createElement('li');

  row.className = 'c-row';
  row.innerText = text;

  rowContainer.appendChild(row);
}

function toggleRows(e) {
  // I would have used const/let but IE10 does not
  // support that so have to use old-fashioned vars
  var text = e.target.dataset.rowtext;
  var rowContainer = document.getElementById('rows-container');

  rowContainer.innerHTML = null;

  for (var i = 0; i < 5; i += 1) {
    addChildRow(rowContainer, text);
  }
}

function setEventListeners() {
  var buttons = document.getElementsByClassName('c-toggle-button');

  for (var i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', toggleRows);
  }
}

setEventListeners();
