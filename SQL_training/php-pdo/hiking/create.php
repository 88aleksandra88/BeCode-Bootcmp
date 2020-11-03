<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Ajout randonée</title>
    </head>
    <body>
        <a href="read.php">Donnés</a>
        <p>Ajouter des donnés</p>
        <form action="create.php" method="post">
            <label for="name">Name</label>
            <input type="text" name="name" value="">

            <label for="dif">Difficulté</label>
            <select name="dif">
                <option value="tres facile">Très facile</option>
                <option value="facile">Facile</option>
                <option value="moyen">Moyen</option>
                <option value="difficile">Difficile</option>
                <option value="Tres difficile">Tres difficile</option>
            </select>

            <label for="height">Distance</label>
            <input type="text" name="distance" value="">

            <label for="duration">La durée</label>
            <input type="text" name="duration" value="">

            <label for="height_difference">La dénivelé</label>
            <input type="text" name="height_dif" value="">

            <button type="submit" name="button">Envoyer</button>
        </form>
    </body>


</html>

<?php
$user = 'root';
$password = '';
try
{
    $bdd = new PDO('mysql:host=localhost;dbname=hiking',$user, $password);
}
catch(Exception $e)
{
    die('Erreur : ' .$e->getMessage());
}
if(isset($_POST['name']) || isset($_POST['dif']) || isset($_POST['distance']) || isset($_POST['duration']) || isset($_POST['height_dif']))
{
    $name = $_POST['name'];
    $dif = $_POST['dif'];
    $distance = $_POST['distance'];
    $duration = $_POST['duration'];
    $height_dif = $_POST['height_dif'];

    $req = $bdd->prepare('INSERT INTO `hiking_info`(`name`, `difficulty`, `distance`, `duration`, `height_difference`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5])');
    $req->execute(array(
        'name' => $name,
        'dif' => $dif,
        'distance' => $distance,
        'duration' => $duration,
        'height_dif' => $height_dif,

    ));
    echo "<p> Ajouté avec succes!</p>";

}

/*securiser tt quand j'ai le temps
?>