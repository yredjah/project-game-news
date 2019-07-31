const jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET = 'dc1eza6erf5eza6d12ez3ac85e4az6cezaed1az86e1fd6z';

module.exports = {
    generateTokenForUser: function(userData) {
        return jwt.sign({
            id: userData.id,
            roleId: userData.roleId
        },
        JWT_SIGN_SECRET,
        {
            expiresIn: '1h'
        })
    }
}