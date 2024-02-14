document.querySelector('.loginForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'Mohannad' && password === '20012001') {
        window.open('welcome.html');
    } else {
        alert('Invalid username or password');
    }
});