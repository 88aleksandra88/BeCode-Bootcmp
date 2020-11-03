<?php $possible_states = array('filthy','dirty','clean');


// When testing, change the index value to navigate to the possible array values
$room_filthiness = array('filthy'); 

if( $possible_states == 'filthy'){
	echo "Yuk, Room is Disgusting! Let's clean it up !";
} else if( $possible_states == 'dirty' ){
	echo "Yuk, Room is dirty : let's clean it up !";
// ...
} else {
	echo "<br>Nothing to do, room is neat.";
}

?>
