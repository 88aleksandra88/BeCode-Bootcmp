// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French


(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    // your code here
    let { arrAdjectives, adjective } = newFunction(adjectives);
    
    document.getElementById("run").addEventListener("click", () => {
        let birdIndex = Math.floor(Math.random() * birds.length);
        let adjectivesIndex = Math.floor(Math.random() * arrAdjectives.length);
        if (birds[birdIndex].fem)
            adjective = `${arrAdjectives[adjectivesIndex]}e`;
        else
            adjective = `${arrAdjectives[adjectivesIndex]}`;
    
        console.log(`${birds[birdIndex].name} ${adjective}`);
        document.getElementById("target").textContent = (`${birds[birdIndex].name} ${adjective}`)
    })


    

})();
function newFunction(adjectives) {
    let arrAdjectives = Array.from(adjectives);
    let adjective;
    return { arrAdjectives, adjective };
}

