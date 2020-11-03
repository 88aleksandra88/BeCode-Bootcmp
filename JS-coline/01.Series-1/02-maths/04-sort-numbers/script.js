// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        let num = document.getElementById("numbers").value;
        let arr = num.split(",");
        let sort = arr.sort((a, b) => a - b);
        alert(sort);

    });

})();
//split() permet de diviser une chaîne de caractères à partir d'un séparateur pour fournir un tableau de sous-chaînes.
