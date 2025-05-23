<?php
if(isset($_POST['submit'])){
$f_name = $_POST["f_name"];
$l_name = $_POST["l_name"];
$email = $POST["email"];
$mobile = $_POST['number'];
$message = $_POST["message"];
}
/*$EmailTo = "nitesh@digisajilo.com";*/
$EmailTo = "contact@casinaengineering.com";
$EmailTo = "contact@casinaengineering.com";
$Subject = "Casina Engineers";
// prepare email body text
$Fields .= "<table border='2px' style='border-collapse:collapse; width:100%;'>";
$Fields .= "<tr>";
$Fields .= "<td style='padding:5px;'>First Name</td>";
$Fields .= "<td style='padding:5px;'>".$f_name."</td>";
$Fields .= "</tr>";

$Fields .= "<tr>";
$Fields .= "<td style='padding:5px;'>Last Name</td>";
$Fields .= "<td style='padding:5px;'>".$l_name."</td>";
$Fields .= "</tr>";

$Fields .= "<tr>";
$Fields.= "<td style='padding:5px;'>Email</td>";
$Fields .= "<td style='padding:5px;'>".$email."</td>";
$Fields .= "</tr>";

$Fields .= "<tr>";
$Fields.= "<td style='padding:5px;'>Phone Number</td>";
$Fields .= "<td style='padding:5px;'>".$mobile."</td>";
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