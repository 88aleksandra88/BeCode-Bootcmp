// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {

    // your code here
    newFunction();     

})();



function newFunction() {
  document.getElementById("run").addEventListener("click", () => {
    let numbers = [];
    for (let i = 1; i <= 10; i++) {
      let number = Math.floor(Math.random() * 100) + 1;
      document.getElementById("n-" + i).textContent = number;
      numbers.push(number);
    }
    for (let i = 0; i < numbers.length; i++) {
      somme = somme + numbers[i];
    }

    document.getElementById("min").textContent = Math.min(...numbers);
    document.getElementById("max").textContent = Math.max(...numbers);
    document.getElementById("sum").textContent = somme;
    document.getElementById("average").textContent = somme / numbers.length;

  });
}