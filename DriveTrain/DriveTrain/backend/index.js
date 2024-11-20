const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 3001 ;
var router = express.Router();

// Enable CORS for all routes
app.use(cors());

//my db config
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Crying4435',
  database: 'testdb'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
});

// Middleware to parse JSON bodies
app.use(express.json());

// //unknown how this will work or if it will even remain in this file
// const speedLimitApiUrl = 'https://roads.googleapis.com/v1/speedLimits?path=';
// const apiKey = '&key=YOUR_API_KEY';
// function getSpeedLimit(path) {
//     // unfinished
//     // example of var passed: path = '38.75807927603043,-9.03741754643809';
//     fetch(speedLimitApiUrl + path + apiKey).then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//         .then(data => {
//             const speedLimit = data.speedLimits.speedLimit
//             console.log(data);
//             console.log(speedLimit);
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
// }

app.get('/', (req, res) => {
  res.send('Hello World!');
  path = '38.75807927603043,-9.03741754643809';
  console.log('path is ' + path);
  // getSpeedLimit(path);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// GET route
app.get('/api/items', (req, res) => {
  // Logic to get items
  res.json({ message: 'GET all items' });
});

// POST route
app.post('/api/items', (req, res) => {
  // Logic to create a new item
  const newItem = req.body;
  res.json({ message: 'POST new item', item: newItem });
});

// PUT route
app.put('/api/items/:id', (req, res) => {
  // Logic to update an item
  const itemId = req.params.id;
  const updatedItem = req.body;
  res.json({ message: `PUT update item ${itemId}`, item: updatedItem });
});

// DELETE route
app.delete('/api/items/:id', (req, res) => {
  // Logic to delete an item
  const itemId = req.params.id;
  res.json({ message: `DELETE item ${itemId}` });
});


