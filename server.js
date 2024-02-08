const { MongoClient } = require('mongodb')
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const dbUri = 'mongodb://127.0.0.1:27017';

app.get('/api/test', async (req, res) => {
    res.json({'status': 'ok'});
});

const port = 3500;
app.listen(port, () => console.log(`server running on port ${port}`));