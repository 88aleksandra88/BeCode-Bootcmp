// 06-dom/10-match-password-two/script.js - 6.10: password verification (2)


let { password, conf } = newFunction();

document.getElementById("run").addEventListener("click", () => {
    if(password.value == conf.value){
        alert("Yes")
    }
    else{
        password.setAttribute("class", "error");
        conf.setAttribute("class", "error");

        alert("Don' match! Try again please ")
    }


    function newFunction() {
        let password = document.getElementById("pass-one");
        let conf = document.getElementById("pass-two");
        return { password, conf };
    }

});
