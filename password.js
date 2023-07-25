function subbtn() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password1').value;

    if (email === "abdulahad123@gmail.com" && password === "ahad123@10") {
        window.location.href = "welcome.html";
    } else {
        document.getElementById('display').innerHTML = "Email or password is incorrect";
    }
}
