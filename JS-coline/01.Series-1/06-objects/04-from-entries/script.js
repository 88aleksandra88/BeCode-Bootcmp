// 06-objects/04-from-entries/script.js - 6.4: fromEntries


(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    // your code here

    const catArray = newFunction(keys, values);
    
    document.getElementById("run").addEventListener("click", () =>{
        
        const cat = Object.fromEntries(
          catArray.map(element => [element, {}])
          
        )
        
        console.log(cat)
    });
})();


function newFunction(keys, values) {
    return [keys, values];
}

