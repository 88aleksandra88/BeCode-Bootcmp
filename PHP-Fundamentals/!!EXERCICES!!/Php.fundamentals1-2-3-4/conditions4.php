
<?php  
class Ppl 
{
    public $age;
    public $gender;
}

if (isset($_GET['age'])and($_GET['gender'])){ 
    if($_GET['age']<12 and ($_GET['gender']=='femele')) 
    echo 'Hello kiddo girl!';
    else if ($_GET['age']<12 and ($_GET['gender']=='male')){
        echo 'Hello kiddo boy!';
    }
    

    else if($_GET['age'] >12 and ($_GET['age']<18 and($_GET['gender']=='female'))){ 
    echo 'Hello Teenage girl!';
    }
    else if($_GET['age'] >12 and ($_GET['age']<18 and($_GET['gender']=='male'))){ 
    echo 'Hello teenage boy!';
    }


    else if($_GET['age'] >18 and ($_GET['age'] <115 and($_GET['gender']=='femele'))){ 
    echo 'Hello Girl!';
    }
    else if($_GET['age'] >18 and ($_GET['age'] <115 and($_GET['gender']=='male'))){
        echo 'Hello boy!';
    }

    else if($_GET['age'] >115 and ($_GET['gender']=='female')){ 
    echo 'Wow grandma! Still alive ? Are you a robot, like me ? Can I hug you ?';
    }
    else if($_GET['age'] >115 and ($_GET['gender']=='male')){
        echo'Wow grandpa! Still alive ? Are you a robot, like me ? Can I hug you ?';
    }
}
?>
<form method="get" action="">
	<label for="age">Enter your age</label>
    <input type="" name="age"><br/>
    <label for="gender">What gender do you are ? </label>
    <label for="male"> male<input type="radio" name="gender" value='male'></label>
    <label for="girl"> female<input type="radio" name="gender" value='female'></label><br>
	<input type="submit" name="submit" value="Greet me now">
</form>


