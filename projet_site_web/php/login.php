<?php
include 'db.php';
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $stmt = $conn->prepare("SELECT * FROM users WHERE email = :email");
    $stmt->bindParam(':email', $email);
    $stmt->execute();
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['username'] = $user['name'];
        echo "<script>alert('connection réussi !'); window.location.href = '../hardware.html';</script>";
    } else {
        $error = "email ou mots de passe invalide.";
        header("Location: ../compte.html?login_error=" . urlencode($error));
        exit();
    }
}
?>