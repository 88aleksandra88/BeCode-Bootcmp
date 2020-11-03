<?php

require 'form.php';
$form = new Form(array(
    'username' => 'Lola!'
));

var_dump($form);
die();

echo $form->input('username');
echo $form->input('passwodd');
echo $form ->submit();
?>


