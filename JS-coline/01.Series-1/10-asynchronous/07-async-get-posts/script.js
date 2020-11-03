// 10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)


newFunction();
function newFunction() {
    (() => {
        document.getElementById("run").addEventListener("click", async function ()
         {
            let articles = await window.lib.getPosts();
            console.log(articles);


        });
    })();
}

