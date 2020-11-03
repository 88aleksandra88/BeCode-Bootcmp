// 09-misc/05-worst-ui-three/script.js - 9.5: worst user interface (3) : phone slot

newFunction();
function newFunction() {
    (() => {

        let t = document.getElementById("target");
        function zero(num) {
            return ("0" + num).slice(-2);
        }


        
        let { oneMax, oneMin, oneButton, newOne, one } = newFunction_1();

        function randOne() {
            return Math.floor(Math.random() * (oneMax - oneMin) + 1) + oneMin;
        }

        oneButton.addEventListener("click", () => {
            newOne = randOne();
            let newString = "+" + newOne + zero(newTwo) + zero(newThree) + zero(newFour);
            t.innerHTML = newString;
            one.setAttribute("value", newOne);
        });

        
        let { newTwo, twoMax, twoMin, twoButton, two } = newFunction_2();

        function randtwo() {
            return Math.floor(Math.random() * (twoMax - twoMin) + 1) + twoMin;
        }

        twoButton.addEventListener("click", () => {
            newTwo = randtwo();
            let newString = "+" + newOne + zero(newTwo) + zero(newThree) + zero(newFour);
            t.innerHTML = newString;
            two.setAttribute("value", zero(newTwo));
        });

        
        let { newThree, threeMax, threeMin, threeButton, three } = newFunction_3();

        function randthree() {
            return Math.floor(Math.random() * (threeMax - threeMin) + 1) + threeMin;
        }

        threeButton.addEventListener("click", () => {
            newThree = randthree();
            let newString = "+" + newOne + zero(newTwo) + zero(newThree) + zero(newFour);
            t.innerHTML = newString;
            three.setAttribute("value", zero(newThree));
        });

        
        let { newFour, fourMax, fourMin, fourButton, four } = newFunction_4();

        function randfour() {
            return Math.floor(Math.random() * (fourMax - fourMin) + 1) + fourMin;
        }

        fourButton.addEventListener("click", () => {
            newFour = randfour();
            let newString = "+" + newOne + zero(newTwo) + zero(newThree) + zero(newFour);
            t.innerHTML = newString;
            four.setAttribute("value", zero(newFour));
        });

    })();
}

function newFunction_4() {
    let four = document.getElementById("part-four");
    let fourMin = parseInt(four.getAttribute("data-min"), 10);
    let fourMax = parseInt(four.getAttribute("data-max"), 10);
    let newFour = fourMin;
    let fourButton = document.getElementById("fix-part-four");
    return { newFour, fourMax, fourMin, fourButton, four };
}

function newFunction_3() {
    let three = document.getElementById("part-three");
    let threeMin = parseInt(three.getAttribute("data-min"), 10);
    let threeMax = parseInt(three.getAttribute("data-max"), 10);
    let newThree = threeMin;
    let threeButton = document.getElementById("fix-part-three");
    return { newThree, threeMax, threeMin, threeButton, three };
}

function newFunction_2() {
    let two = document.getElementById("part-two");
    let twoMin = parseInt(two.getAttribute("data-min"), 10);
    let twoMax = parseInt(two.getAttribute("data-max"), 10);
    let newTwo = twoMin;
    let twoButton = document.getElementById("fix-part-two");
    return { newTwo, twoMax, twoMin, twoButton, two };
}

function newFunction_1() {
    let one = document.getElementById("part-one");
    let oneMin = parseInt(one.getAttribute("data-min"), 10);
    let oneMax = parseInt(one.getAttribute("data-max"), 10);
    let newOne = oneMin;
    let oneButton = document.getElementById("fix-part-one");
    return { oneMax, oneMin, oneButton, newOne, one };
}

