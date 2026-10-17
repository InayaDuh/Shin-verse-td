const button = document.querySelector("button");
const punchCursor = document.getElementById("punch-cursor");

document.addEventListener("mousemove", function(event) {
    punchCursor.style.left = event.clientX + "px";
    punchCursor.style.top = event.clientY + "px";
});

button.addEventListener("mouseenter", function() {
    punchCursor.style.opacity = "1";
});

button.addEventListener("mouseleave", function() {
    punchCursor.style.opacity = "0";
});

button.addEventListener("click", function() {
  starburst();
  setTimeout(function() {
  window.location.href = "morning.html";
},1500);});
function starburst() { 
    const starburst = document.createElement("div");
    starburst.classList.add("starburst");
    for (let i = 0; i < 12; i++) {
        const line = document.createElement("div");
        line.classList.add("line");
        line.style.setProperty("--angle", `${i * 30}deg`);
        line.style.setProperty("--x", `${Math.cos(i * 30 * Math.PI / 180)}px`);
        line.style.setProperty("--y", `${Math.sin(i * 30 * Math.PI / 180)}px`);
        starburst.appendChild(line);
    }
   
    starburst.style.width = "100px";
    starburst.style.height = "100px";
    starburst.style.position = "absolute";
    starburst.style.left = punchCursor.style.left;
    starburst.style.top = punchCursor.style.top;
    starburst.addEventListener("animationend", function() {
        starburst.remove();
    });
    document.body.appendChild(starburst);
}