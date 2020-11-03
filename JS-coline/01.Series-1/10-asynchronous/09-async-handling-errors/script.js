// 10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)


newFunction();
function newFunction() {
    (() => {
        document.getElementById("run").addEventListener("click", async () => 
        {

            try {
                let result = await window.lib.getPersons();
                console.log(result);
            }
            catch (error) 
            {
                console.error(error);
            }

        });
    })();
}

