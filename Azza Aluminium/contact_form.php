<?php
if(isset($_POST['submit'])){
$firstname = $_POST["firstname"];
$lastname = $_POST["lastname"];
$mobile = $_POST['number'];
$email = $_POST["email"];
$message = $_POST["message"];
}
/*$EmailTo = "nitesh@digisajilo.com";*/
$EmailTo = "akengineers2011@gmail.com";
$EmailTo = "akengineers2011@gmail.com";
$Subject = "Azza Aluminium Febricator";
// prepare email body text
$Fields .= "<table border='2px' style='border-collapse:collapse; width:100%;'>";
$Fields .= "<tr>";
$Fields .= "<td style='padding:5px;'>Full Name</td>";
$Fields .= "<td style='padding:5px;'>".$firstname."</td>";
$Fields .= "</tr>";

$Fields .= "<tr>";
$Fields.= "<td style='padding:5px;'>Email</td>";
$Fields .= "<td style='padding:5px;'>".$lastname."</td>";
$Fields .= "</tr>";

$Fields .= "<tr>";
$Fields.= "<td style='padding:5px;'>Phone Number</td>";
$Fields .= "<td style='padding:5px;'>".$mobile."</td>";
$Fields .= "</tr>";

$Fields .= "<tr>";
$Fields.= "<td style='padding:5px;'>Phone Number</td>";
$Fields .= "<td style='padding:5px;'>".$email."</td>";
$Fields .= "</tr>";

$Fields .= "<tr>";
$Fields .= "<td style='padding:5px;'>Message</td>";
$Fields .= "<td style='padding:5px;'>".$message."</td>";
$Fields .= "</tr>";
$Fields .= "</table>"; 

// send email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: '.$email. "\r\n";
$success = mail($EmailTo,  $Subject,  $Fields, $headers);
header("Location:index.html");
echo "Submit Your Enquiry";

?>