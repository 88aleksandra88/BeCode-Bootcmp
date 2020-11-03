<?php  
//"Different greetings according to time" Exercise
date_default_timezone_set('Europe/Brussels');
$now = date('H:i');  //H
echo "The  current hour is " . $now;
// Test the value of $now and display the right message according to the specifications.

if($now >= '05:00' and $now <= '09:00'){
    echo " Good morning!";
} 
else if($now >= '09:01' and $now <= '12:00'){
    echo " Good day!";
}
else if($now >= '12:01' and $now <= '16:00'){
    echo " Good afternoon!";
}
else if($now >='16:01' and $now <= '21:00'){
    echo " Good evening!";
}
else if($now >='21:01' and $now <= '04:59'){
    echo " Good night!";
}
?>
