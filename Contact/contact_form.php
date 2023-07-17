<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // 이메일 수신자 설정
  $to = "jaehanshowraincloud@gmail.com";

  // 이메일 제목과 내용 설정
  $subject = "New Contact Form Submission";
  $body = "Name: $name\nEmail: $email\nMessage: $message";
  
  // 이메일 전송
  if (mail($to, $subject, $body)) {
    echo "Email sent successfully.";
  } else {
    echo "Failed to send email.";
  }
}
?>
