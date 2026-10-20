
var picture1 = document.getElementById("1st");
var picture2 = document.getElementById("2nd");
var picture3 = document.getElementById("3rd");
var picture4 = document.getElementById("4th");
var picture5 = document.getElementById("5th");

var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var replay = document.getElementById("replay");
var foodchoice = document.getElementById("foodchoice");


picture2.style.display = "none";
picture3.style.display = "none";
picture4.style.display = "none";
picture5.style.display = "none";
foodchoice.style.display = "none";
replay.style.display = "none";

choice1.addEventListener("click", function() {
    picture1.style.display = "none";
    picture2.style.display = "block";

    setTimeout(function() {
        picture2.style.display = "none";
        picture3.style.display = "block";

   
        setTimeout(function() {
            replay.style.display = "block";
        }, 3000);

    }, 3000);
});

choice2.addEventListener("click", function() {
    picture1.style.display = "none";
    picture4.style.display = "block";

    setTimeout(function() {
        picture4.style.display = "none";
        picture5.style.display = "block";

        foodchoice.style.display = "block";

        setTimeout(function() {
            replay.style.display = "block";
        }, 3000);

    }, 3000);
});


replay.addEventListener("click", function() {
    window.location.href = "index.html";
});

