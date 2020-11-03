
// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {

        let carre = [];

        for (let i = 1; i <= 21; i++) {
            carre.push(Math.pow(i, 2));
        }

        alert(carre);

    

    });

})();

// push() ajoute un ou plusieurs éléments à la fin d'un tableau et retourne la nouvelle taille du tableau.