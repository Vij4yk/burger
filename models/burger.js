const orm = require('../config/orm');

const burger = {
  selectAll: function(callback) {
    orm.selectAll('burgers', function(res) {
      // this is the callback thats created in burgers_controller.js
      callback(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(column, value, callback) {
    orm.create('burgers', column, value, function(res) {
      callback(res);
    });
  }
  // update: function(objColVals, condition, cb) {
  //   orm.update('cats', objColVals, condition, function(res) {
  //     cb(res);
  //   });
  // }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
