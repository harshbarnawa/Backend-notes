import express from 'express';

const app = express();

app.get('/api/data', (req, res) => {
    const data = [
  { "id": 1, "name": "Apple", "content": "Keeps doctor away" },
  { "id": 2, "name": "Banana", "content": "Gain for hustle" },
  { "id": 3, "name": "Cherry", "content": "Blossoms" }
]

    res.send(data);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`)
})