document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const registerError = urlParams.get('register_error');
    const loginError = urlParams.get('login_error');

    if (registerError) {
        const registerErrorElement = document.getElementById('register-error');
        registerErrorElement.textContent = registerError;
        registerErrorElement.style.display = 'block';
    }

    if (loginError) {
        const loginErrorElement = document.getElementById('login-error');
        loginErrorElement.textContent = loginError;
        loginErrorElement.style.display = 'block';
    }
});