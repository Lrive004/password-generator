// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password"); 

  // criteria prompts
  var length = prompt("How long will the password be?");

  // length criteria
  while (length < 8 || length > 120) {
    alert("Please enter an amount between 8 and 120 characters.");
    length = prompt("How long will the password be?");
  }

  var uppercase = confirm("Would you like to include uppercase letters?");
  var lowercase = confirm("Would you like to include lowercase letters?");
  var numbers = confirm("Would you like to include numbers?");
  var special = confirm("Would you like to include special characters?");

  // criteria holders
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChars = "123456789";
  var specialChars = "!@#$%^&*()_+";

  // if user criteria is true
  var Chars = "";

  if (lowercase) {
    Chars += lowercaseChars;
  }

  if (uppercase) {
    Chars += uppercaseChars;
  }

  if (numbers) {
    Chars += numberChars;
  }

  if (special) {
    Chars += specialChars;
  }

  var password = generatePassword(length, Chars);
  passwordText.value = password;
}

// select random character
function generatePassword(length, characters) {
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }
  return password;
}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


