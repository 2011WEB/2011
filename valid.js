function validate(){
    var password = document.getElementById("pass").value;

    if(password === "19784264546063618705062008295248056747018545255478"){
        alert("Login Succesfull");
        window.location.replace("https://forms.gle/6WapG8Af7pRaXTsQA");
        return false;
    }
    else{
        alert("Login Failed");
        return false; // Prevent form submission
        
        function lpage(){
    window.location.replace("https://forms.gle/6WapG8Af7pRaXTsQA")
    }
}