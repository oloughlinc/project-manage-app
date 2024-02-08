const { MongoClient } = require('mongodb')
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const dbUri = 'mongodb://127.0.0.1:27017';

async function getAll(database, coll) {
    const client = await MongoClient.connect(dbUri);
    const db = client.db(database);
    const collection = db.collection(coll);
    const result = await collection.find().toArray();
    client.close();
    return result;
}

async function findSome(database, coll, term) {
    const client = await MongoClient.connect(dbUri);
    const db = client.db(database);
    const collection = db.collection(coll);
    const result = await collection.find(term).toArray();
    client.close();
    return result;
}

async function getOne(database, coll, term) {
    const client = await MongoClient.connect(dbUri);
    const db = client.db(database);
    const collection = db.collection(coll);
    const result = await collection.findOne(term);
    client.close();
    return result;
}

app.get('/api/test', async (req, res) => {
    res.json({'status': 'ok'});
});

app.get('/api/projects', async (req, res) => {
    try {
        const projects = await getAll('pms', 'projects');
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/api/projects/:id", async (req, res) => {
    try {
        let id = req.params.id
        let term = { 'id': +id };
        const project = await findSome('pms', 'projects', term);
        res.json(project);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/auth/login', async (req, res) => {
    try {
        let {username, password} = req.body;
        const user = await getOne('pms', 'users', {'username': username});
        if (!user || password !== user.password) {
            res.status(404).json({'message': 'Invalid Credentials'}); 
            return;
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/*
app.get('managerstuff', token = manager ? else deny, () => {

})
*/

app.get('/api/tasks', async (req, res) => {
    try {
        const tasks = await getAll('pms', 'projects');
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/api/tasks/project/:id", async (req, res) => {
    try {
        let id = req.params.id
        let term = { 'project': +id };
        const tasks = await findSome('pms', 'tasks', term);
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const port = 3500;
app.listen(port, () => console.log(`server running on port ${port}`));