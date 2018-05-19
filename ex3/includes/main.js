window.onload=function addSquare(){
var plus=document.getElementById("plus");
}
plus.onclick=function(){
var nodeSection=document.createElement("section")
nodeSection.style.backgroundColor="black";
nodeSection.style.opacity=randomOpacity();
nodeSection.style.cssFloat="left";
document.getElementById("myMain").appendChild(nodeSection);
} 
function randomOpacity(){
    
    var opac=0;
    opac=(Math.random());
    console.log(opac);
    return opac;
   
}
nodeSection.hover(function(){
    nodeSection.style.backgroundColor="white";
})
