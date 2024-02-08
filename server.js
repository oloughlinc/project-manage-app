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

app.get('/api/tasks', async (req, res) => {
    try {
        const tasks = await getAll('pms', 'projects');
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const port = 3500;
app.listen(port, () => console.log(`server running on port ${port}`));