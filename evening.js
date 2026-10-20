
var picture1 = document.getElementById("1st");
var picture2 = document.getElementById("2nd");
var picture3 = document.getElementById("3rd");
var picture4 = document.getElementById("4th");
var picture5 = document.getElementById("5th");
var picture6 = document.getElementById("6th");
var picture7 = document.getElementById("7th");
var picture8 = document.getElementById("8th");
var picture9 = document.getElementById("9th");
var picture10 = document.getElementById("10th");
var picture11 = document.getElementById("11th");

var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");
var fourth = document.getElementById("fourth");
var fifth = document.getElementById("fifth");
var seventh = document.getElementById("seventh");

var replay = document.getElementById("replay");
var play = document.getElementById("play");

picture1.style.display = "block";

picture2.style.display = "none";
picture3.style.display = "none";
picture4.style.display = "none";
picture5.style.display = "none";
picture6.style.display = "none";
picture7.style.display = "none";
picture8.style.display = "none";
picture9.style.display = "none";
picture10.style.display = "none";

replay.style.display = "none";

function playSequence(sequence) {
    play.style.display = "none";
    replay.style.display = "none";

    var pictures = {
        1: picture1,
        2: picture2,
        3: picture3,
        4: picture4,
        5: picture5,
        6: picture6,
        7: picture7,
        8: picture8,
        9: picture9,
        10: picture10,
        11: picture11
    };

    var current = 0;

    for (var number in pictures) {
        pictures[number].style.display = "none";
    }


    pictures[sequence[current]].style.display = "block";

    var timer = setInterval(function () {
        current++;

        if (current < sequence.length) {
            for (var number in pictures) {
                pictures[number].style.display = "none";
            }

            pictures[sequence[current]].style.display = "block";
        } else {
            clearInterval(timer);
            replay.style.display = "block";
        }
    }, 3000);
}

first.addEventListener("click", function () {
    playSequence([1, 5, 10,11]);
});


second.addEventListener("click", function () {
    playSequence([1, 3, 4,11]);
});


third.addEventListener("click", function () {
    playSequence([1, 9, 2,11]);
});


fourth.addEventListener("click", function () {
    playSequence([1, 2,11]);
});


fifth.addEventListener("click", function () {
    playSequence([1, 7, 4,11]);
});


seventh.addEventListener("click", function () {
    playSequence([1, 6, 4,11]);
});


replay.addEventListener("click", function () {
    window.location.href = "index.html";
});

