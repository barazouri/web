
var array = ["חניון פרטי 30 שח 160 מטר מהיעד", "חניה כחול לבן 50 מטר מהיעד", "חניון אחוזת חוף 100 מטר מהיעד",
"חניה באפור 30 מטר מהיעד", "חניה עד 12 כחול לבן"];


window.onload= function() {
    for (var i = 0; i < array.length; i++) {
        var l=document.createElement("li");
        l.innerText=array[i];
        var a=document.createElement("a");
        a.href =  "navigation.html"; // Insted of calling setAttribute
        // location.href = "index.html?Key="+true;
        a.style.textDecoration = "none";
        a.style.listStyle = "none";
        a.appendChild(l);
        
        if(i % 2 == 0)
            l.style.backgroundColor = '#ffffff';
        else
            l.style.backgroundColor = '#e0e0e0';

            l.style.textAlign = "center";
            l.style.verticalAlign = "middle";
            l.style.width = "100%";
            l.style.margin = "0px";
            l.style.lineHeight = "680%";
            l.style.fontSize="100%";
            l.style.color="black";
            document.getElementById("myList").appendChild(a);
    }
  };