function checkPassword() {
    var password = document.getElementById("myinput").value;
    if (password == "PingwiN203204") {
        window.location.href = "hot.html";
    } else {
        alert("Nieprawidłowe hasło!");
    }
}