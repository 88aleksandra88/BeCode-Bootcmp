// 09-misc/03-worst-ui-one/script.js - 9.3: worst user interface (1) : phone slider


(() => {

    newFunction();

})();
function newFunction() {
    let s = document.getElementById("slider");
    let target = document.getElementById("target");

    s.oninput = function () {
        myFunction();
    };

    function myFunction() {
        let val = s.value;
        target.innerHTML = "0" + val;
    }
}

