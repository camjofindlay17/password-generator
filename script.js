//global variables used throughout 
let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let lower = 'abcdefghijklmnopqrstuvwxyz'
let number = '0123456789'
let special = ')!@#$%^&*('
let generateBtn = document.querySelector("#generate")
let newBtn = document.querySelector("#newpass")
let charAmount = document.getElementById("charbox")
let password = document.getElementById("password")
let a = document.getElementById("upper")
let b = document.getElementById("lower")
let c = document.getElementById("number")
let d = document.getElementById("special")


//function to check the character amount parameters
function checkAmount() {
  let passLength = charbox.value
  if (passLength < 8 || passLength > 128) {
    window.alert ("Number of characters must be between 8 and 128");
    password = none
  }
}

//function to check alert user that they have selected to include uppercase letters
function checkUpper(){
  let a = document.getElementById("upper")
  if (a.checked===true) {
    window.alert("You have chosen to include uppercase letters")
  }
};

//function to check alert user that they have selected to include lowercase letters
function checkLower(){
  let b = document.getElementById("lower")
  if (b.checked===true) {
    window.alert("You have chosen to include lowercase letters")
  }
};

//function to check alert user that they have selected to include numbers
function checkNumber(){
  let c = document.getElementById("number")
  if (c.checked===true) {
    window.alert("You have chosen to include numbers")
  } 
};

//function to check alert user that they have selected to include the defined symbols
function checkSpecial(){
  let d = document.getElementById("special")
  if (d.checked===true) {
    window.alert("You have chosen to include special characters")
  }
};

//allows user to reload page in order to generate new password
function generateNew(){
  let boxes = document.getElementById("newpass")
  boxes=location.reload()
}

//function to generate password - includes all possible variations of user character selection
function generatePassword() {
  let password = ""
  let characters
  checkAmount()
  
  if (a.checked===true && b.checked===true && c.checked===true && d.checked===true) {
    characters = upper += lower + number + special
    console.log(characters)
  } else if (a.checked===true && b.checked===true && c.checked===true) {
    characters = upper += lower + number
    console.log(characters)
  } else if (a.checked===true && c.checked===true && d.checked===true) {
    characters = upper += number + special
    console.log(characters)
  } else if (a.checked===true && b.checked===true && d.checked===true) {
    characters = upper += lower + special
    console.log(characters)
  } else if (a.checked===true && d.checked===true) {
    characters = upper += special
    console.log(characters)
  } else if (a.checked===true && c.checked===true) {
    characters = upper += number
    console.log(characters)
  } else if (a.checked===true && b.checked===true) {
    characters = upper += lower
    console.log(characters)
  } else if (b.checked===true && c.checked === true && d.checked===true) {
    characters = lower += number + special
    console.log(characters)
  } else if (b.checked===true && c.checked === true) {
    characters = lower += number
    console.log(characters)
  } else if (b.checked===true && d.checked===true) {
    characters = lower += special
    console.log (characters)
  } else if (c.checked===true && d.checked===true) {
    characters = number += special
    console.log(characters)
  } else if (b.checked===true) {
    characters = lower
    console.log (characters)
  } else if (c.checked===true) {
    characters = number
    console.log(characters)
  } else if (d.checked===true) {
    characters = special
    console.log(characters)
  } else if (a.checked) {
    characters = upper
    console.log(characters)
  } else {
    window.alert("You must select at least one character option")
  }

  for (let i = 0; i < charAmount.value; i++) {
      let temp = Math.floor(Math.random() * characters.length);
      password += characters.charAt(temp);
    }
    return password
}

//function that writes the generated password in to the HTML textarea
function writePassword() {
  password.innerHTML = generatePassword()
}

//creates the "onclick" functionality on the webpage
generateBtn.addEventListener("click", writePassword);
newBtn.addEventListener("click", generateNew);
  