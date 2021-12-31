// Detecting Button Press

for (let i = 0; i < document.querySelectorAll(".drum").length; ++i) {
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}

function handleClick() {
    // console.log(this.style.color = "#fff");
    // this.style.textShadow = "3px 0 black";
    // var audio = new Audio("sounds/sounds_tom-1.mp3");
    // audio.play(); 

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
}

// Detecting Key Press

document.addEventListener("keypress", function(event) {
    // console.log(event);
    // alert("Key Press Detected!");
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/sounds_tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/sounds_tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/sounds_tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/sounds_tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/sounds_snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/sounds_crash.mp3");
            crash.play();
            break;
        case "l":
            var kick_bass = new Audio("sounds/sounds_kick-bass.mp3");
            kick_bass.play();
            break;
        default:
            console.log(buttonInnerHTML);

    }
}

function buttonAnimation(key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    activeButton.style.textShadow = "3px 0 black";

    setTimeout(function() {
        activeButton.classList.remove("pressed");
        activeButton.style.textShadow = "2px 0 #fff";
    }, 100);
}