// 10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles


newFunction();
function newFunction() {
    (() => {
        document.getElementById("run").addEventListener("click", () => {
            window.lib.getPosts((_error, arrayArticles) => {
                console.log(arrayArticles);

            });
        });

    })();
}

