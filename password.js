function subbtn() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password1').value;

    if (email === "baba@gmail.com" && password === "baba@10") {
        window.location.href = "welcome.html";
    } else {
        document.getElementById('display').innerHTML = "Email or password is incorrect";
    }
}