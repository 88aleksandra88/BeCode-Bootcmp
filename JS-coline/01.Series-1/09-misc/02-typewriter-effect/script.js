// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


(() => {

    newFunction();

})();
function newFunction() {
    let t = document.getElementById("target");
    let string = t.innerText;
    t.innerHTML = "";
    let i = 0;
    typeWriter();

    function typeWriter() {
        let delay = Math.floor(Math.random() * 150 + 1);
        if (i < string.length) {
            t.innerHTML += string.charAt(i);
            i++;
            newFunction_1();
        }

        function newFunction_1() {
            setTimeout(typeWriter, delay);
        }
    }
}
//fini
