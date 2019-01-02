var x = require('./renderer.js');

function changeLanguage(language) {
  // Set the model language
  x.monaco.editor.setModelLanguage(x.editor.getModel(), language);
}

function filterFunction() {
  var input, filter, ul, li, a, i, div, txtValue;
  input = document.getElementById("dropdownInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("dropdown-content");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

function dropDown() {
  document.getElementById("dropdown-content").classList.toggle("show");
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
