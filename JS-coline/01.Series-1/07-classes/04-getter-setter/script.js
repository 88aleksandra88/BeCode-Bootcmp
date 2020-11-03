// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    // your code here
    class Person {
        constructor(firstName, lastName) {
            this.firstname = firstName;
            this.lastname = lastName;
        }
            get fullName() {
                return "Vous vous appelés : " + this.firstname + " " + this.lastname;
            }
            set fullName(value) {
                [this.firstname, this.lastname] = value.split(" ");
            }
        }
        document.getElementById("run").addEventListener("click", function () {
            const personOne = new Person("Sheldon", "Cooper");
        console.log(personOne.name);

        personOne.name = "Amy Farah Fowler";
        console.log(personOne.firstname + " " + personOne.lastname);
            
    })
    


})();

//a terminer
