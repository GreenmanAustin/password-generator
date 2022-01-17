// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// charTypes is an array that contains the user's choices of the types of characters that will be included in the password.  This step simply initializes the array by setting it to empty.
var charTypes = [];

//specialCharacters is a string that contains the special characters available to be used in a password.  The only special character not included in this string is a space, which I decided to leave out of a password for various reasons.
const specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

// This function is called from writePassword function below to get the user to input the length of the password he/she desires.
var getPasswordLength = function () {
  len = prompt("Please input a number betweem 8 and 128 for number of character in your password.");
  // This step repeats the user prompt for a password length until the user enters a length between 8 -128 characters. 
  while (len < 8 || len > 128) {
    len = prompt("You entered an invalid number. Please input a number betweem 8 and 128 for number of character in your password.");
  }
  return len;
}

// This function takes as an argument one of the characters types and asks if the user wants the said character type included in the password.  If the user agrees to the inclusion of the said character type, this function adds the said character type in the charTypes array.
var getCharacterType = function (type) {
  var yesType = prompt('Will the password contain ' + type.toUpperCase() + ' chacters. Enter "Y" for yes, or "N" for no.');
  yesType = yesType.toLowerCase();
  while ((yesType !== "y") && (yesType !== "n")) {
    var yesType = prompt('You have entered an invalid response.  Will the password contain ' + type.toUpperCase() + ' chacters. Enter "Y" for yes, or "N" for no.');
    yesType = yesType.toLowerCase();
  }
  if (yesType === 'y') {
    charTypes.push(type);
  }
}

// This is a random number generator function which is used through out this algorithm.
var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1)) + min;
  return value;
}

// This function takes the length of the password as an argument and generates the password through a for loop.  
var generatePassword = function (length) {
  password = "";
  for (i = 1; i <= length; i++) {
    var charType = charTypes[randomNumber(0, charTypes.length - 1)];
    switch (charType) {
      case "lowercase":
        var randomNum = randomNumber(97, 122);
        password = password.concat(String.fromCharCode(randomNum));
        break;
      case "uppercase":
        var randomNum = randomNumber(65, 90);
        password = password.concat(String.fromCharCode(randomNum));
        break;
      case "numeric":
        var randomNum = randomNumber(0, 9);
        password = password.concat(randomNum);
        break;
      case "special":
        var randomNum = randomNumber(0, specialCharacters.length - 1);
        password = password.concat(specialCharacters[randomNum]);
        break;
    }
  }
  return password;
}

// This function takes the user through a series of prompts to enter the types of characters that are to be included in the password.
var getCharacterTypes = function () {
  getCharacterType("lowercase");
  getCharacterType("uppercase");
  getCharacterType("numeric");
  getCharacterType("special");
  if (charTypes.length == 0) {
    window.alert("You must choose at least one character type to generate a password.  Please try again.");
    getCharacterTypes();
  }
}


// This is the core function which is called when the user presses the generate password button.  This function calls the other functions to obtain the necessary information from the user and then use that information to call the functions to generate the password.  The charTypes array is also reset to allow the user to repreatedly use the button to generate a password.
function writePassword() {
  charTypes = [];
  length = getPasswordLength();
  getCharacterTypes();

  var password = generatePassword(length);

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
