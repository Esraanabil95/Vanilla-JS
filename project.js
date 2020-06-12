
    var person = window.prompt ("Please Enter your Name");
    if (person != null)
    {
      
       document.write( "<p class='personname'>Welcome" + " " +person+"<p>");
        
    }

    

function starkcolor() {
    document.body.style.backgroundColor = "gray";
  }
  function targaryencolor() {
    document.body.style.backgroundColor = "darkred";
  }
  function lannistercolor() {
    document.body.style.backgroundColor = "#ffd700";
  }
  function baratheoncolor() {
    document.body.style.backgroundColor = "#ffff00";
  }
  function randomcolor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 
    document.body.style.backgroundColor = bgColor;
  }


  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500); }
    function checkTime(i) {
      if (i < 10) {i = "0" + i};  
      return i;
    }

  