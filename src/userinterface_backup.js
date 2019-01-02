import ReactDOM from 'react-dom';
import React from 'react';
var x = require('./renderer.js');

class Dropdown extends React.Component {
    // constructor(props) {
    //   super(props);
    //
    //   // this.editor = props.editor;
    //   // this.monaco = props.monaco;
    //   // console.log(this.monaco);
    //
    //   // Bind functions
    //   this.changeLanguage = this.changeLanguage.bind(this);
    //   this.filterFunction = this.filterFunction.bind(this);
    //   this.dropDown = this.dropDown.bind(this);
    // }
    changeLanguage(language, x) {
      // Set the model language
      console.log(x);
      x.monaco.editor.setModelLanguage(x.editor, language);
    }

    filterFunction() {
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

    dropDown() {
      console.log(x.monaco);
      document.getElementById("dropdown-content").classList.toggle("show");
    }

    render() {
      return (
        <div id="titlebar">
          <button id="save">Save</button>
          <div className="dropdown">
    			  <button onClick={this.dropDown} className="dropbtn">Dropdown</button>
    			  <div id="dropdown-content" className="dropdown-content">
    			    <input type="text" placeholder="Search.." id="dropdownInput" onKeyUp={this.filterFunction}></input>
    			    <a href="#" onClick={() => this.changeLanguage('python', x)}>Python</a>
    			    <a href="#base">Base</a>
    			    <a href="#blog">Blog</a>
    			    <a href="#contact">Contact</a>
    			    <a href="#custom">Custom</a>
    			    <a href="#support">Support</a>
    			    <a href="#tools">Tools</a>
    			  </div>
    		  </div>
        </div>
      );
    }
}

ReactDOM.render(
  <Dropdown />,
  document.getElementById('root')
);

module.exports = Dropdown;
