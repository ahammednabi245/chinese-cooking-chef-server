const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

const chef = require('./data/chefHistory.json');

app.get('/', (req, res) => {
  res.send('Chinese master cafe!')
})

app.get('/chef', (req, res) => {
    res.send(chef);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})