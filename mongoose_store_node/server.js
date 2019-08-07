//////////////////////////////////////
///     DEPENDENCIES          ////////
//////////////////////////////////////
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override')
//////////////////////////////////////
///     CONFIGURATION         ////////
//////////////////////////////////////
const app = express();
const port = 3000;
//////////////////////////////////////
///     MIDDLEWARE            ////////
//////////////////////////////////////
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'));

///////////////////////////////
////////  CONTROLLERS   ///////
///////////////////////////////
const productsController = require('./controllers/products.js');
app.use('/store', productsController);
//////////////////////////////////////
///           ROUTES          ////////
//////////////////////////////////////

//////////////////////////////////////
///     LISTENERS             ////////
//////////////////////////////////////
app.listen(port, () => {
  console.log('EXPRESS IS LISTENING...........');
});

mongoose.connect('mongodb://localhost:27017/store', {useNewUrlParser:true});

mongoose.connection.once('open', () => {
  console.log('CONNECTED TO MONGO..............');
})
