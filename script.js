function checkExp(jobvalue) {

    if(jobvalue != "yes")
    {
        document.getElementById("expCheck").style.display = "none";
    }
    else{
        document.getElementById("expCheck").style.display = "block";
    }
}

function checkForAlphabets(input) {

    var letters = /^[A-Za-z]+$/;
   if(input.value.match(letters))
     {
      return true;
     }
   else
     {
     alert("enter text only");
     return false;
     }

}

function validateDate(dob) {
    
    var today = new Date();
    var inputDate = dob.value;
    //console.log(today);
    //console.log(inputDate);
    var parts = inputDate.split("-");
    var year = parts[0];
    //console.log(parts[0]);
    //console.log(today.getFullYear());
    if((today.getFullYear()-year)<18)
    {
        alert("you must be 18 years old for the application");
    }
    else
    {
        return true;
    }    
}

function checkForNumbers(input) {
    var numbers =  /-[0-9]()+/;
   if(input.value.match(numbers))
     {
      return true;
     }
   else
     {
     alert("enter numbers only");
     }

}

var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

function displayMessage()
{
    document.getElementById("message").style.display = "block";
}

function hideMessage()
{
    document.getElementById("message").style.display = "none";
}

function ValidatePassword(psw) {
    // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

function ValidateConfirmPassword()
{
    if (document.getElementById('psw').value ==
    document.getElementById('rpass').value) {
    document.getElementById('cmessage').style.color = 'green';
    document.getElementById('cmessage').innerHTML = 'matching';
  } else {
    document.getElementById('cmessage').style.color = 'red';
    document.getElementById('cmessage').innerHTML = 'not matching';
  }

}

function Checkfiles()
    {
        var fileName = document.getElementById('fileid').value;
        var ext = fileName.substring(fileName.lastIndexOf('.') + 1);

    if(ext =="word" || ext=="pdf")
    {
        return true;
    }
    else
    {
        alert("Upload word or pdf files only");
    }
    }