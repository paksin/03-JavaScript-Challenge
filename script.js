// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Defines different list of characters for each set
var charSet1 = "abcdefghijklmnopqrstuvwxyz";
var charSet2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charSet3 = "0123456789";
var charSet4 = " !#$%&()*+,-./:<=>?@[\]^_~{}|~";


function generatePassword (){
  var charSet = "";
  var password = "";
  var pwReq = "";

  // Prompts to see if lowercase letters are required
  var pwlowercase = prompt("Do you wish to have lowercase letters in the password? Enter y if yes, n if no. ");

  if(pwlowercase == "y"){
    alert("Lowercase letters selected");
    charSet = charSet.concat(charSet1);
    console.log(charSet);
  } 
  else{
    alert("Lowercase letters not selected")
  }

  // Prompts to see if uppercase letters are required
  var pwuppercase = prompt("Do you wish to have uppercase letters in the password? Enter y if yes, n if no. ");

  if(pwuppercase == "y"){
    alert("Uppercase letters selected");
    charSet = charSet.concat(charSet2);
    console.log(charSet);
  }
  else{
    alert("Uppercase letters not selected")
  }

  // Prompts to see if numbers are required
  var pwnumber = prompt("Do you wish to have numbers in the password? Enter y if yes, n if no. ");

  if(pwnumber == "y"){
    alert("Numbers selected");
    charSet = charSet.concat(charSet3);
    console.log(charSet);
  } 
  else{
    alert("Numbers not selected")
  }

    // Prompts to see if special characters are required
  var pwspecial = prompt("Do you wish to have special characters in the password? Enter y if yes, n if no. ");

  if(pwspecial == "y"){
    alert("Special characters selected");
    charSet = charSet.concat(charSet4);
    console.log(charSet);
  }
  else{
    alert("Special characters not selected")
  }

  // Prompts to see how long the password needs to be
  var pwlength = prompt("How long do you want the password to be?");

  // Confirms the password requirement with user
  if (pwlowercase == "y"){
    pwReq = pwReq.concat(" Lowercase letters ");
  }
  if (pwuppercase == "y"){
    pwReq = pwReq.concat(" Uppercase letters ");
  }
  if (pwnumber == "y"){
    pwReq = pwReq.concat(" Numbers ");
  }
  if(pwspecial == "y"){
    pwReq = pwReq.concat(" Special characters ");
  }
  alert("You have selected a "+ pwlength+ " character password with: " + pwReq);

  // Generates the password
  for (let i = 0; i < pwlength; i++) {
    var charSetindex = (Math.floor(Math.random() * charSet.length));
    password = password.concat(charSet[charSetindex]);
  }
  
  // Returns to user
  return password;
}
