const slider = document.getElementById('slider')
const display = document.getElementById('display')

display.addEventListener('input', syncCharacterAmount)
slider.addEventListener('input', syncCharacterAmount)

function syncCharacterAmount(e) {
    var value = e.target.value;
    display.value=value;
    slider.value=value;
}







//Slider length being shown.
document.getElementById("length").innerHTML = "Length: 68";

document.getElementById("slider").oninput = function sliderValue() {
    if(document.getElementById("slider").value > 0) {
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }

}