<?php
$web_developpement = array(
    'frontend' => [],
    'backend' => [],
);
array_push($web_developpement['frontend'], 'xtml');
array_push($web_developpement['backend'], 'ruby on rails');
array_push($web_developpement['frontend'], 'css');
array_push($web_developpement['backend'], 'flash');
array_push($web_developpement['frontend'], 'javascript');
echo '<pre>';
print_r($web_developpement);
echo '</pre>';

$replace = array(0 => 'html');
$web_developpement2 = array_replace($web_developpement['frontend'], $replace);

echo 'Update ';
echo '<pre>';
print_r($web_developpement2);
echo '</pre>';

$remove = 'Flash';
unset($web_developpement2[array_search($remove,$web_developpement2)]);

echo 'Flash removed ';
echo '<pre>';
print_r($web_developpement2);
echo '</pre>';

?>