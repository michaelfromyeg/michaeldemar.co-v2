<?php 
if(isset($_POST['Submit'])){
    $to = "michaelfromyeg@gmail.com";
    $from = $_POST['email'];
    $first_name = $_POST['firstname'];
    $last_name = $_POST['lastname'];
    $subject = $_POST['subject'];
    $message = $first_name . " " . $last_name . " wrote the following:" . "\n\n" . $_POST['message'];
    $headers = "From:" . $from;
    mail($to,$subject,$message,$headers);

    echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
    }
?>