// 10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)


newFunction();
function newFunction() {
    (() => {
        document.getElementById("run").addEventListener("click", async () => 
        {

            let articles = await window.lib.getPosts();
            articles.forEach(() => {
            });

        });
    })();
}

