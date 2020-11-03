// 11-fetch/05-delete/script.js - 11.5: supprimer un élément


document.getElementById("run").addEventListener("click", () => {

    let dataInput = document.getElementById("hero-id").value; 
    
    fetch('http://localhost:3000/heroes/ dataInput',
    {
    method: 'DELETE'

    })
    
})

//code semble bon mais ne marche pas

