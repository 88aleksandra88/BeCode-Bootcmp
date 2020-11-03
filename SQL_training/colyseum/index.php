<?php
$user = 'root';
$password = '';
try

{
    $bdd = new PDO('mysql:host=localhost;dbname=colyseum;charset=utf8', $user, $password);
}
catch(Exception $e)
{
        die('Erreur : '.$e->getMessage());
}
$result = $bdd->query('SELECT * FROM clients');
echo "<p>Liste des clients</p>";
while ($data = $result->fetch());
{
    echo "<p>",$data['lastName']," ",$data['firstName'],"</p><br/>";
}
$result2 = $bdd->query('SELECT * FROM shows ORDER BY title');
echo "<p>Les spectacles</p>";
while($data=$result2->fetch()){
    echo "<p>",$data['title']," ",$data['performer']," ",$data['date']," ",$data['startTime'],"</p><br/>";
    }
echo "<p>Liste des 20 premiers clients</p>";
$result3 = $bdd->query('SELECT * FROM clients LIMIT 0,20');
while($data = $result3->fetch()){
    echo "<p>",$data['lastName'],"</p><br/>";
}
echo "<p>Client avec la carte de fidélité</p>";
$result4 = $bdd->query("SELECT * FROM clients WHERE card = 1");
while($data = $result4->fetch()){
    echo "<p>",$data['lastName'],"</p><br/>";
}
echo "<p>Nom du client commence par M</p>";
$result5 = $bdd->query("SELECT * FROM clients WHERE lastName LIKE 'm%' ORDER BY lastName");
while($data = $result5->fetch()){
    echo "<p>Nom : ",$data['lastName'],"</p>";
    echo "<p>Prenom :",$data['firstName'],"</p><br/>";
}
echo "<p>Fiche client</p>";
$result6 = $bdd->query("SELECT * FROM clients");
while($data = $result6->fetch()){
    echo "<div>";
    echo "<p>Nom : ",$data['lastName'],"</p>";
    echo "<p>Prenom :",$data['firstName'],"</p>";
    echo "<p>Date de naissance :",$data['birthDate'],"</p>";
    if ($data['card']==1){
    echo "<p>Card : oui</p>";
    echo '<p>Card numéro :',$data['cardNumber'],'</p>';
    }
    else if ($data['card']==0){
        echo "<p>Card : Non</p>";
    }
    echo "</div>";
}
