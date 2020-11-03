
// 02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz

(() => {

    // your code here
    let i = 1
    while (i <= 100) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log("fizzbuzz");
        } else if (i % 5 === 0) {
            console.log("buzz");
        } else if (i % 3 === 0) {
            console.log("fizz");
        } else {
            console.log(i);
        }
        i++;
    }

})();
