<?php 
$names= array('John', 'jeanne', 'Joan', 'émile');
foreach ($names as $name){
    echo ucfirst($name);
}

$names= array('John', 'jeanne', 'Joan', 'émile');
var_dump($names);

foreach ($names as $key=> $value){
    $names[$key] = ucfirst($value);
}
var_dump($names);

$pronouns = array ('I', 'You', 'He/She','We', 'You', 'They');
foreach($pronouns as $key => $value);{
    if($value == 'He/She'){
        echo $value. 'codes </br>';
    }else{
        echo $value. 'code </br>';
     }
     echo 'Prints numbers from 1 to 120 using "while"<br>';
}

$num = 1 ;
while($num <= 120){
    echo $num. '<br>' ;
    $num++;
}

echo 'Prints numbers from 1 to 120 using  "for"<br>';

for($secondNum = 1 ; $secondNum <= 120 ; $secondNum++){
    echo $secondNum. '<br>' ;
}

?>