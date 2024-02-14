document.querySelector('.loginForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (validateUsername(username) && validatePassword(password)) {
        if (username === 'Mohannad' && password === 'Mo20012001') {
            window.open('https://forms.gle/6WapG8Af7pRaXTsQA');
        } else {
            alert('Invalid username or password');
        }
    } else {
        alert('Invalid username or password');
    }
});

function validateUsername(username) {
    if (username.length < 3) {
        return false;
    }
    return true;
}

function validatePassword(password) {
    const length = password.length;
    if (length < 8) {
        return false;
    }
    if (!/[A-Z]/.test(password)) {
        return false;
    }
    if (!/[a-z]/.test(password)) {
        return false;
    }
    if (!/[0-9]/.test(password)) {
        return false;
    }
    if (!/[!@#$%^&*]/.test(password)) {
        return false;
    }
    return true;
}