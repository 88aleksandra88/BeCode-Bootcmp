// 06-dom/11-change-event-input-one/script.js - 6.11: change event (1)


(() => {

    newFunction();

})();
function newFunction() {
    let p1 = document.getElementById("pass-one");
    let count = document.getElementById("counter");
    p1.addEventListener("input", () => 
    {
        p1.setAttribute("maxlength", 10);
        count.innerText = p1.value.length + "/10";
    });
}

