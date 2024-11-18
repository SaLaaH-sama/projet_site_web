<?php
include 'db.php';
session_start();

if (!isset($_SESSION['user_id'])) {
    header("Location: ../compte.html?login_error=" . urlencode("Vous devez être connecté pour passer une commande."));
    exit();
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $user_id = $_SESSION['user_id'];
    $product_name = $_POST['product_name'];
    $price = $_POST['price'];

    $stmt = $conn->prepare("INSERT INTO orders (user_id, product_name, price) VALUES (:user_id, :product_name, :price)");
    $stmt->bindParam(':user_id', $user_id);
    $stmt->bindParam(':product_name', $product_name);
    $stmt->bindParam(':price', $price);

    if ($stmt->execute()) {
        echo "<script>alert('Commande passée avec succès !'); window.location.href = '../index.html';</script>";
    } else {
        echo "<script>alert('Erreur lors de la passation de la commande.'); window.location.href = '../smartphone.html';</script>";
    }
}
?>