// 05-arrays/04-walk-two/script.js - 5.4: walk through the list (2)


(() => {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here
    document.getElementById("run").addEventListener("click", function ()
    {
        fruits.forEach(element => console.log(element));
    })


 })();

 //forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.
