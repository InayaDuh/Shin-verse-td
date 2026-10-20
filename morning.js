function WakeUp() {
    document.querySelector('h1').textContent = "Oh man..Its morning already!";
    setTimeout(function(){
        window.location.href="mc1.html";
    },2000);
}

function Keepsleeping() {
    document.querySelector('h1').textContent = "I'll wake up now surely..";
    setTimeout(function(){
        window.location.href="mc2.html";
    },2000);
}
