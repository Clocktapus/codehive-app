var x = require('./renderer.js');
const onChange = require('on-change');

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function updateLineCount() {
    document.getElementById("line-count-text").innerText = x.editor.getModel().getLineCount() + " Lines";
}

function updateCursorInfo() {
  console.log("Cursor moved");
  var line = x.editor.getPosition().lineNumber;
  var col = x.editor.getPosition().column;
  document.getElementById("cursorpos-text").innerText = "Line " + line + ", " + "Col " + col;
}

function updateFilepath() {
  document.getElementById("filepath-text").innerText = x.fileManager.filepath;
}

function changeLanguage(language) {
  // Set the model language
  document.getElementById("dropdown-button").innerText = language; // Update button
  x.monaco.editor.setModelLanguage(x.editor.getModel(), language);
}

// Change indent
function changeIndent(spaces) {
  document.getElementById("indent-button").innerText = "Spaces: " + spaces;
  var tabWidth = parseInt(spaces, 10);
  x.editor.getModel().updateOptions({ tabSize: tabWidth });
}

function filterFunctionLanguage() {
  var input, filter, ul, li, a, i, div, txtValue;
  input = document.getElementById("dropdownLanguage-input");
  filter = input.value.toUpperCase();
  div = document.getElementById("dropdownLanguage-content");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "block";
    } else {
      a[i].style.display = "none";
    }
  }
}

// const pathChangeable = onChange({
//   path: x.fileManager.filepath
// }, () => updateFilepath());

sleep(500).then(() => {
  // When model changes update cursor and line count
  x.editor.onDidChangeModelContent(function(e) {
    updateLineCount();
    updateCursorInfo();
  })
  // On mouse down update cursor
  x.editor.onMouseDown(function (e) {
	   updateCursorInfo();
  });
})

// On enter key change indent
document.getElementById("dropdownIndent-input").onkeydown = function(event) {
    if (event.keyCode == 13) {
        changeIndent(document.getElementById('dropdownIndent-input').value);
    }
}

// Show on click
function dropDownLanguage() {
  document.getElementById("dropdownLanguage-content").classList.toggle("show");
}

function dropDownIndent() {
  document.getElementById("dropdownIndent-content").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
document.getElementById("container").onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
