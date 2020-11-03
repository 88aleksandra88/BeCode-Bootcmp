// 09-misc/01-waving-text/script.js - 9.1: waving text


(() => {

    newFunction();
    

        
})();

function newFunction() {
    let target = document.getElementById("target");
    let string = target.textContent;
    for (let j = 0; j < string.length; j++) {
        task(j);
    }
    function task(j) {
        setTimeout(function () {
            let newString = `${string.substring(0, j)}<span style="font-size: 1.3em">${string.substring(j, j + 1)}</span><span style="font-size: 1.7em">${string.substring(j + 1, j + 2)}</span><span style="font-size: 2.0m">${string.substring(j + 2, j + 3)}</span><span style="font-size: 2.3em">${string.substring(j + 3, j + 4)}</span><span style="font-size: 2.6em">${string.substring(j + 4, j + 5)}</span><span style="font-size: 2.3em">${string.substring(j + 5, j + 6)}</span><span style="font-size: 2.0em">${string.substring(j + 6, j + 7)}</span><span style="font-size: 1.7em">${string.substring(j + 7, j + 8)}</span><span style="font-size: 1.3 em">${string.substring(j + 8, j + 9)}</span>${string.substring(j + 10, string.length)}`;
            target.innerHTML = newString;
        },
            100 * j);
    }
}
//fini
