/* eslint-disable */
const path = require('path');
const fileUpload = require('express-fileupload');


module.exports = {
  upload: function(req, res, next){
    // console.log('1. file', req.file);
    // console.log('2. files', req.files);

    // const imageFile = req.files.file;

    let imageFile = req.files.file;
    // console.log({ imageFile });
    // console.log('req.body.file', req.body.file);

    const uploadPath = path.join(__dirname, '..', 'public/avatarUploads');
    // console.log({ uploadPath });

    // imageFile.mv(`${__dirname}/public/${req.body.file}.jpg`, function (err) {
    imageFile.mv(`${uploadPath}/${req.files.file.name}`, function(err) {
      // console.log({ err });

      if (err) {
       return res.status(500).send(err);
      }

      res.json({file: `public/avatarUploads/${req.files.file.name}`});
    });
  },
};
