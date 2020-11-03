
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        let num1 = parseInt(document.getElementById("op-one").value, 10);
        let num2 = parseInt(document.getElementById("op-two").value, 10);
        alert(num1 + num2);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        let num1 = parseInt(document.getElementById("op-one").value, 10);
        let num2 = parseInt(document.getElementById("op-two").value, 10);
        alert(num1 - num2)

    });

    document.getElementById("multiplication").addEventListener("click", function() {
        let num1 = parseInt(document.getElementById("op-one").value, 10);
        let num2 = parseInt(document.getElementById("op-two").value, 10);
        alert(num1 * num2);
    });

    document.getElementById("division").addEventListener("click", function() {
        let num1 = parseInt(document.getElementById("op-one").value, 10);
        let num2 = parseInt(document.getElementById("op-two").value, 10);
        alert(num1 / num2);
    });
})();

//(parseInt) analyse une chaîne de caractère fournie en argument et renvoie un entier exprimé dans une base donnée.
//(getElementBy) renvoie un objet  Element représentant l'élément dont la propriété  id correspond à la chaîne de caractères spécifiée. Étant donné que les ID d'élément doivent être uniques, s'ils sont spécifiés, ils constituent un moyen utile d'accéder rapidement à un élément spécifique.
