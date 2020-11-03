
<?php  //a finir
class Ppl 
{
    public $age;
    public $gender;
}

if (isset($_GET['age'])and($_GET['gender']and($_GET['english']))){ 
    if($_GET['age']<12 and ($_GET['gender']=='femele'and($_GET['english']=='yes'))) 
         echo 'Hello kiddo girl!';
    else if($_GET['age']<12 and ($_GET['gender']=='femele'and($_GET['english']=='no'))){ 
         echo 'Aloha kiddo girl';
    }
    else if ($_GET['age']<12 and ($_GET['gender']=='male'and($_GET['english']=='yes'))){
        echo 'Hello kiddo boy!';
    }
    else if ($_GET['age']<12 and ($_GET['gender']=='male'and($_GET['english']=='no'))){
         echo 'Aloha kiddo boy!';
    
    }
    

    else if($_GET['age'] >12 and ($_GET['age']<18 and($_GET['gender']=='female'and($_GET['english']=='yes')))){ 
        echo 'Hello Teenage girl!';
    }
    else if($_GET['age'] >12 and ($_GET['age']<18 and($_GET['gender']=='female'and($_GET['english']=='no')))){
        echo 'Aloha Teenage girl';
    }
    else if($_GET['age'] >12 and ($_GET['age']<18 and($_GET['gender']=='male'and($_GET['english']=='yes')))){ 
        echo 'Hello Teenage boy!';
    }
    else if($_GET['age']>12 and($_GET['age']<18and($_GET['gender']=='male'and($_GET['english']=='no')))){
        echo 'Aloha Teenage boy!';
    }


    else if($_GET['age'] >18 and ($_GET['age'] <115 and($_GET['gender']=='femele'and($_GET['english']=='yes')))){ 
        echo 'Hello Girl!';
    }
    else if($_GET['age']>18 and($_GET['age']<115 and($_GET['gender']=='female'and($_GET['english']=='no')))){
        echo 'Aloha Girl';
    }
    else if($_GET['age'] >18 and ($_GET['age'] <115 and($_GET['gender']=='male'and($_GET['english']=='yes')))){
        echo 'Hello boy!';
    }
    else if($_GET['age']>18 and($_GET['age']<115 and($_GET['gender']=='male' and($_GET['english']=='no')))){
        echo 'Aloha Boy!';
    }

    else if($_GET['age'] >115 and ($_GET['gender']=='female'and($_GET['english']=='yes'))){ 
    echo 'Wow grandma! Still alive ? Are you a robot, like me ? Can I hug you ?';
    }
    else if($_GET['age']>115 and($_GET['gender']=='femele'and($_GET['english']=='no'))){
        echo 'Aloha Grandma!';
    }
    else if($_GET['age'] >115 and ($_GET['gender']=='male'and($_GET['english']=='yes'))){
        echo'Wow grandpa! Still alive ? Are you a robot, like me ? Can I hug you ?';
    }
    else if($_GET['age']>115and($_GET['gender']=='male'and($_GET['english']=='no'))){
        echo 'Aloha Grandpa!';
    }
}
?>
<form method="get" action="">
	<label for="age">Enter your age</label>
    <input type="" name="age"><br/>
    <label for="gender">What gender do you are ? </label>
    <label for="male"> male<input type="radio" name="gender" value='male'></label>
    <label for="girl"> female<input type="radio" name="gender" value='female'></label><br>
    <label for="english"> Do you speak English?</label>
    <label for="yes">yes <input type="radio" name="english" value='yes'></label>
    <label for="no">no <input type="radio" name="english" value='no'></label><br>
	<input type="submit" name="submit" value="Greet me now">
</form>


