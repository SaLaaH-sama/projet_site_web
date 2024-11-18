<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['name'];
    $email = $_POST['email'];
    $pass = $_POST['password'];

    if ($username && $email && $pass) {
        if (strlen($pass) < 8) {
            echo "<script>alert('Le mot de passe doit contenir au moins 8 caractères.'); window.location.href = '../compte.html';</script>";
            exit();
        }

        $stmt = $conn->prepare("SELECT * FROM users WHERE email = :email");
        $stmt->bindParam(':email', $email);
        $stmt->execute();
        if ($stmt->rowCount() > 0) {
            $error = "Cet email est déjà utilisé.";
            header("Location: ../compte.html?register_error=" . urlencode($error));
            exit();
        } else {
            $hashed_password = password_hash($pass, PASSWORD_DEFAULT);
            $stmt = $conn->prepare("INSERT INTO users (name, email, password) VALUES (:name, :email, :password)");
            $stmt->bindParam(':name', $username);
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':password', $hashed_password);

            if ($stmt->execute()) {
                echo "<script>alert('Compte créé avec succès !'); window.location.href = '../compte.html';</script>";
            } else {
                $error = "Erreur lors de la création du compte.";
                header("Location: ../compte.html?register_error=" . urlencode($error));
                exit();
            }
        }
    } else {
        $error = "Données invalides.";
        header("Location: ../compte.html?register_error=" . urlencode($error));
        exit();
    }
}
?>