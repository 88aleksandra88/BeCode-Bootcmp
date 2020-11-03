<?php  //1 marche pas ajouter gif
if (isset($_GET['noname'])){
    if($_GET['noname']==1){
        echo '1';
    }
    else if($_GET['noname']==2){
        echo '2';
    }
    else if($_GET['noname']==3){
        echo '3';
    }
}

?>

<form method="get" action="">
    <label for="">Which one are you?</label><br/>
    <label for="">Human <input type="radio" name="nonname" value='1'></label><br/>
    <label for="">Cat <input type="radio" name="noname" value='2'></label><br>
    <label for="">Unicorn<input type="radio" name="noname" value='3'></label><br>
    <input type="submit" name="submit" value="Submit">
</form>



