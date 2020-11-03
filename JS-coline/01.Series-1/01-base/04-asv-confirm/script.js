
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');

    // YOUR CODE HERE
    do{
        let age = prompt("Can you give me your age?");
        let gender = prompt("What's your gender?");
        let town = prompt("Please enter your town's name");

        var conf= confirm(`Your age is:  ${age}. Your gender is:  ${gender} You live in:  ${town}.`);
        //template string
    }

    while(conf==false );

    

})();


