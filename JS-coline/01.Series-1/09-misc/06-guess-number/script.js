// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {

    newFunction(guess);

    function guess(x, number) {
        let y = 1;
        while (number != x) {
            if (number > x) {
                number = prompt("Too high, try again ");
                y += 1;
            } else if (number < x) {
                number = prompt("Too low, try again ");
                y += 1;
            }
        }
        alert(`Got it! You needed ${y} guesses.`);
    }

})();
function newFunction(guess) {
    window.onload = welcome;

    function welcome() {
        const x = Math.floor(Math.random() * 100 + 1);
        console.log(x);
        let number = prompt("Guess a number between 1 and 100 ");
        guess(x, number);
    }
}

