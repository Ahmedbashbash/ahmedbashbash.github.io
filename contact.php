<?php
$field_firstname = $_POST['cf_firstname'];
$field_lastname = $_POST['cf_lastname'];
$field_phone = $_POST['cf_phone'];
$field_email = $_POST['cf_email'];
$field_message = $_POST['cf_message'];

$mail_to = 'Ahmadbashbash99@gmail.com';
$subject = 'Message from '.$field_firstname .$field_lastname;

$body_message = 'From: '.$field_firstname. $field_lastname."\n";
$body_message .= 'E-mail: '.$field_email."\n";
$body_message .= 'E-phone: '.$field_phone."\n";
$body_message .= 'Message: '.$field_message;

$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) { ?>
	<script language="javascript" type="text/javascript">
		alert('Thank you for the message. We will contact you shortly.');
		window.location = 'contact_page.html';
	</script>
<?php
}
else { ?>
	<script language="javascript" type="text/javascript">
		alert('Message failed. Please, try again');
		window.location = 'contact_page.html';
	</script>
<?php
}
?>
