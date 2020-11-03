// 10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur


newFunction();
function newFunction() {
    (() => {
        document.getElementById("run").addEventListener("click", () => 
        {
            window.lib.getPersons(function (error, arrayPerson)
             {

                    if (error) {
                        console.error(error);
                    }
                    else {
                        console.log(arrayPerson);
                    }

                });

        });
    })();
}

