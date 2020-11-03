// 06-dom/05-hover-image/script.js - 6.5: image hover


(() => {

    // your code here
    newFunction();
        //image.addEventListener("mouseout", () => {
       // image.setAttribute("src" .material);
     
    
    
})();
function newFunction() {
    let image = document.querySelector(".material img");
    let source = image.getAttribute("data-hover");

    image.addEventListener("mouseover", () => {
        image.setAttribute("src", source);
    });
}

