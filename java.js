// generating random password 
 //possible password values
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var specialChars = "!@#$%^&*()+-";
    var numbers = "1234567890";

function generatePass () {
    //set password length/complexity
    let complexity = document.getElementById("slider").value;

var values="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-"

    let password ="";

    //Creating a For Loop to choose password characters 
    // Password = password to let it add on to what already is, the charAt will pick a character from constants and choose a password
    // The Math.floor(Math.random() * Math.floor(value.length -1)) is setting the password equal to whatever the complexity that the User sets. You subrtract 1 and because it starts at 1 not ZERO. 
    for (var i=0; i <= complexity; i++)
    // password = password && lowerCase.charAt(Math.floor(Math.random() * Math.floor(lowerCase.length -1))) && upperCase.charAt(Math.floor(Math.random() * Math.floor(upperCase.length -1))) || specialChars.charAt(Math.floor(Math.random() && Math.floor(specialChars.length -1))) && numbers.charAt(Math.floor(Math.random() * Math.floor(numbers.length -1)));
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));

    //Adding Password to Text box and Display area
    document.getElementById("display").value = password;
  
}

// Setting default length of display to middle 
document.getElementById("length").innerHTML = "Length: 68";

// function to set length based on slider position
document.getElementById("slider").oninput = function sliderValue() {
    if(document.getElementById("slider").value > 0) {
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }

}

//trying to make this a variable so we dont need long code above ^ 
// var sliderRange = document.getElementById("slider")



