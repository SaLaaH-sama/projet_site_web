<?php
session_start();
$response = array('loggedIn' => false, 'registerError' => '', 'loginError' => '');

if (isset($_SESSION['username'])) {
    $response['loggedIn'] = true;
    $response['username'] = $_SESSION['username'];
}

if (isset($_GET['register_error'])) {
    $response['registerError'] = htmlspecialchars($_GET['register_error']);
}

if (isset($_GET['login_error'])) {
    $response['loginError'] = htmlspecialchars($_GET['login_error']);
}

echo json_encode($response);
?>