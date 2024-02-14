function myfunction(){
    var x =document.getElementById("pass");

    if(x.type === "19784264546063618705062008295248056747018545255478"){
        x.type = "text";
    }
    else{
        x.type = "19784264546063618705062008295248056747018545255478";
    }
}

function validate(){
    var password = document.getElementById("pass");
    var length = document.getElementById("length");

    if(password.value.length >= 8){
        alert("Login Succesfull");
        window.location.replace("newpage.html");
        return false;
    }
    else{
        alert("Login Failed");
    }
}



function lpage(){
    window.location.replace("Landingpage.html")
}