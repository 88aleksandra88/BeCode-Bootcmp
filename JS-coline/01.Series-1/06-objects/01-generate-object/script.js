// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", function () 
    {
        const person = {
            printIntroduction: function()
            {
                console.log(`My name is ${this.firstName} ${this.lastName}. I\'m ${this.age} years old. I live in ${this.city} but i\'m from ${this.country}`);
            }
        };
        const me = Object.create(person);
        me.firstName = 'Aleks';
        me.lastName = 'Slowik';
        me.age = 32;
        me.city = 'Courcelles';
        me.country = 'Poland';
        me.printIntroduction();
    })

})();
