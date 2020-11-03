<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UFT-8">
    <title>Exo</title>
</head>

<body>
    <form method="Get">
        <label for="childName">Child name <input type="text" name="childName" placeholder="Child name"></label><br>
        <label for="gender">Boy or Girl :<br><label for="girl">Girl</label><input type="radio" name="gender" value="My daughter "></label>
        <label for="boy">Boy</label><input type="radio" name="gender" value="My son "></label><br>
        <label for="teacher">Teachers name <input type="text" name="teacher" placeholder="Teachers name"></label><br>
        <select type="select" name="reason">
            <label>Reason of absence ?</label>
            <option name="school" value="Dont't like school anyway.">illeness</option>
            <option name="fish" value=" our Gold fish is dead.">Familly issue</option>
            <option name="grandma" value=" Grandma passed away for the fourth time....">Burials</option>
            <option name="tired" value=" Was really tired.">Other</option>
        </select><br>
        <input type="submit" name="submit" value="Validate" />
    </form>
</body>


</html>
<?php
$status = false;
$checkedReason = '';
if (isset($_GET['gender']) && isset($_GET['childName']) &&  isset($_GET["teacher"]) &&  isset($_GET["teacher"])) {
    $gender = $_GET['gender'];
    $teacher = $_GET['teacher'];
    $reason = $_GET['reason'];
    $childName = $_GET['childName'];
} else {
    $gender = '...';
    $teacher = '...';
    $reason = '...';
    $childName = '...';

    $time = date('l jS \of F Y A');
    $why = '...';
    date_default_timezone_set('UTC') + 2;

    echo ' Dear Principal , <br>';
    echo 'My ' . $gender . " " . $childName . ', is the student of Miss ' . $teacher . '.<br> My child cannot insist on classes today.<br> ';
    echo 'The reason is ' . $reason . ' <br> My ' . $gender . 'can go back to school probably ' . $time;
    echo     '<br>If you need any complement information feel free to join me any time. Sincerly, mom of ' . $childName . '<br></p>';
}
?>