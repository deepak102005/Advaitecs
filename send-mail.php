<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    exit("Method Not Allowed");
}

$name    = htmlspecialchars(trim($_POST['name']));
$phone   = htmlspecialchars(trim($_POST['phone']));
$email   = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$message = htmlspecialchars(trim($_POST['message']));
$consent = isset($_POST['consent']);

if (!$name || !$phone || !$email || !$message || !$consent) {
    http_response_code(400);
    exit("invalid");
}

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.ionos.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'support@advaitecs.com';   // your IONOS email
    $mail->Password   = 'rIvxug-rogfa1-miszot';    // mailbox password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    $mail->setFrom('support@advaitecs.com', 'Advaitecs Website');
    $mail->addAddress('support@advaitecs.com');
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);
    $mail->Subject = 'New Contact Form Submission';
    $mail->Body = "
        <b>Name:</b> {$name}<br>
        <b>Email:</b> {$email}<br>
        <b>Phone:</b> {$phone}<br><br>
        <b>Message:</b><br>{$message}
    ";

    $mail->send();
    echo "success";

} catch (Exception $e) {
    http_response_code(500);
    echo "error";
}
