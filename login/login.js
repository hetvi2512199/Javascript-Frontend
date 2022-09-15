

function login(){

    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var pwd1 = document.getElementById("pwd1").value;
    var pwd2 = document.getElementById("pwd2").value;


    var emailValidation = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    var pwdValidation  = /[^a-zA-Z\@]/;
    var nameValidations = /[^a-zA-Z]/g;

    if (firstname == ""){

        alert("Please Enter FirstName")
    }
   
    if (lastname == ""){

        alert("Please Enter LastName")
    }

    if (email == ""){

        alert("Please Enter Email!")
    }
    else if (!emailValidation.test(email)){

        alert("Email Not Valid, Please Re-Enter!")
    }

    if (pwd1 == ""){

        alert("Please Enter Password!")
    }
    else if (!pwdValidation.test(pwd1)){

        alert("Password Not Valid!")
    }
    else if(pwd1.length < 6 || pwd1.length > 6){

        alert("Password Must be six character")
    }

    if (pwd2 == ""){

        alert("Please Enter Confirm Password!")
    }
    else if (!pwdValidation.test(pwd2)){

        alert("Password Not Valid!")
    }
    if (!pwd1 === pwd2){

        alert("Password Doesn't match")
    }

}


function clearfunc(){


    document.getElementById("firstname").value="";
    document.getElementById("lastname").value="";
    document.getElementById("email").value="";
    document.getElementById("pwd1").value="";
   document.getElementById("pwd2").value="";

}