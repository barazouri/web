window.onload=function addSquare(){
    var plus=document.getElementById("plus");
}
plus.onclick=function(){
    var nodeSection=document.createElement("section")
    nodeSection.style.backgroundColor="black";
    var opac=randomOpacity();
    nodeSection.style.opacity=opac;
    nodeSection.style.cssFloat="left";
    nodeSection.onmouseover=(function(){
        nodeSection.style.backgroundColor="white";
        nodeSection.style.opacity=1;
})
    nodeSection.onmouseout=(function(){
        nodeSection.style.backgroundColor="black";
        nodeSection.style.opacity=opac;
})
    document.getElementById("myMain").appendChild(nodeSection);
} 
function randomOpacity(){
    
    var opac=0;
    opac=(Math.random());
    console.log(opac);
    return opac;  
}