<?php
$fam = array( 'Magda', 'Lilou' , 'Wala', 'Lila'); 
echo '<pre>';

print_r($fam);
echo '</pre>';

$recepices = array( 'Pizza', 'Junk Food' , 'Pastas', 'Lasagnas'); 
echo '<pre>';
print_r($recepices);
echo '</pre>';

$films = array( 'Star Wars', 'Harry Potter' , 'Lord of Rings', 'Hunger Games'); 
echo $films['3'];

$me = array(
    'firstname' => 'Aleks',
    'age' => 32,
    'favSeason' => 'fall',
    'soccerLover' => false,
    'hobbies' => array('gaming', 'coding', 'reading','cooking')
    );
    $soulmate = array(
        'firstname' => 'Magda',
        'age' => 30,
        'favSeason' => 'spring',
        'soccerLover' => true,
        'hobbies' => array('gaming', 'soccer', 'reading')
    );

    echo '<pre>';
    print_r($me);
    echo '</pre>';


    // perform array operation
    $possible_hobbies_via_intersection = array_intersect($me['hobbies'],$soulmate['hobbies']);
    $possible_hobbies_via_merge = array_merge($me['hobbies'],$soulmate['hobbies']);

    echo '<pre>';
    print_r($possible_hobbies_via_intersection);
    print_r($possible_hobbies_via_merge);
    echo '</pre>';

    $mum = array(
        'firstname' => 'Wala',
        'age' => 55,
        'favSeason' => 'summer',
        'soccerLover' => false,
        'hobbies' => array('cooking', 'garden', 'baking')
    );
    $soulmate = array(
        'firstname' => 'Magda',
        'age' => 30,
        'favSeason' => 'spring',
        'soccerLover' => true,
        'hobbies' => array('gaming', 'soccer', 'reading')
    );

    echo '<pre>';
    print_r($mum);
    echo '</pre>';
    echo count($mum['hobbies'])." and " . count($me['hobbies']);

    $me['hobbies'][] = 'taxidermy';
    echo '<p> update array</p>';
    echo'<pre>';
    print_r($me);
    echo'</pre>'


?>