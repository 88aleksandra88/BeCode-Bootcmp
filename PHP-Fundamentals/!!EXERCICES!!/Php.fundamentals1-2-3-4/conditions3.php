<?php
if (isset($_GET['age'])){ 
    if($_GET['age']<12) 
    echo 'Hello kiddo!';
    

    else if($_GET['age'] >12 and $_GET['age'] <18){ 
    echo 'Hello Teenager!';
}

    else if($_GET['age'] >18 and $_GET['age'] <115){ 
    echo 'Hello Adult!';
    }

    else if($_GET['age'] >115){ 
    echo 'Wow! Still alive ? Are you a robot, like me ? Can I hug you ?';
}}
?>
<form method="get" action="">
	<label for="age">Enter your age</label>
	<input type="" name="age">
	<input type="submit" name="submit" value="Greet me now">
</form>


