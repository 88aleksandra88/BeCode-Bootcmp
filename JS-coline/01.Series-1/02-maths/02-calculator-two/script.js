
// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        let n1 = parseInt(document.getElementById("op-one").value, 10);
        let n2 = parseInt(document.getElementById("op-two").value, 10);

        switch (operation) {
            case "addition":
                alert(n1 + n2);
                break;
            case "substraction":
                alert(n1 - n2);
                break;
            case "multiplication":
                alert(n1 * n2);
                break;
            case "division":
                alert(n1 / n2);
                break;
        }

    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();

//(switch) évalue une expression et, selon le résultat obtenu et le cas associé, exécute les instructions correspondantes.
