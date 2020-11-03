
// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)


(() => {

    newFunction();

})();
function newFunction() {
    document.getElementById("run").addEventListener("click", function () {
        document.body.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    });
}

