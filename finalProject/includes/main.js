function clickCheckBox(){
    var inp=document.getElementById("myInput");
    if(inp.checked){
        document.getElementById("menu").style.visibility="visible";
        var arrowLeft=document.createElement("i");
        arrowLeft.id="arrow";
         document.getElementById("myMain").appendChild(arrowLeft);
        createUser();
        bottomForCloseHam();
    }
    else if(!inp.checked){
        document.getElementById("mySection").remove();
        document.getElementById("arrow").remove();
        document.getElementById("menu").style.visibility="hidden";
        document.getElementById("userImg").remove();
        document.getElementById("userName").remove();
    }
}

function bottomForCloseHam(){
    var newSec=document.createElement("section");
    newSec.id="mySection";
    document.getElementById("myMain").appendChild(newSec);
}
function createUser(){
        var us=document.createElement("img");
        var name=document.createElement("h6");
        name.id="userName";
        name.innerText="עמית דקל\nג׳יפ";
        us.id="userImg"
        us.setAttribute("src", "images/user.png");
        document.getElementById("user").appendChild(us);
        document.getElementById("user").appendChild(name);

}
window.onload=function(){
    
    var park1=document.createElement("img");
    park1.id="park1"
    park1.setAttribute("src", "images/park.png");
    var park2=document.createElement("img");
    park2.id="park2"
    park2.setAttribute("src", "images/park.png");
    var park3=document.createElement("img");
    park3.id="park3";
    park3.setAttribute("src", "images/park.png");
    document.getElementById("myMain").appendChild(park1);
    document.getElementById("myMain").appendChild(park2);
    document.getElementById("myMain").appendChild(park3);

}
$("#btn-secondary").click(function buttonClick(){
    document.getElementById("btn-secondary").remove();
    var thanks=document.createElement("img");
    thanks.id="thanks";
    thanks.setAttribute("src", "images/thanks.png");
    document.getElementById("myMain").appendChild(thanks);
    // $.getJSON("data/colect_park_data.json",function(data){
    //     var x= {id:6,street:"כחול לבן  40 מטר מטר מהיעד**"};
    //     data.push(x);
    // });
    addPointsOfUser();
});
function addPointsOfUser(){
    var points=document.createElement("h6");
    points.id="points";
    points.innerText="סה״כ: 32 נקודות";
    document.getElementById("myMain").appendChild(points);

}

// function initMap(){
//     var location = {lat: -25.363, lng:131.044};
//     var map=new google.maps.Map(document.getElementById("map"),{
//     zoom: 4,
//     center:location
//     });
// }
