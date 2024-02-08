let fs = require('fs');
let filename = 'users.json'

const names = ["Alice Smith", "Bob Chancet", "Charlie Thomas", "Dave Emmit", "Emma Emmerson", "Frankie Z", "Grace O'Halley", "Henry Flenderson", "Ivy Jackson", "Jack Johnson"];
const usernames = ["Alice@wanderers.com", "Bob@wanderers.com", "Charlie@wanderers.com", "Dave@wanderers.com", "Emma@wanderers.com", "Frankie@wanderers.com", "Grace@wanderers.com", "Henry@wanderers.com", "Ivy@wanderers.com", "Jack@wanderers.com"];
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