// dependancies
const express = require('express')
const methodOverride = require ('method-override')

// config
const app = express();
const port  = 3000;

// data
const pokemon = require ('./models/pokemon.js');
const newPoke = []
//middleware
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(methodOverride('_method'));
// routes
app.get('/pokemon', (req, res) => {
  res.render('index.ejs',
              {
                pokemon: pokemon,
                // newPoke: newPoke,
              }
            )
})

app.get('/pokemon/new', (req, res) => {
  res.render('new.ejs',
              {
                pokemon: pokemon,
              }
            )
})

app.delete('/pokemon/:id', (req, res) => {
  pokemon.splice(req.params.id, 1);
  res.redirect('/pokemon');
})

app.put('/pokemon/:id', (req, res) => {
  const newPoke = {};
  newPoke.stats = {};
  newPoke.name = req.body.name
  newPoke.type = req.body.type.split(",")
  newPoke.img = req.body.img
    if (!req.body.img) {
      newPoke.img = pokemon.img
    } else {
      req.body.img = req.body.img
    }
  newPoke.stats.hp = req.body.hp
  newPoke.stats.attack = req.body.attack
  newPoke.stats.defense = req.body.defense
  newPoke.stats.spattack = req.body.spattack
  newPoke.stats.spdefense = req.body.spdefense
  newPoke.stats.speed = req.body.speed
  console.log(newPoke.type);
  console.log(newPoke);
  pokemon[req.params.id] = newPoke;
  res.redirect('/pokemon')
})

app.get('/pokemon/:id', (req, res) => {
  res.render('show.ejs',
              {
                pokemon: pokemon[req.params.id],
                index: req.params.id
              });
})

app.get('/pokemon/:id/edit', (req, res) => {
  res.render('edit.ejs',
              {
                pokemon: pokemon[req.params.id],
                index: req.params.id
              }
            );
})

//POST
app.post('/pokemon', (req, res) => {
  const newPoke = {};
  newPoke.stats = {};
  newPoke.name = req.body.name
    if (!req.body.type) {
      req.body.type = "NO TYPE"
    } else {
      req.body.type = req.body.type.split(",")
    }
  newPoke.type = req.body.type
  newPoke.img = req.body.img
    if (!req.body.img) {
      newPoke.img = "https://cdn0.iconfinder.com/data/icons/large-glossy-icons/512/No.png"
    } else {
      req.body.img = req.body.img
    }
  newPoke.stats.hp = req.body.hp
  newPoke.stats.attack = req.body.attack
  newPoke.stats.defense = req.body.defense
  newPoke.stats.spattack = req.body.spattack
  newPoke.stats.spdefense = req.body.spdefense
  newPoke.stats.speed = req.body.speed
  console.log(newPoke);
  pokemon.push(newPoke)
  res.redirect('/pokemon')
})
// listener
app.listen(port, (req, res) => {
  console.log('listening.....');
})
