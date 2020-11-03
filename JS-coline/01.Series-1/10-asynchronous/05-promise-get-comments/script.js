// 10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)


newFunction();
function newFunction() {
    (() => {
        document.getElementById("run").addEventListener("click", () => 
        {
            window.lib.getPosts()
                .then(articles => {
                    articles.forEach(article => {
                        window.lib.getComments(article.id).then(comment =>
                            {
                            article.comment = comment;
                        });

                    });
                    console.log(articles);
                });
        });
    })();
}

