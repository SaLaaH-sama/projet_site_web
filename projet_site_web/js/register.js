document.getElementById('formulaire-inscription').addEventListener('submit', function(event) {
    const password = document.getElementById('motdepasse-inscription').value;
    if (password.length < 8) {
        alert('Le mot de passe doit contenir au moins 8 caractères.');
        event.preventDefault();
    }
});