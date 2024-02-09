const fs = require('fs');

const filename = 'data/trainingData.json';
const itemsNum = 10000;

const maxTeamSize = 10;
const maxBudget = 50000;

// Function to generate a random task titles
function getRandomTitle() {
    const workAssignments = [
        "Develop a software that translates bird songs into Shakespearean sonnets",
        "Design a robot that can juggle flaming torches",
        "Write a program that generates infinite donuts",
        "Build a device that turns water into soda",
        "Create an app that helps people find their lost socks",
        "Develop a machine learning algorithm to predict the outcome of rock-paper-scissors tournaments",
        "Design a flying car powered by fairy dust",
        "Write a program that translates human laughter into binary code",
        "Build a robot chef that cooks meals based on mood",
        "Create a virtual reality game where players ride unicorns through candy-filled landscapes",
        "Develop an app that counts the number of stars in the sky",
        "Design a time-traveling banana peel",
        "Write a program that teaches parrots to speak in puns",
        "Build a device that lets you communicate with houseplants telepathically",
        "Create a website that matches people with their dream sandwich",
        "Develop an AI assistant that helps penguins organize their igloos",
        "Design a self-cleaning litter box for robotic cats",
        "Write a program that predicts the weather using magic eight balls",
        "Build a robot that helps astronauts play zero-gravity soccer",
        "Create an app that translates baby cries into song lyrics",
        "Develop a time machine using a toaster",
        "Create a software that translates cat meows into human language",
        "Design a spaceship with a built-in coffee maker",
        "Write a program that generates infinite pizzas",
        "Build a robot that can dance the cha-cha-cha",
        "Develop an app that predicts the future of the stock market using tarot cards",
        "Design a self-driving skateboard",
        "Create a virtual reality game where players fight with rubber chickens",
        "Write a program that teaches hamsters to play chess",
        "Build a teleportation device made from recycled soda cans",
        "Develop a machine learning algorithm to predict the color of the next unicorn's horn",
        "Design a time-traveling hat",
        "Create a website that matches people with their spirit vegetable",
        "Write a program that turns pizza into energy",
        "Build a robot that tells jokes to houseplants",
        "Develop an app that translates dog barks into Morse code",
        "Design a hoverboard powered by solar energy",
        "Create a virtual pet that evolves into different mythical creatures",
        "Write a program that generates random conspiracy theories",
        "Build a device that converts rainbows into music"
    ];
    return workAssignments[Math.floor(Math.random() * workAssignments.length)];
}

// // Define an object to map each size to a unique number
// const sizeMap = {
//     "XS": 1,
//     "S": 2,
//     "M": 3,
//     "L": 4,
//     "XL": 5
// };


// Function to generate a random story size
function getRandomSize() {
    const sizes = [1, 2, 3, 5, 8, 13, 21]
    return sizes[Math.floor(Math.random() * sizes.length)];
}


function estimateCompletion(budget, teamSize, workload) {

    //Time adjustments, baseline = 1
    let timeAdjustment = 1
    let budgetAdjustment = 1
    budget = budget/1000
    
    //Calculate time adjustment based on team size and workload
    timeAdjustment = Math.max(1, Math.ceil(workload / teamSize))
    console.log(timeAdjustment)
    
    // Normalize budget
    budget /= 10000;

    // Calculate ETC (Estimated Time to Completion)
    let ETC = workload / (budget + teamSize ) ;
    ETC *= 10

    // Add randomness to ETC between 0.9 and 1.1
    let ETIC = ETC * (0.9 + Math.random() * 0.2); // random number between 0.9 and 1.1

    return Math.round(ETIC);

}


// Generate array of itemsNum JSON objects
const jsonArray = [];
for (let i = 0; i < itemsNum; i++) {
    const jsonObject = {
        "id": Math.floor(Math.random() * 89) + 1,
        "title": getRandomTitle(),
        "teamSize": Math.floor(Math.random() * maxTeamSize) + 1,
        "budget": Math.floor((Math.random() * maxBudget) + 10000), // Randomly true or false
        "workload": getRandomSize(),
    };
    

    jsonObject['completionTime'] = estimateCompletion(jsonObject.budget, jsonObject.teamSize, jsonObject.workload);
    jsonArray.push(jsonObject);
    console.log("ID: ", jsonObject.id, "Team Size:", jsonObject.teamSize, "Budget:", jsonObject.budget, "Workload:", jsonObject.workload, "Completion Time:", jsonObject.completionTime)
}


// Endpoint to estimate completion time
app.post('/estimateCompletion', (req, res) => {
    const { budget, teamSize, workload } = req.body;
    const completionTime = estimateCompletion(budget, teamSize, workload);
    res.json({ completionTime });
});

app.listen(3000, () => {
    console.log(`Server running on port ${3000}`);
});



fs.writeFileSync(filename, JSON.stringify(jsonArray));
console.log(`successfully created ${itemsNum} random projects in ${filename}`);
//console.log(jsonArray)