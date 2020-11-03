// 06-dom/08-generate-table-two/script.js - 6.8: creating a table (2)

(() => {

    // your code here
    newFunction();
    //truc bizarre a regler plus tard


})();
function newFunction() {
    const x = document.getElementById("target");
    const y = document.createElement("table");
    x.appendChild(y);

    for (let i = 0; i < 10; i++) {
        y.insertRow(0).insertCell(0);
        let newRow = y.insertRow(i);
        for (let j = 0; j < 10; j++) {
            let newCell = newRow.insertCell(j);
            newCell.innerHTML = (i + 1) * (j + 1);
        }
    }
}

