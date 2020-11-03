<?php
//First, you need to declare the function to make it available. It is stored in memory, not ran.
function say_hello($firstname){
	echo '<p>Hello $firstname!</p>';
	echo '<hr>';
}

// Function calls during "Runtime" :
say_hello('Maurice');
say_hello('Alice');
say_hello('Jésus');
say_hello('Judas');

$str = 'This is going to be shuffled !';
$str = str_shuffle($str);
 
echo $str;


$toCapitalize = 'josiane';
date_default_timezone_set('UTC');
echo $toCapitalize;

$name = ucfirst($toCapitalize); 
echo  $name . '<br><br>';
echo "Current year : ".date("Y"). " <br>";
echo "Current date : ".date('l jS \of F Y h:i:s A'). " <br><br>";



function sum($a,$b){
    echo  $a * $b; "<br>";
}
sum(12,4);
function secondSum($c,$d){
    if(is_int($c) && is_int($d) ){
        echo $c * $d.'<br>';
    }else{
        echo " !Error: NaN!<br>";
    }
}
secondSum("er", 2);
secondSum(12,4);

$quote = "Our phones fall we panic our friend fall we laugh!";
$resultat = "";
function acro($string){
    $split = explode("", $string);
    $resultat = $split[0][0] . $split[1][0] . $split[2][0] . $split[3][0] . $split[4][0] . $split[5][0] . $split[6][0] . $split[7][0] . $split[8][0] . $split[9][0] . $split[10][0];
    return strtoupper($resultat);
    echo $resultat;
    }


$replaceLetter = array();
$regex = "/ae/i";
$secondRegex = "/æ/i";

echo preg_replace($regex,"æ","caecotrophie, chaenichthys, microsphaera, sphaerotheca");
echo '<br>';
echo preg_replace($secondRegex,"ae","cæcotrophie, chænichthys, microsphæra, sphærotheca");
echo '<br><br>';    

function returnInf($message, $class = "info"){
    echo '<div class="'.$class.'">'.$class.': '.$message. '</div>';
}
returnInf("Incorrect email address","error");
returnInf('Incorrect address');

function random($length){
   $charac = 'abcdefghijklmnopqrstuvwxyz';
   $characLength = strlen($charac);
   $randomWords = '';
   for($i = 0;$i < $length ; $i++){
       $randomWords .= $charac[rand(0, $characLength -1)];
   }
   return $randomWords;
}
echo random(rand(1,5)). '<br>' ;
echo random(rand(7,15)). '<br>';

$decapitalize = "STOP YELLING I CAN'T HEAR MYSELF THINKING!!<br>";
echo 'The string is : ' .$decapitalize;
echo strtolower($decapitalize);

function calculate_volume($height,$ray){
    echo  'The volume of a cone: '.$ray. ' height: ' .$height. ' = ' .$ray * $ray * 3.14 * $height * (1/3).'cm<sup>3</sup><br />';
}
calculate_volume(5,10);
?>