// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var charTypes = [];

const specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

var getPasswordLength = function () {
  len = prompt("Please input a number betweem 8 and 128 for number of character in your password.");

  while (len < 8 || len > 128) {
    len = prompt("You entered an invalid number. Please input a number betweem 8 and 128 for number of character in your password.");
  }
  return len;
}

var getCharacterType = function (type) {
  var yesType = prompt('Will the password contain ' + type + ' chacters. Enter "Y" for yes, or "N" for no.');
  yesType = yesType.toLowerCase();
  while ((yesType !== "y") && (yesType !== "n")) {
    var yesType = prompt('You have entered an invalid response.  Will the password contain ' + type + ' chacters. Enter "Y" for yes, or "N" for no.');
    yesType = yesType.toLowerCase();
  }
  if (yesType === 'y') {
    charTypes.push(type);
  }
}

var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1)) + min;
  return value;
}


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

// Write password to the #password input
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
