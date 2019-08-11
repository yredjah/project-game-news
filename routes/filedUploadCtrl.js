/* eslint-disable */
const path = require('path');
const fileUpload = require('express-fileupload');
const jwtUtils = require('../utils/jwt.utils.js');
const del = require('del');
const models = require('../models');


module.exports = {
  upload: function(req, res, next){

    const headerAuth  = req.headers['authorization']; //get authorization/token from headers
    const userId      = jwtUtils.getUserId(headerAuth); // get userId from token
    
    const imageFile = req.files.file;
    const uploadPath = path.join(__dirname, '..', 'public/avatarUploads');

    models.User.findOne({
      where: {id: userId}
    }) //on cherche l'utilisateur
    .then(userFound => {
      if (userFound.avatar != null) { //on regarde si il a deja un avatar
        del.sync([uploadPath + '/' + userFound.avatar]); //si oui on le supprime
      }

      const arrayName = req.files.file.name.split('.');
      const length = arrayName.length;

      const changeImgName = userId + '.' + arrayName[length-1]; 
    
      imageFile.mv(`${uploadPath}/${changeImgName}`, function(err) {
      
        if (err) {
        return res.status(500).json({'error': 'unable to upload image',err});
        }
        res.json({file: `public/avatarUploads/${changeImgName}`});
        
      });
      userFound.update({avatar: changeImgName}) // on mes a jour l'avatar dans la base
      .then(result => (
        res.json({file: `public/avatarUploads/${changeImgName}`})
      ))
      .catch(err => (
        res.status(500).json({'error': 'unable to update avatar', err})
      ))
    })
    .catch(err => (
      res.status(500).json({'error': 'unable to find user', err})
    ));
  },
};
