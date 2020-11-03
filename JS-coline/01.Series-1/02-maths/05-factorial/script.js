
// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here

        let num = document.getElementById("number").value;

        function factorial(num) {
            if (num === 1) {
                return num;
            } else {
                return num * factorial(num - 1);
            }
        }

        alert(factorial(num));

    });
    //pas fini
})();
