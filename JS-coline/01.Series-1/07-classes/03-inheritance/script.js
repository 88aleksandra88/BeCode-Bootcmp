// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here
    class Chien extends Animal 
    {
        constructor(name) {
            super();
            this.name = name;
        }
        static greeting = "Bark";
    }
    class Chat extends Animal
    {
        constructor(name) {
            super();
            this.name = name;
        }
        static greeting = "Miaouuu";
    }
    document.getElementById("run").addEventListener("click", function () 
    
    {
        let bark = new Chien("Nauto");
        let miaouuu = new Chat("Sasuke");
        console.log(bark.sayHello() , miaouuu.sayHello());
    })
    


})();
