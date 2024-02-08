const { MongoClient, ObjectId } = require('mongodb')
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const dbUri = 'mongodb://127.0.0.1:27017';
const dbName = 'pms';

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

async function putOne(database, coll, term) {
    const client = await MongoClient.connect(dbUri);
    const db = client.db(database);
    const collection = db.collection(coll);
    const result = await collection.insertOne(term);
    client.close();
    return result;
}

app.get('/api/test', async (req, res) => {
    res.json({'status': 'ok'});
});

app.get('/api/projects', async (req, res) => {
    try {
        const projects = await getAll(dbName, 'projects');
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/api/projects/:id", async (req, res) => {
    try {
        let id = req.params.id
        let term = { 'id': +id };
        const project = await findSome(dbName, 'projects', term);
        res.json(project);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post("/api/projects", async (req, res) => {
    try {
        let project = req.body;
        const result = await putOne(dbName, 'projects', project);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

app.post('/auth/login', async (req, res) => {
    try {
        let {username, password} = req.body;
        const user = await getOne(dbName, 'users', {'username': username});
        if (!user || password !== user.password) {
            res.status(404).json({'message': 'Invalid Credentials'}); 
            return;
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/tasks', async (req, res) => {
    try {
        const tasks = await getAll(dbName, 'tasks');
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/tasks/:id', async (req, res) => {
    try {
        let id = req.params.id
        let o_id = new ObjectId(id);
        const task = await getOne(dbName, 'tasks', {"_id": o_id});
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/api/tasks/project/:id", async (req, res) => {
    try {
        let id = req.params.id
        let term = { 'project': +id };
        const tasks = await findSome(dbName, 'tasks', term);
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post("/api/tasks", async (req, res) => {
    try {
        let task = req.body;
        console.log(task);
        const result = await putOne(dbName, 'tasks', task);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

const port = 3500;
app.listen(port, () => console.log(`server running on port ${port}`));