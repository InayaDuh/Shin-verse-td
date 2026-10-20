var picture1 = document.getElementById("1st");
var picture2 = document.getElementById("2nd");
var picture3 = document.getElementById("3rd");
var picture4 = document.getElementById("4th");
var picture5 = document.getElementById("5th");
picture2.style.display = "none";
picture3.style.display = "none";
picture4.style.display = "none";
picture5.style.display = "none";
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
choice1.addEventListener("click",function(){
picture1.style.display ="none";
    picture2.style.display = "block";

setTimeout(function(){
    picture2.style.display = "none";
    picture3.style.display = "block";
},3000);
 setTimeout(function(){
        window.location.href="evening.html";
    },2000);
});

choice2.addEventListener("click",function(){
   picture4.style.display = "block"; 
   picture1.style.display = "none";

setTimeout(function(){
    picture4.style.display = "none";
    picture5.style.display = "block";
},3000);
 setTimeout(function(){
        window.location.href="evening.html";
    },6000);});
