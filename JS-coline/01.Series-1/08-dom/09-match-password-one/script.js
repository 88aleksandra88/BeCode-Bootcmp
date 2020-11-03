// 06-dom/09-match-password-one/script.js - 6.9: password verification (1)


(() => {

    // your code here

    newFunction();
    

})();
function newFunction() {
    document.getElementById("run").addEventListener("click", () => 
    {
        let p1 = document.getElementById("pass-one");
        let p2 = document.getElementById("pass-two");
        if (p1.value !== p2.value) {
            p2.style.borderColor = "red";
        }
    });
}

