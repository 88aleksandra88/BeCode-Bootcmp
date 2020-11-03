// 11-fetch/01-list-to-console/script.js - 11.1: liste vers console
(() => {
document.getElementById("run").addEventListener("click", () => { 
    fetch('http://localhost:3000/heroes')
    .then(response => response.json())
    .then(result => console.log(result));
});
})(); 
   
//marcheuhhh enfin!!!