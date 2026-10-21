import express from 'express';

const app = express();

app.get('/data', (req, res) => {
    const data = [
  { "id": 1, "name": "Apple", "active": true },
  { "id": 2, "name": "Banana", "active": false },
  { "id": 3, "name": "Cherry", "active": true }
]

    res.send(data);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`)
})