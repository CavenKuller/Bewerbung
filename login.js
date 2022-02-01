/*Dieser Code dient der Nutzer und Passowrd Abfrage*/
function validate(){
    var username=document.getElementById("username").value
    var password=document.getElementById("password").value
    if(username=="Nutzer"&& password=="Test")
    {
        alert("Sie sind Angemeldet.");
               
        window.open("adminsite.html");
        
    }
    else
    {
        alert("Login fehlgeschlagen!");
    }

}

function back(){
   history.go(-1)

}