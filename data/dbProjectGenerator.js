const fs = require('fs');

const filename = 'projects.json';
const itemsNum = 5;

const maxTeamSize = 10;
const maxBudget = 100000;

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

// Function to generate a random name
function getRandomSize() {
    const sizes = ["Extra Small", "Small", "Medium", "Large", "Extra Large"];
    return sizes[Math.floor(Math.random() * sizes.length)];
}

function estimateCompletion() {
    return null;
}

function calculateCompletionTime(budget, team_size, workload) {
    return null;
}

// Generate array of itemsNum JSON objects
const jsonArray = [];
for (let i = 0; i < itemsNum; i++) {
    const jsonObject = {
        "id": Math.floor(Math.random() * 3) + 1,
        "title": getRandomTitle(),
        "teamSize": Math.floor(Math.random() * maxTeamSize) + 1,
        "budget": Math.floor(Math.random() * maxBudget), // Randomly true or false
        "workload": getRandomSize(),
        "completionTime": estimateCompletion()
    };
    //jsonObject['CompletionTime'] = calculateCompletionTime(jsonObject.budget, jsonObject.teamSize, jsonObject.workload);
    jsonArray.push(jsonObject);
}

fs.writeFileSync(filename, JSON.stringify(jsonArray));
console.log(`successfully created ${itemsNum} random projects in ${filename}`);