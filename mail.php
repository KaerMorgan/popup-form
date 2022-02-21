<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$phone = $_POST['phone'];
$email = $_POST['email'];


$mail->isSMTP();                                      
$mail->Host = 'smtp.mail.ru';  																							
$mail->SMTPAuth = true;                               
$mail->Username = ''; // почта с которой будут отправляться письма
$mail->Password = ''; // пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

$mail->setFrom(''); // от кого будет уходить письмо
$mail->addAddress('');     // Кому будет уходить письмо 
$mail->isHTML(true);                                

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = 'Телефон: ' .$phone. '<br>Почта: ' .$email;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    echo "Ваша заявка принята, спасибо !";
}
?>