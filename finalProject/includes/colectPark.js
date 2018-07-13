var parks=5;
$(document).ready(function() {
    var json_data=[];
    $.getJSON("data/colect_park_data.json",function(data){
        json_data=data;
    for (row of json_data) {
        var l=document.createElement("li");
        l.innerText=row.street;
        var a=document.createElement("a");
        a.href =  "navigation.html"; // Insted of calling setAttribute
        // location.href = "index.html?Key="+true;
        a.style.textDecoration = "none";
        a.style.listStyle = "none";
        a.appendChild(l);
        if(row.id % 2 == 0)
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
  })
});

