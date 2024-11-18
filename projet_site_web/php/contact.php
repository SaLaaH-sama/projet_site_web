<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $stmt = $conn->prepare("INSERT INTO contacts (name, email, message) VALUES (:name, :email, :message)");
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':message', $message);

    if ($stmt->execute()) {
        echo "<script>alert('Message envoyé avec succès !'); window.location.href = '../contact.html';</script>";
    } else {
        echo "<script>alert('Erreur lors de l\'envoi du message.'); window.location.href = '../contact.html';</script>";
    }
    exit();
}
?>
