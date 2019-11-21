/*
Password must have at least 8 characters but no more than 20; Must contain at least one special charcter(!, @, #, $, %, &); Must contain at least one uppercase letter; must contain at least one lowercase letter; Must contain at least one number; cannot contain spaces
    Start
      Set user to input1
      Set password to input2
      Set confirm-pass to input3
      IF access is granted then take to new page  
         else if password is less than 8 or greater than 20 
            Display "Blank"
        else if passord is not = confirmPass
            Display "Password must match"
        else if password doesn't contain special character
            Display "Must contain atleast 1 special character"
        else if password does not conatin uppercase letter
            Display "Must contain atleast 1 uppercase letter"
        else if password does not contain 1 lower case letter
            Display "Must contain atleast 1 lower case letter"
        else if password does not contain a number
            Display "Must Contain atleast 1 number"
        else if password does contain a space
            Display "Do not use spaces please!"
            
            if all function are true,// once all requirements are met 
                access granted,display other html
*/



function runAll() {
    var output = document.getElementById("output");
    let link = "Access Granted: Click me to Continue";
    let failed = "Check instructions please"
    if (passed() == true) {
        output.innerHTML = link;
        // make a link visible?
    }
    return false
}



function passed() {
   return  createUser()
    &&  createPass()
    && checkLength()
    && checkSimilarity()
    && checkSC()
    && checkUpper()
    && checkLower()
    && checkNumber()
    && checkSpace();
}

var pwd = document.getElementById("input2");
pwd.addEventListener("keyup", function () {
    createUser()
    createPass()
    checkLength()
    checkSimilarity()
    checkSC()
    checkUpper()
    checkLower()
    checkNumber()
    checkSpace();
})

function createUser() {
    var user = document.getElementById("input1").value;
    let error = document.getElementById("User-error");
    let denied = "Must Create a User Name";
    let passed = " "
    if (user == "") {
        error.innerText = denied;
    } else{
        error.innerText = passed;
        return true;
    }
}

function createPass() {
    let password = document.getElementById("input2").value;
    let error = document.getElementById("pass-error");
    let denied = "Must create password"
    if (password  == "") {
        error.innerText = denied;
    } else {
        error.style.display = "none"
        return true;
    }
}


function checkLength() {
    let password = document.getElementById("input2").value;
    let limit = document.getElementById("limit");
    
     if (password.length < 8 || password.length > 20 ){ 
        limit.style.color = "red";// password does not conatin at least 8 character or contains more than 20 characters
     }else{
         console.log("Pass3"); 
         limit.style.color = "green";
         return true;  
     }
}

function checkSimilarity() {
    let password = document.getElementById("input2").value;
    let confirmPassword = document.getElementById("input3").value;
    let similarity = document.getElementById("match-error");
    let notFound = "password must match";
     if (password !== confirmPassword){
        similarity.innerText = notFound;
       
    }else{
        similarity.style.display = "none"
        return true
    }
}

function checkSC() {
    let password = document.getElementById("input2").value;
    let sCharacter = document.getElementById("SC");
    let SpecialC = [
        '!','@','#','$','%','&'
    ]
        

    let length = SpecialC.length;
    while(length--) {
   if (password.indexOf(SpecialC[length])!=-1) {
        console.log("pass");
        sCharacter.style.color = "green";
        return true;    
    } else {
        sCharacter.style.color = "red"; // must include at least 1 special character

    }

}
   
}

function checkUpper() {
    let password = document.getElementById("input2").value;
    let upperCase = document.getElementById("upper");
    let letter = [
        "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
    ]
        

    let length = letter.length;
    while(length--) {
   if (password.indexOf(letter[length])!=-1) {
        console.log("pass");
        upperCase.style.color = "green"
        return true;    
    } else {
        upperCase.style.color = "red" // must include at least 1 upper case letter
    }

}
  
}

function checkLower() {
    let password = document.getElementById("input2").value;
    let lowerCase = document.getElementById("lower");
    let lower = [
        "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
    ]
        

    let length = lower.length;
    while(length--) {
   if (password.indexOf(lower[length])!=-1) {
        console.log("pass");
        lowerCase.style.color = "green"
        return true;    
    } else {
        lowerCase.style.color = "red"// must include at leat 1 lower case letter

    }

}  
}

function checkNumber() {
    let password = document.getElementById("input2").value;
    let number = document.getElementById("number");
    let numberS = [
        1,2,3,4,5,6,7,8,9,0
    ]
        

    let length = numberS.length;
    while(length--) {
   if (password.indexOf(numberS[length])!=-1) {
        console.log("pass");
        number.style.color = "green"
        return true;    
    } else {
        number.style.color = "red"// must include at elast 1 number

    }
}  
}

function checkSpace() {
    let password = document.getElementById("input2").value;
    let space = document.getElementById("space");

        
   if (password.includes(" ")) {
        console.log("failed");//contains a space
        space.style.color = "red"  
    } else {
        space.style.color = "green"
        return true;
    }
  
}