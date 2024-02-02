const express = require('express');
const app = express();
const cors = require('cors');
const chefs = require('./data/chefs.json');
const recipies = require('./data/recipies.json');
app.use(cors());
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Chefs are cooking');
});
app.get('/chefs', (req, res) => {
  res.send(chefs);
});
app.get('/recipies', (req, res) => {
  res.send(recipies);
});
app.get('/recipies/:id', (req, res) => {
  const id = req.params.id;
  const selectedRecipe = recipies.find((recipe) => recipe.id);
  res.send(selectedRecipe);
});
app.listen(port, () => {
  console.log('API is running');
});
