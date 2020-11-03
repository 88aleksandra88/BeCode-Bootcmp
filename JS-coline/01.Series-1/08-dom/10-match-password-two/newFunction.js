// 06-dom/10-match-password-two/script.js - 6.10: password verification (2)
(() => {

    // your code here
    newFunction();


})();
function newFunction() {
    document.getElementById("run").addEventListener("click", () => {
        let p1 = document.getElementById("pass-one");
        let p2 = document.getElementById("pass-two");
        if (p1.value !== p2.value) {
            p1.classList.add("error");
            p2.classList.add("error");
        }
    });
}
