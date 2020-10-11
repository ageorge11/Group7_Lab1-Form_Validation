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

//script to display company name and year of experience depending on the answer for experience
function checkExp(jobvalue) {

    if(jobvalue != "yes")
    {
        document.getElementById("expCheck").style.display = "none";
    }
    else{
        document.getElementById("expCheck").style.display = "block";
    }
}

//validation for date of birth
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

