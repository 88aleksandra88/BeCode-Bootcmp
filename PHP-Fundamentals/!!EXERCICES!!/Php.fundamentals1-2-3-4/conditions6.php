<?php //a finir
if (isset($_GET['name'])and($_GET['age']and($_GET['gender']))){
    if($_GET['age']<=21and($_GET['age']>=40and($_GET['gender']=='yes'))){ 
    echo 'welcome to the team !';
    }
    else if($_GET['age']<41 and($_GET['age']>20and($_GET['gender']=='no'))){
        echo "Sorry you don't fit the criteria";
    }
}

?>
<form method="get">
<label for="name">Enter your name</label>
        <input type="" name="name"><br/>
            <label for="age">Enter your age</label>
        <input type="texte"="age"><br/>
            <label for="gender"> Are you a female?</label>
            <label for="yes">yes <input type="radio" name="gender" value='yes'></label>
            <label for="no">no <input type="radio" name="gender" value='no'></label><br>
        <input type="submit" name="submit" value="Submit">
</form>
