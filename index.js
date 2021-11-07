const express = require('express');
const cors = require('cors');
require('dotenv').config()
const { MongoClient } = require('mongodb');

const port = process.env.PORT || 5000;

const app = express();

// Middleware:
app.use(cors());
app.use(express.json());

// Connect With MongoDB Atlas:
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.7gqmj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Run Function:
async function run() {
        try {
                await client.connect();
                console.log('Database connected successfully')

                // Create Database and Collection:
                const database = client.db('doctors_portal');
                const appointmentCollections = database.collection('appointment');

                // Insert Single Appointment:
                app.post('/appointment', async (req, res) => {

                })
        }
        finally {
                // await client.close();
        }
}
run().catch(console.dir)

// Get Method:
app.get('/', (req, res) => {
        res.send('Hello Doctors Portal')
})

app.listen(port, () => {
        console.log("Listening from", port)
})