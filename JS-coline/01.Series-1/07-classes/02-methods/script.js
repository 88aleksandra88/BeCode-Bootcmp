//07-classes/02-methods/script.js - 7.2: methods


(() => {
    // your code here
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        Hello(){
            return "Hello " + this.firstname  + this.lastname; }
    }
    // your code here
    document.getElementById("run").addEventListener("click", function () 
    {
        console.log(user.Hello());
    })
    let user = new Person("Hinata ", "Hyuga");

})();
