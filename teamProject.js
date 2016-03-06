function renderGrid(){
    var blocks = document.getElementById("grid_container").children;
    var pad = 10, cols = 4, newleft, newtop;
    for(var i = 1; i < blocks.length; i++){
        if (i % cols == 0) {
            newtop = (blocks[i-cols].offsetTop + blocks[i-cols].offsetHeight) + pad;
            blocks[i].style.top = newtop+"px";
        } else {
            if(blocks[i-cols]){
                newtop = (blocks[i-cols].offsetTop + blocks[i-cols].offsetHeight) + pad;
                blocks[i].style.top = newtop+"px";
        }
            newleft = (blocks[i-1].offsetLeft + blocks[i-1].offsetWidth) + pad;
            blocks[i].style.left = newleft+"px";    
        }
    }
}
window.addEventListener("load", renderGrid, false);
window.addEventListener("resize", renderGrid, false);
window.addEventListener("scroll", changeNav, false);



//Feedback Form Functions
var rating;

function mySubmitFunction(event) {
    
    if (validateEmail() && validateName(personName)) {
        
    } else {
        event.preventDefault();
      
    }
}

function validateEmail() {
    var x = document.getElementById("email");
    var email = x.value;
    var regex1 = /^(\w+)@([a-z]+)\.(com|ca|org|net|(co(m)?.[a-z][a-z])?)$/;
    if(regex1.test(email)) {
        x.style.backgroundColor = "white";
    } else {        
        x.style.backgroundColor = "#ffcccc";
    }
    return regex1.test(email);
}

function validateName(personName) {
    var x = document.getElementById("personName");
    var name = x.value;
    var regex2 = /^[a-zA-Z][a-z]+([\sa-zA-Z])+\s{0,}$/;
    if(regex2.test(name)) {
        x.style.backgroundColor = "white";
    } else {        
        x.style.backgroundColor = "#ffcccc";
    }
    return regex2.test(name);
}

function getStars(int){
    var x = document.getElementById("firstStar");
    var c = int;
    for (i = 0; i < 5; ++i) {
         
         if(c > 0){
            --c;
            x.innerHTML = "★";
            x.style.color = "yellow";
            
         } else {            
            x.innerHTML = "☆";
            x.style.color = "black";
         }
         x = x.previousElementSibling; 
    }
}
