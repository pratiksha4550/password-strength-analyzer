function checkPassword() {

    let password = document.getElementById("password").value;

    let strength = document.getElementById("strength");

    let suggestion = document.getElementById("suggestion");

    let score = 0;

    if (password.length >= 8) {
        score++;
    }

    if (/[A-Z]/.test(password)) {
        score++;
    }

    if (/[0-9]/.test(password)) {
        score++;
    }

    if (/[^A-Za-z0-9]/.test(password)) {
        score++;
    }

    if (score <= 1) {
        strength.innerHTML = "Weak Password";
        strength.style.color = "red";
    }
    else if (score == 2 || score == 3) {
        strength.innerHTML = "Medium Password";
        strength.style.color = "orange";
    }
    else {
        strength.innerHTML = "Strong Password";
        strength.style.color = "green";
    }

    let tips = [];

    if (password.length < 8) {
        tips.push("Use at least 8 characters");
    }

    if (!/[A-Z]/.test(password)) {
        tips.push("Add one uppercase letter");
    }

    if (!/[0-9]/.test(password)) {
        tips.push("Add one number");
    }

    if (!/[^A-Za-z0-9]/.test(password)) {
        tips.push("Add one special character");
    }

    if (tips.length > 0) {
        suggestion.innerHTML = "<b>Suggestions:</b><br>" + tips.join("<br>");
    } else {
        suggestion.innerHTML = "Excellent! Your password is secure.";
    }
}