document.addEventListener('DOMContentLoaded', () => {
    fetch('php/session_status.php')
        .then(response => response.json())
        .then(data => {
            if (data.loggedIn) {
                const profileMenu = document.createElement('div');
                profileMenu.id = 'profile-menu';

                const profileIcon = document.createElement('span');
                profileIcon.id = 'profile-icon';
                profileIcon.textContent = '👤';

                const profileName = document.createElement('span');
                profileName.id = 'profile-name';
                profileName.textContent = data.username;

                const logoutMenu = document.createElement('div');
                logoutMenu.id = 'logout-menu';
                logoutMenu.style.display = 'none';

                const logoutLink = document.createElement('a');
                logoutLink.href = 'php/logout.php';
                logoutLink.textContent = 'Se déconnecter';

                logoutMenu.appendChild(logoutLink);
                profileMenu.appendChild(profileIcon);
                profileMenu.appendChild(profileName);
                profileMenu.appendChild(logoutMenu);

                document.querySelector('header').appendChild(profileMenu);

                profileIcon.addEventListener('click', () => {
                    logoutMenu.style.display = logoutMenu.style.display === 'none' ? 'block' : 'none';
                });
            }
        });
});