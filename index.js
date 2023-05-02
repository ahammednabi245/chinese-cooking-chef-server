const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;

const chef = require('./data/chefHistory.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Chinese master cafe!')
})

app.get('/chef', (req, res) => {
    res.send(chef);
})

app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const chefWithId = chef.find(chef => chef.id === id);
    if (chefWithId) {
      res.send(chefWithId);
    } else {
      res.status(404).send('Chef not found');
    }
  });
  


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})