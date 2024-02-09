const { MongoClient, ObjectId } = require('mongodb')
const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express")

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

async function updateOne(database, coll, id, updatedFields) {
    const client = await MongoClient.connect(dbUri);
    const db = client.db(database);
    const collection = db.collection(coll);
    const result = await collection.updateOne(
        { _id: id }, // Match document by ID
        { $set: updatedFields } // Update fields with new values
    );
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
            res.status(403).json({'message': 'Invalid Credentials'}); 
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

app.put("/api/tasks", async (req, res) => {
    try {
        let id = req.body.id;
        let update = req.body.update;
        console.log(req.body);
        let o_id = new ObjectId(id);
        const result = await updateOne(dbName, 'tasks', o_id, update);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const options = {
    definition: {
      openapi: "3.1.0",
      info: {
        title: "Project Management API",
        version: "0.1.0",
        description:
          "This is a CRUD API built with Node.js and Express accessing a MongoDB backend.",
        license: {
          name: "NO LICENSE - DEMO PROJECT FOR EDP",
          url: "https://www.google.com",
        },
        contact: {
          name: "Craig O'Loughlin / Zachary Mowry",
          url: "https://www.travelers.com",
          email: "coloughl@travelers.com",
        },
      },
      servers: [
        {
          url: "http://localhost:3500",
        },
      ],
    },
    apis: ["./swagger.js"],
  };
  
  const specs = swaggerJsdoc(options);
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
  );

const port = 3500;
app.listen(port, () => console.log(`server running on port ${port}`));