function login() {
    let text = document.getElementById("text").value;
    let password = document.getElementById("password").value;

    if (text === "Agihal Putra" & password === "12345") {
        window.location.href = 'success.html';
    } else {
        alert("Username dan password yang anda masukan tidak Valid!!")
    }
}


