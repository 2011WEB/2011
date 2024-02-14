function validate(){
    var password = document.getElementById("pass").value;

    if(password === "12345678"){
        alert("Login Succesfull");
        window.location.replace("newpage.html");
        return false;
    }
    else{
        alert("Login Failed");
        return false; // Prevent form submission
    }
}