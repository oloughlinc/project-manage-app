let fs = require('fs');
let filename = 'users.json'

const names = ["Alice Smith", "Bob Chancet", "Charlie Thomas", "Dave Emmit", "Emma Emmerson", "Frankie Z", "Grace O'Halley", "Henry Flenderson", "Ivy Jackson", "Jack Johnson"];
const usernames = ["Alice@aa.com", "Bob@aa.com", "Charlie@aa.com", "Dave@aa.com", "Emma@aa.com", "Frankie@aa.com", "Grace@aa.com", "Henry@aa.com", "Ivy@aa.com", "Jack@aa.com"];
const password = 'deadduck'

let users = []
for (let i = 0; i < 10; i++) {
    users.push({
        "name": names[i],
        "username": usernames[i],
        "password": password,
        "role": 'worker'
    })
}
users[2].role = "manager";
users[9].role = "manager";

fs.writeFileSync(filename, JSON.stringify(users));
console.log(`successfully created users in ${filename}`);