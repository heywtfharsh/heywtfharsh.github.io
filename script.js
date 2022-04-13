//contact popup

var newWin;

    function openPopup() {
     newWin= window.open('contact.html','Contact Me','width=400,height=300');

     document.onmousedown=focusPopup;
     document.onkeyup=focusPopup;
     document.onmousemove=focusPopup;
    }
  
  function focusPopup(){
      if(!newWin.closed){
        newWin.focus();
      }
  }


//data list selection function

function onInput() {
    var val = document.getElementById("input").value;
    var opts = document.getElementById('dlist').childNodes;
    for (var i = 0; i < opts.length; i++) {
      if (opts[i].value === val) {
        // An item was selected from the list!
        // yourCallbackHere()
        alert(opts[i].value);
        break;
      }
    }
}