// 11-fetch/03-details/script.js - 11.3: details


document.getElementById("run").addEventListener("click", async () => {
    let id = await fetch("http://localhost:3000/heroes");
    let rXmen = await id.json(); console.log(rXmen);

    let input = document.getElementById("hero-id").value ; console.log(input);
    const find = rXmen.find(element => element.id == input); console.log(found);    

    if(found){
        confirm("Succed? Click ok if you did")
        
    }
    else{
        confirm("Any id found")
    }

    document.getElementById("target").innerHTML = 
              `  <div id=${found.id}> 
                    <li class="hero">
                        <h4 class="title">
                            <strong class="name">${found.name}</strong>
                            <em class="alter-ego">${found.alterEgo}</em>
                        </h4>
                        <p class="powers">${found.abilities}</p>
                    </li>
                </div>
            `
    });

    //je sais pas si ca fais ce que ca dois faire ???? mais ca marche quand meme