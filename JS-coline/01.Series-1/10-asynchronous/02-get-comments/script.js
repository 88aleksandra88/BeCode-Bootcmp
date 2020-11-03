// 10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires


newFunction();
function newFunction() {
    (() => {
        document.getElementById("run").addEventListener("click", () => {
            window.lib.getPosts((_error, arrayArticles) => {
                arrayArticles.forEach((article) => {
                    window.lib.getComments(article.id, (_error, arrayComment) => {
                        article.comments = arrayComment;
                    });

                });
                console.log(arrayArticles);
            });

        });
    })();
}

