function checkPassword() {
    var password = document.getElementById("myinput").value;
    if (password == "zaq1@WSX") 
    {
        window.location.href = "hot.html";
    } else 
    {
        alert("Nieprawidłowe hasło!");
    }
}