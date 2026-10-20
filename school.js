var picture1 = document.getElementById("1st");
var picture2 = document.getElementById("2nd");
var picture3 = document.getElementById("3rd");
var picture4 = document.getElementById("4th");
var picture5 = document.getElementById("5th");
var picture5 = document.getElementById("5th");
var picture6 = document.getElementById("6th");
var picture7 = document.getElementById("7th");
var picture8 = document.getElementById("8th");
var picture9 = document.getElementById("9th");
picture2.style.display = "none";
picture3.style.display = "none";
picture4.style.display = "none";
picture5.style.display = "none";
picture9.style.display = "none";
picture6.style.display = "none";
picture7.style.display = "none";
picture8.style.display = "none";
var first = document.getElementById("first");
var second = document.getElementById("second");
first.addEventListener("click",function(){
picture1.style.display ="none";
    picture2.style.display = "block";

setTimeout(function(){
    picture2.style.display = "none";
    picture3.style.display = "block";
    first.style.display ="none";
     second.style.display ="none";
},3000);
setTimeout(function(){
    picture3.style.display = "none";
    picture4.style.display = "block";
},6000);
setTimeout(function(){
    picture4.style.display = "none";
    picture6.style.display = "block";
},9000);
setTimeout(function(){
    picture6.style.display = "none";
    picture7.style.display = "block";
},11000);
setTimeout(function(){
    picture7.style.display = "none";
    picture8.style.display = "block";
},14000);
setTimeout(function(){
    picture8.style.display = "none";
    picture9.style.display = "block";
},17000);
 setTimeout(function(){
        window.location.href="evening.html";
    },20000);
});

second.addEventListener("click",function(){
   picture1.style.display = "block"; 
  

setTimeout(function(){
    picture1.style.display = "none"; 
    picture5.style.display = "block";
     first.style.display ="none";
     second.style.display ="none";

},3000);
setTimeout(function(){
    picture5.style.display = "none";
    picture6.style.display = "block";
},6000);
setTimeout(function(){
    picture6.style.display = "none";
    picture7.style.display = "block";
},9000);
setTimeout(function(){
    picture7.style.display = "none";
    picture8.style.display = "block";
},11000);
setTimeout(function(){
    picture8.style.display = "none";
    picture9.style.display = "block";
},14000);
 setTimeout(function(){
        window.location.href="evening.html";
    },17000);});
