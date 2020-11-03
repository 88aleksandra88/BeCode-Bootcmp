// 11-fetch/04-add/script.js - 11.4: ajouter un élément


(() => {
    document.getElementById("run").addEventListener("click", () =>{
        let rName = document.getElementById("hero-name").value;
        let rAlt = document.getElementById("hero-alter-ego").value;
        let rPower = document.getElementById("hero-powers").value;

        fetch("http://localhost:3000/heroes", {

            method: 'POST',
            headers : {
                'Content-Type':'application/json;charset=UTF-8'

            },
            body: JSON.stringify({

                name: rName,
                alterego: rAlt,
                power: rPower,
            }),

        })
        .then((response) => response.json())
        .then((data) => console.log(data)) 
        
});
})();
