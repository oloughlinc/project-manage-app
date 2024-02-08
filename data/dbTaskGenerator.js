const fs = require('fs');

const filename = 'tasks.json';
const itemsNum = 20;

// Function to generate a random task titles
function getRandomTitle() {
    const workAssignments = [
        "Teach the software to interpret the dreams of household appliances",
        "Program the algorithm to compose love letters between inanimate objects",
        "Develop a feature that predicts the future based on the movements of rubber ducks",
        "Integrate a database of ancient recipes for turning rocks into food",
        "Create a functionality that translates computer code into interpretive dance routines",
        "Implement a real-time translation feature for conversations between sentient trees",
        "Add a functionality that translates human emotions into Morse code",
        "Ensure the software can handle inputs from parallel universes, including alternate timelines and mirror dimensions",
        "Design a user-friendly interface with options for navigating the space-time continuum",
        "Incorporate a feature that generates personalized horoscopes for pets",
        "Develop an AI assistant that provides relationship advice to fictional characters",
        "Program the software to generate personalized bedtime stories for extraterrestrial beings",
        "Integrate machine learning algorithms to decipher the language of dolphins",
        "Create a feature that predicts the weather on Mars using tea leaves",
        "Implement a sentiment analysis tool to decode the emotional state of houseplants",
        "Add a functionality that generates random trivia about imaginary creatures",
        "Ensure the software can handle inputs from telepathic entities and cosmic beings",
        "Design a feature that allows users to communicate with ghosts through text messages",
        "Develop an algorithm that predicts the next meme sensation based on celestial alignments",
        "Program the software to generate personalized affirmations for sentient robots",
        "Integrate natural language processing capabilities for understanding the thoughts of fictional characters",
        "Create a functionality that generates customized theme songs for everyday objects",
        "Implement a feature that translates the language of birds into interpretive dance",
        "Add a functionality that generates random compliments for mythical creatures",
        "Ensure the software can handle inputs from parallel dimensions without causing temporal disruptions",
        "Design a user-friendly dashboard for navigating the multiverse",
        "Develop an AI curator that selects and organizes the best cat videos from across the galaxy",
        "Program the software to generate content based on the dreams of unicorns",
        "Integrate a recommendation system to suggest personalized ice cream flavors for extraterrestrial beings",
        "Create a feature that generates customized greetings for time travelers",
        "Implement a tool for generating motivational speeches for sentient clouds",
        "Add a functionality that generates inspirational quotes for quantum particles",
        "Ensure the software can generate content for dreamscape adventures and astral journeys",
        "Design a feature that predicts the outcome of intergalactic cooking competitions",
        "Develop an algorithm for generating personalized prophecies for cosmic entities",
        "Program the software to generate content based on the secret thoughts of household appliances",
        "Integrate a feedback mechanism for users to provide input on interdimensional travel plans",
        "Create a functionality that generates personalized fortune cookies for sentient beings",
        "Ensure the software can generate content that resonates with alternate versions of oneself"
      ];
    return workAssignments[Math.floor(Math.random() * workAssignments.length)];
}

// Function to generate a random movie quote
function getRandomQuote() {
    const quotes = [
        "May the Force be with you.",
        "I'll be back.",
        "There's no place like home.",
        "Houston, we have a problem.",
        "I see dead people.",
        "Here's looking at you, kid.",
        "You can't handle the truth!",
        "Show me the money!",
        "To infinity and beyond!",
        "I'll have what she's having.",
        "Bond. James Bond.",
        "Just keep swimming.",
        "Life is like a box of chocolates.",
        "You're gonna need a bigger boat.",
        "E.T. phone home.",
        "I am your father.",
        "You talkin' to me?",
        "Hasta la vista, baby.",
        "I am serious. And don't call me Shirley.",
        "I'll make him an offer he can't refuse."
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
}

// Function to generate a random name
function getRandomName() {
    const names = ["Alice Smith", "Bob Chancet", "Charlie Thomas", "Dave Emmit", "Emma Emmerson", "Frankie Z", "Grace O'Halley", "Henry Flenderson", "Ivy Jackson", "Jack Johnson"];
    return names[Math.floor(Math.random() * names.length)];
}

// Function to generate a random Date between now and 6 months from now
function getRandomDueDate() {
    const now = new Date();
    const sixMonthsLater = new Date(now.getTime() + 6 * 30 * 24 * 60 * 60 * 1000); // Adding milliseconds for 6 months
    return new Date(now.getTime() + Math.random() * (sixMonthsLater.getTime() - now.getTime()));
}

// Function to generate a Fibonacci sequence number up to a limit
function fibonacci() {
    const sequence = [1, 2, 3, 5, 8, 13];
    return sequence[Math.floor(Math.random() * sequence.length)];
}


// Generate array of itemsNum JSON objects
const jsonArray = [];
for (let i = 0; i < itemsNum; i++) {
    const jsonObject = {
        "title": getRandomTitle(),
        "comments": "",
        "completed": Math.random() < 0.5, // Randomly true or false
        "personAssigned": getRandomName(),
        "dueDate": getRandomDueDate(),
        "size": fibonacci(), // Fibonacci number with limit 13
        "project": Math.floor(Math.random() * 3) + 1
    };
    jsonArray.push(jsonObject);
}

fs.writeFileSync(filename, JSON.stringify(jsonArray));
console.log(`successfully created ${itemsNum} random nonsense tasks in ${filename}`);