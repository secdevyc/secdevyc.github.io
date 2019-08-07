const express = require('express');
const router = express.Router();
const Product = require('../models/products.js');
const seedStore = require('../models/seedStore.js');

router.get('/seed', (req, res) => {
  Product.create(seedStore, (err, product) => {
    res.redirect('/store')
  });
});

//////// route to NEW /////////
router.get('/new', (req, res) => {
  res.render('new.ejs')
})
///////  index route     ////////////
router.get('/', (req, res) => {
  Product.find({}, (err, products) => {
    res.render('index.ejs', {products:products})
  });
})
//////////// CREATE //////////////
router.post('/', (req, res) => {
  Product.create(req.body, (err, newProduct) => {
    res.redirect('/store')
  })
})
////////// DELETE ////////////////
router.delete('/:id', (req, res) => {
  Product.findOneAndDelete(req.params.id, (err, product) => { console.log('SUCCESSFULLY REMOVED PRODUCT: ' + product);
  res.redirect('/store')
  })
})
//////// EDIT ROUTE //////////////
router.get('/:id/edit', (req, res) => {
  Product.findById(req.params.id, (err, foundProduct) => {
    res.render('edit.ejs', {product: foundProduct})
  })
})

///////   show route //////////
router.get('/:id', (req, res) => {
  Product.findById(req.params.id, (err, product) => {
    res.render('show.ejs',
    {product:product,
      index: req.params.id,
      qty: product.qty
    })
  })
})

//////////////// PUT ROUTE ////////////////
router.put('/:id', (req, res) => {
  Product.findByIdAndUpdate(req.params.id, req.body, (err, updatedModel) => {
    res.redirect('/store');
  })
})
//////////// UPDATE qty ROUTE/////////////////
router.put('/:id/buy', (req, res) => {
  Product.findByIdAndUpdate(req.params.id, {$inc: {qty: -1}}, (err, data) => {
    res.redirect('/store/' + req.params.id)
  })
})
////////// PRODUCT COUNTER ////////////////////
Product.countDocuments({}, (err, data) => {
  if (err) {console.log('ERROR');}
  else { console.log('there are ' + data + ' products in this store');}
});

module.exports = router;
