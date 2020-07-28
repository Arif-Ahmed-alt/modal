var button=document.querySelector(".btn");
var defaultCard=document.querySelector(".default_card")
var hideCard=document.getElementById("collapse")
var X=document.querySelector("span");


var is_shown=true;
var hide=false;

hideCard.style.display="none"
button.addEventListener("click",function(){
    console.log(hideCard)
   
    if(is_shown==true){
        defaultCard.style.display="none";
        hideCard.style.display="block"
        is_shown=false;
        hide=true;
    }

});
X.addEventListener("click",function(){
    if(hide==true){
        hideCard.style.display="none";
        defaultCard.style.display="block";
        hide=false;
        is_shown=true;
    }
})



