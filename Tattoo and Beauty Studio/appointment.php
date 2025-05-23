<?php
if(isset($_POST['submit'])){
$name = $_POST["name"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$date = $_POST["date"];
}
/*$EmailTo = "nitesh@digisajilo.com";*/
$EmailTo = "rajnimail222@gmail.com";
$EmailTo = "rajnimail222@gmail.com";
$Subject = "Golden Girls Beauty And Tattoo";
// prepare email body text
$Fields .= "<table border='2px' style='border-collapse:collapse; width:100%;'>";
$Fields .= "<tr>";
$Fields .= "<td style='padding:5px;'>Full Name</td>";
$Fields .= "<td style='padding:5px;'>".$name."</td>";
$Fields .= "</tr>";

$Fields .= "<tr>";
$Fields.= "<td style='padding:5px;'>Email</td>";
$Fields .= "<td style='padding:5px;'>".$email."</td>";
$Fields .= "</tr>";

$Fields .= "<tr>";
$Fields.= "<td style='padding:5px;'>Phone</td>";
$Fields .= "<td style='padding:5px;'>".$phone."</td>";
$Fields .= "</tr>";

$Fields .= "<tr>";
$Fields.= "<td style='padding:5px;'>Date</td>";
$Fields .= "<td style='padding:5px;'>".$date."</td>";
$Fields .= "</tr>";
$Fields .= "</table>"; 
//
// send email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: '.$email. "\r\n";
$success = mail($EmailTo,  $Subject,  $Fields, $headers);
header("Location:index.html");
echo " THIS IS A TEST ";

?>