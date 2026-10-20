var picture1 = document.getElementById("1st");
var picture2 = document.getElementById("2nd");
picture2.style.display = "none";
setTimeout(function(){
    picture1.style.display = "none";
    picture2.style.display = "block";
},3000);
 setTimeout(function(){
        window.location.href="school.html";
    },6000);
