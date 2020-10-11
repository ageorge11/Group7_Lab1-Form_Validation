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

