// 10-asynchronous/06-promise-handling-errors/script.js - 10.6: gestion d'erreur (Promise)


newFunction();

function newFunction() {
    (() => {
        document.getElementById("run").addEventListener("click", () => {
            window.lib.getPersons().then(persons => {
                console.log(persons);
            })
                .catch(() => {
                    console.error();
                });
        });

    })();
}
//je sais pas si c'est correct
