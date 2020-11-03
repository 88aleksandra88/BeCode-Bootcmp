// 06-dom/03-select-three/script.js - 6.3: select multiple elements by css selector


(() => {

    // your code here
    newFunction();



})();
function newFunction() {
    let x = document.querySelectorAll(".target").innerHTML = "Owned";
    let i;
    for (i = 0; i < x.length; i++)
        document.querySelectorAll(".target")[i].innerHTML = "Owned";
}

