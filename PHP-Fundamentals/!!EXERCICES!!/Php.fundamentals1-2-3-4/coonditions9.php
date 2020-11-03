<?php 
if (isset($_GET['note'])){
    $note = $_GET['note'];
        switch ($note) {
            case 1:
            case 2:
            case 3:
            case 4:
                echo('This work is really bad. What a dumb kid!');
                break;
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                echo('This is not sufficient. More studying is required.');
                break;
            case 10:
                echo('Barely enough!');
                break;
            case 11:
            case 12:
            case 13:
            case 14:
                echo('Not bad!');
                break;
            case 15:
            case 16:
            case 17:
            case 18:
                echo('Bravo,bravissimo!');
                break;
            case 19:
            case 20:
                echo('Too good to be true : confront the cheater!');
            default :
                echo 'All kids are stupid';
        }
    }
    ?>
<form method="get" action="">
    <label for="">Enter your note</label><br/>
    <label for="">1 <input type="radio" name="note" value='1'></label><br/>
    <label for="">2 <input type="radio" name="note" value='2'></label><br>
    <label for="">3 <input type="radio" name="note" value='3'></label><br>
    <label for="">4 <input type="radio" name="note" value='4'></label><br>    
    <label for="">5 <input type="radio" name="note" value='5'></label><br>
    <label for="">6 <input type="radio" name="note" value='6'></label><br>
    <label for="">7 <input type="radio" name="note" value='7'></label><br>
    <label for="">8 <input type="radio" name="note" value='8'></label><br>
    <label for="">9 <input type="radio" name="note" value='9'></label><br>
    <label for="">10 <input type="radio" name="note" value='10'></label><br>
    <label for="">11 <input type="radio" name="note" value='11'></label><br>
    <label for="">12 <input type="radio" name="note" value='12'></label><br>
    <label for="">13 <input type="radio" name="note" value='13'></label><br>
    <label for="">14 <input type="radio" name="note" value='14'></label><br>
    <label for="">15 <input type="radio" name="note" value='15'></label><br>
    <label for="">16 <input type="radio" name="note" value='16'></label><br>
    <label for="">17 <input type="radio" name="note" value='17'></label><br>
    <label for="">18 <input type="radio" name="note" value='18'></label><br>
    <label for="">19 <input type="radio" name="note" value='19'></label><br>
    <label for="">20 <input type="radio" name="note" value='20'></label><br>
    <input type="submit" name="submit" value="Submit">
</form>
