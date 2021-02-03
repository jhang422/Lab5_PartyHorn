// main.js
function playAud() {
    var input = document.getElementById('volume-number');
    var soun = document.getElementById("horn-sound");
    document.getElementById("horn-sound").volume = (input.value)/100;    
    document.getElementById("horn-sound").play();
};
function changeAir() {
    document.getElementById("horn-sound").src = "./assets/media/audio/air-horn.mp3";
    document.getElementById("sound-image").src = "./assets/media/images/air-horn.svg";

};
function changeCar() {
    document.getElementById("horn-sound").src = "./assets/media/audio/car-horn.mp3";
    document.getElementById("sound-image").src = "./assets/media/images/car.svg";
};
function changeParty() {
    document.getElementById("horn-sound").src = "./assets/media/audio/party-horn.mp3";
    document.getElementById("sound-image").src = "./assets/media/images/party-horn.svg";
};

var input = document.getElementById('volume-number');
input.addEventListener('change', (event) => 
{
    document.getElementById("volume-slider").value = event.target.value;
    if (event.target.value > 66) {
        document.getElementById('volume-image').src="./assets/media/icons/volume-level-3.svg"
    }
    if ((event.target.value < 67) && (event.target.value > 33)) {
        document.getElementById('volume-image').src="./assets/media/icons/volume-level-2.svg"
    }
    if ((event.target.value < 34) && (event.target.value > 0)) {
        document.getElementById('volume-image').src="./assets/media/icons/volume-level-1.svg"
    }
    if (event.target.value == 0) {
        document.getElementById('volume-image').src="./assets/media/icons/volume-level-0.svg"
    }
});

var slider = document.getElementById("volume-slider");
slider.addEventListener('change', (event) => 
{
    document.getElementById("volume-number").value = event.target.value;
    if (event.target.value > 66) {
        document.getElementById('volume-image').src="./assets/media/icons/volume-level-3.svg"
    }
    if ((event.target.value < 67) && (event.target.value > 33)) {
        document.getElementById('volume-image').src="./assets/media/icons/volume-level-2.svg"
    }
    if ((event.target.value < 34) && (event.target.value > 0)) {
        document.getElementById('volume-image').src="./assets/media/icons/volume-level-1.svg"
    }
    if (event.target.value == 0) {
        document.getElementById('volume-image').src="./assets/media/icons/volume-level-0.svg"
    }
});

document.getElementById("honk-btn").setAttribute('type', 'button');
document.getElementById("honk-btn").addEventListener("click", playAud);
document.getElementById("radio-air-horn").addEventListener("click", changeAir);
document.getElementById("radio-car-horn").addEventListener("click", changeCar);
document.getElementById("radio-party-horn").addEventListener("click", changeParty);
document.getElementById("radio-party-horn").addEventListener("click", changeParty);