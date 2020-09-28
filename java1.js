const slider = document.getElementById('slider')
const display = document.getElementById('display')
const generateButton = document.getElementById('generatePassword')
const includeUpperCaseElement = document.getElementById('includeUpperCase')
const includeLowerCaseElement = document.getElementById('includeLowerCase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')

//Making the slider count what character they are on depending on the slider location

// display.addEventListener('input', syncCharacterAmount)
slider.addEventListener('input', syncCharacterAmount)

function syncCharacterAmount(e) {
    var value = e.target.value;
    // display.value=value;
    slider.value=value;
}
//Slider length being shown.
document.getElementById("length").innerHTML = "Length: 68";

document.getElementById("slider").oninput = function sliderValue() {
    if(document.getElementById("slider").value > 0) {
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }

}

// Generating a Password
//To make sure that the page wont refresh or change when you submit
generateButton.addEventListener('submit', e => {
    e.preventDefault();
    //Making Password accept all ids for buttons
    const slider = slider.value;
    const includeUpperCase = includeUpperCaseElement.checked;
    const includeLowerCase = includeLowerCaseElement.checked;
    const includeNumbers = includeNumbersElement.checked;
    const includeSymbols = includeSymbolsElement.checked;

    const password = generatePassword(slider, includeUpperCase, includeLowerCase, includeNumbers, includeSymbols)
})

function generatePassword(slider, includeUpperCase, includeLowerCase, includeNumbers, includeSymbols) {
    let includeUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
    let includeLowerCase = "abcdefghijklmnopqrstuvwxyz".charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
    let includeNumbers = "1234567890".charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
    let includeSymbols = "!@#$%^&*()_+".charAt(Math.floor(Math.random() * Math.floor(values.length -1)));

    document.getElementById("display").value = password;


}








