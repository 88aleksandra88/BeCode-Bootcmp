// 06-dom/12-change-event-input-two/script.js - 6.12: change event (2)


(() => {

    newFunction();


})();
function newFunction() {
    let p1 = document.getElementById("pass-one");
    let valid = document.getElementById("validity");
    let regex = /[0-9].*[0-9]/;

    p1.addEventListener("input", () => 
    {

        newFunction_1(regex, p1, valid);

    });
}

function newFunction_1(regex, p1, valid) {
    let check = regex.test(p1.value);
    check && p1.value.length >= 8 ? valid.innerText = "valid" : valid.innerText = "No valid";
}

