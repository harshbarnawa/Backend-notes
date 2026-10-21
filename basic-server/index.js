require('dotenv').config()
const express = require('express')
const app = express()
const port = 6000

app.get('/', (req, res) => {
    res.send('Hello world!!')
})

app.get('/login', (req, res) => {
    res.send('<h1> Login Here! </h1>')
})


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})