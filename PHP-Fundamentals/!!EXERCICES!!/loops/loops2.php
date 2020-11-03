<?php
$amount_of_lines = 1;

while ($amount_of_lines <= 120)  //while loop
{
    echo $amount_of_lines . ". : I shall not watch flies fly when I'm learning PHP.<br />";
    $amount_of_lines ++; 

}

for ($amount_of_lines = 1; $amount_of_lines <= 120; $amount_of_lines ++) //for loop
{
    echo $amount_of_lines . ". : I shall not watch flies fly when I'm learning PHP.<br />";

}

$name = array('Adri', 'Calvin', 'Staphane', 'Bastien', 'Chris', 'François', 'Gerardo', 'J-C', 'John', 'Jurgen', 'Jéérémy', 'Loic', 'Marie', 'Maxandre', 'Mohamed', 'Nico', 'Aurore', 'Nathan', 'Arnaud', 'David', 'Pierre', 'Robby', 'Robin', 'Simon');
   foreach($name as $name){
       echo 'Hello mate ' .$name. '</br>';
   }

   $country = array('Belgique','United States of America','Poland', 'United Kingdoom','France', 'Italia', 'Spain', 'Canada', 'China', 'Uruguay');
       echo ' Loop FROM array';
       echo '<select>';
       foreach($country as $country){
           echo '<option name="'.$country.'" value="'.$country.'"> '.$country.' </option>';
       }
       echo '</select><br>';

       $countryTwo = array('Belgique','United States of America','Poland', 'United Kingdoom','France', 'Italia', 'Spain', 'Canada', 'China', 'Uruguay');
       $isolate = array('BE', 'USA', 'PL', 'UK', 'FR', 'IT', 'SP', 'CA', 'CH', 'UR');
       $newcountry = array_combine($isolate, $countryTwo);
       echo 'New table witch Key val and 2 tables <br>';
       echo '<pre>';
       print_r( $newcountry);
       echo '</pre>';

       echo 'with Iso <br>';
       echo '<select>';
       echo '<pre>';
       foreach($newcountry as $key => $value){
           echo '<option name="'.$value.'" value="'.$key.'"> '.$value.' </option>';
       };
       echo '</pre>'; 
       echo '</select><br><br>';       
   


?>