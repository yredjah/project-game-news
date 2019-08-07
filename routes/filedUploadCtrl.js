/* eslint-disable */
const fileUpload = require('express-fileupload');


module.exports = {
  upload: function(req, res, next){
    console.log(req);
    let imageFile = req.files.file;
    // .files

    imageFile.mv(`${__dirname}/public/${req.body.filename}.jpg`, function(err) {
      if (err) {
       return res.status(500).send(err);
      }

      res.json({file: `public/${req.body.filename}.jpg`});
    });
  },
};
