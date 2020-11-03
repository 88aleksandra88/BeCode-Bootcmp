// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker


(() => {

    let t = newFunction();

    newFunction_1(t);

})();
function newFunction_1(t) {
    document.getElementById("increment").addEventListener("click", () => {

        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 1;
        }

        t.innerHTML = localStorage.clickcount;
    });
}

function newFunction() {
    return document.getElementById("target");
}

