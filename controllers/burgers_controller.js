const express = require('express');
const burger = require('../models/burger');
const router = express.Router();

// gets and renders all burgers
router.get('/', function(req, res) {
  // this callback gets passed into orm.selectAll, represented by param named callback
  burger.selectAll(function(data) {
    const hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

// posts a new burger to the db
router.post('/api/burgers', function(req, res) {
  burger.create('burger_name', req.body.name, function(result) {
    console.log('result: ', result);
    res.json({ id: result.insertId });
  });
});

// export the routes for server.js
module.exports = router;
