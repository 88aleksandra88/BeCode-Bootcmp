// 06-dom/04-attr-create/script.js - 6.4: manipulating attributes and creating elements


(() => {

    // your code here
    newFunction();


})();
function newFunction() {
    let source = document.getElementById("source");
    let attribute = source.getAttribute("data-image");
    let image = document.createElement("img");
    image.setAttribute("src", attribute);
    let target = document.getElementById("target");
    target.appendChild(image);
    document.querySelector(".material").removeChild(source);
}

