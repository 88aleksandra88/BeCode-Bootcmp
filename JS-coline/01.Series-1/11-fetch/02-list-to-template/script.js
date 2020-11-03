

const newLocal = (() => {
    document.querySelector("#run").addEventListener("click", async () => {
        fetch('http://localhost:3000/heroes')


        let d = await response.json();

        document.getElementById("target").innerHTML =
            d.map((perso) => {
                return `
                    <div id=${perso.id}>
                    
                        <li class="hero">
                            <h4 class="title">
                                <strong class="name">${perso.name}</strong>
                                <em class="alter-ego">${perso.alterEgo}</em>
                            </h4>
                            <p class="powers">${perso.abilities}</p>
                        </li>
                    </div>
                `;
            });

    })();
});
//pas d'erreur mais na marche pas
