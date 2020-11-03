
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {

    // your code here
    document.getElementById("run").addEventListener("click",() =>{

        let year = document.getElementById("dob-year").value;
        let date = new Date ();
        let age = date.getFullYear() - year; 

    alert (age);
    })
})();
