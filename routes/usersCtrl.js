const bcrypt = require('bcrypt');
const jwtUtils = require('../utils/jwt.utils.js');
const models = require('../models');

//routes
module.exports = {
    register: function(req, res) {
        // params
        const mail = req.body.mail;
        const username = req.body.username;
        const password = req.body.password;
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        if(mail === '' || username ==='' || password === '' || firstname === '' || lastname === '') {
            return res.status(400).json({'error': 'missing parameters'});
        }

        models.User.findOne({
            attributes: ['mail'],
            where: {mail: mail}
        })
        .then(function(userFound) {
            if (!userFound) {

                bcrypt.hash(password, 5, function(err, bcryptedPassword) {
                    const newUser = models.User.create({
                        mail: mail,
                        username: username,
                        password: bcryptedPassword,
                        firstname: firstname,
                        lastname: lastname,
                    })
                    .then(function(newUser){
                        return res.status(201).json({
                            'id': newUser.id
                        })
                    })
                    .catch(function(err) {
                        return res.status(500).json({ 'error': 'cannot add user', err});
                    });
                });
            } else {
                return res.status(409).json({ 'error': 'user alredy exist'});
            }

        })
        .catch(function(err){
            return res.status(500).json({ 'error': 'unable to verify user', err});
        });

    },
    login: function(req, res) {
        const mail = req.body.mail;
        const password = req.body.password;

        if (mail === null || password ===null){
            return res.status(400).json({ 'error': 'missing parameters'});
        }

        models.User.findOne({
            where: { mail: mail}
        })
        .then(function(userFound) {
          let {firstname, mail} = userFound;
            if (userFound) {
                bcrypt.compare(password, userFound.password, function(errBycrypt, resBycrypt){
                    if(resBycrypt) {
                        return res.status(200).json({
                            'firstname' : firstname,
                            'mail' : mail,
                            'id': userFound.id,
                            'token': jwtUtils.generateTokenForUser(userFound)
                        });
                    }
                })
            } else { 
                return res.status(403).json({'error': 'invalid password'});
            }  
        })
        .catch(function(err) {
            return res.status(500).json({'error': 'unable to verify user', err});
        });
    }
}
