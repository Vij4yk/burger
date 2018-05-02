const orm = require('../config/orm');

// create code to call orm functions

const burger = {
  selectAll: function(callback) {
    orm.selectAll('burgers', function(res) {
      // this is the callback thats created in burgers_controller.js
      callback(res);
    });
  }
  // The variables cols and vals are arrays.
  // create: function(cols, vals, cb) {
  //   orm.create('cats', cols, vals, function(res) {
  //     cb(res);
  //   });
  // },
  // update: function(objColVals, condition, cb) {
  //   orm.update('cats', objColVals, condition, function(res) {
  //     cb(res);
  //   });
  // }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
