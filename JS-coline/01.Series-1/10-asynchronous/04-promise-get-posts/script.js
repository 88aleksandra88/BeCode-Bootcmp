// 10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)


newFunction();
function newFunction() {
    (() => {
        document.getElementById("run").addEventListener("click", () => 
        {
            window.lib.getPosts().then(
                function tarace(article) 
                {
                    console.log(article);

                }

            );


        });

    })();
}

