<?php session_start(); if (isset($_SESSION['username'])): ?>
    <div id="profile-menu">
        <span id="profile-icon">👤</span>
        <span id="profile-name"><?php echo htmlspecialchars($_SESSION['username']); ?></span>
        <div id="logout-menu" style="display: none;">
            <a href="logout.php">Se déconnecter</a>
        </div>
    </div>
<?php endif; ?>