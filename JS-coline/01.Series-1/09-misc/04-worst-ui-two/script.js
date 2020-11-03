// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker


(() => {

    

    let { a, b, c, d, t } = newFunction();

    a.addEventListener("click", updateUI);
    b.addEventListener("click", updateUI);
    c.addEventListener("click", updateUI);
    d.addEventListener("click", updateUI);

    function updateUI() {
        let current = event.currentTarget;
        let min = Number(current.getAttribute("data-min"));
        let max = Number(current.getAttribute("data-max"));
        let value = Number(current.innerHTML);

        value = newFunction_1(value, max, min, current, t, a, b, c, d);
    }

})();

function newFunction_1(value, max, min, current, t, a, b, c, d) {
    value < max ? value = value + 1 : value = min;
    value < 10 ? value = "0" + value : value = value;

    current.innerHTML = value;
    t.innerHTML = "+" + a.innerHTML + b.innerHTML + c.innerHTML + d.innerHTML;
    return value;
}

function newFunction() {
    let a = document.getElementById("part-one");
    let b = document.getElementById("part-two");
    let c = document.getElementById("part-three");
    let d = document.getElementById("part-four");
    let t = document.getElementById("target");
    return { a, b, c, d, t };
}

