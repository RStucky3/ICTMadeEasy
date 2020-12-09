<?php
use PHPMailer\PHPMailer;


if(isset($_POST['name']) && ($_POST['surname']) && ($_POST['email']) && ($_POST['message'])){

    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $mailfrom = $_POST['email'];
    $message = $_POST['message'];

    require_once "PHPMailer/PHPMailer.php";
    require_once "PHPMailer/SMTP.php";
    require_once "PHPMailer/Exception.php";
    
    $mail->isSMTP();
    $mail->Host = "smtp.office365.com";
    $mail->SMTPAuth-> true;
    $mail->Username = "rubenstucky@ictmadeeasy.nl";
    $mail->Password = 'Kaasisbaas!';
    $mail->Port = 587; 
    $mail->SMTPSecure = "ssl";

    $mail->isHTML(true);
    $mail->setFrom($mailfrom, $name);
    $mail->addAddress("rubenstucky@ictmadeeasy.nl");
    $mail->Subject = ("Mail van: $name, over: werk");
    $mail->Body = $message;

    if($mail->send()){
        $status = "success";
        $response = "Email is sent!";
    }
    else{
        $status = "failed";
        $response = "failed";
    }
    exit(json_encode(array("status" => $status, "response" => $response)));
}