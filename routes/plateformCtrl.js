/* eslint-disable */
const models = require('../models');;

module.exports = {
  getAll: function(req, res){
    models.Plateform.findAll()
    .then(function(response) {
      return res.status(200).json(response)
    })
    .catch(function(err) {
      return res.status(500).json(response)
    })
  },
};

