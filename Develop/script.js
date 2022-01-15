// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var getPasswordLen = function () {
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
    return true;
  } else {
    return false;
  }
}


var passwordInfo = {
  length: getPasswordLen(),
  lowercase: getCharacterType("lowercase"),
  uppercase: getCharacterType("uppercase"),
  numeric: getCharacterType("numeric"),
  specialCharter: getCharacterType("special")
}




// Write password to the #password input
function writePassword() {

  // var password = generatePassword();

  var passwordText = document.querySelector("#password");



  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
