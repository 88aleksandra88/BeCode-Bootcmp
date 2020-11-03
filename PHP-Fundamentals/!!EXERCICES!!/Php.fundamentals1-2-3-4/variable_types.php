<html>
  <head><title>Hi!</title></head>
  <body>
  	<?php 
        $name = 'aleks';
        $age = 32;
        $color = 'blue';
        $family= array(
            0 => 'Magda',
            1 => 'Lilou',
            2 => 'Wala');
            ?>
            
        <p>Hi! My name is <?php echo $name ?>.</p>
        <p>I am <?php echo $age ?> years old.</p>
        <p>My eyes are <?php echo $color ?>. </p>
        <p>The first person in my family is <?php echo $family[0] ?>. </p>
  </body>
</html>