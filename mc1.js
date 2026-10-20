var picture1 = document.getElementById("1st");
var picture2 = document.getElementById("2nd");
var picture3 = document.getElementById("3rd");
var picture4 = document.getElementById("4th");
var picture5 = document.getElementById("5th");
picture2.style.display = "none";
picture3.style.display = "none";
picture4.style.display = "none";
picture5.style.display = "none";
setTimeout(function(){
    picture1.style.display = "none";
    picture2.style.display = "block";
},3000);
setTimeout(function(){
    picture2.style.display = "none";
    picture3.style.display = "block";
},6000);
setTimeout(function(){
    picture3.style.display = "none";
    picture4.style.display = "block";
},9000);
setTimeout(function(){
    picture4.style.display = "none";
    picture5.style.display = "block";
},11000);
 setTimeout(function(){
        window.location.href="school.html";
    },14000);


