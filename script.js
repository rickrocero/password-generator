// Assignment Code
//DO NOT CHANGE THIS CODE
var generateBtn = document.querySelector("#generate");

function generatePassword(){
    //TODO: your code here

    // PSEUDOCODE
    //TODO: Create variables for
        // password length
        // lowercase array
        // uppercase array
        // special characters array
        // numbers array
        // possible characters array
        // final password
        // variable for responses to confirms/prompts

      var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
      var specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "/", "^", "_", "{", "}", "|", "~"];
      var randomNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
      var possibleChar = [];
      var finalPassword = "";

      
    // TODO: Display a prompt 
              //ask user for password length ( >= 8  and <= 128 ) & other criteria
              // ensure that they answered true to at least one prompt
              // alert("Please select at least one criteria");
        
        
        var passwordLengthString = prompt("How many characters for your password?", "Type a number");
        var passwordLengthNumber = parseInt(passwordLengthString);

        if (passwordLengthNumber < 8 || passwordLengthNumber > 128) {
          alert("Invalid input... please enter a number between 8 and 128. Click Generate Password to try again!");
          return;
        }
      
        var lowerCaseResult = confirm("Include lower-case letters? Ok for Yes or Cancel for No");
        var upperCaseResult = confirm("Include upper-case letters? Ok for Yes or Cancel for No");
        var specialCharResult = confirm("Include special characters? Ok for Yes or Cancel for No");
        var numResult = confirm("Include numbers? Ok for Yes or Cancel for No");

        
    
    // TODO: Check IF the user answered to any of the confirms, add that array to the possible character array

        if (lowerCaseResult === true) {
          possibleChar = possibleChar.concat(lowerCase);
        } 
        if (upperCaseResult === true) {
          possibleChar = possibleChar.concat(upperCase);
        }
        if (specialCharResult === true) {
          possibleChar = possibleChar.concat(specialChar);
        } 
        if (numResult === true) {
          possibleChar = possibleChar.concat(randomNum);
        } 

        if (lowerCaseResult === false && upperCaseResult === false && specialCharResult === false && numResult === false) {
          alert("Please select at least one criteria. Click Generate Password to try again!");
          return;
        }

      
      
    // TODO: For each iteration, select a random character out of the possible characters array and it to the final password variable

        for (var i = 0; i < passwordLengthNumber; i++) {
          var randomIndex = Math.floor(Math.random() * possibleChar.length);
          var randomArrayPick = possibleChar[randomIndex];
          finalPassword += randomArrayPick;
        }


    // TODO: Return the final password from the generate password function
      return finalPassword;
        
}

// Write password to the #password input
/* DO NOT CHANGE THIS CODE!  This function is going to call your generatePassword() function and whatever is returned from that function will be put onto the page */
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// DO NOT CHANGE THIS CODE
generateBtn.addEventListener("click", writePassword);



  