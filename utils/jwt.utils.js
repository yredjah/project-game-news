/* eslint-disable*/
const jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET = 'dc1eza6erf5eza6d12ez3ac85e4az6cezaed1az86e1fd6z';

module.exports = {
  generateTokenForUser: function(userData) {
    return jwt.sign({
      userId: userData.id,
      roleId: userData.roleId,
    },
    JWT_SIGN_SECRET,
    // {
    //   expiresIn: '1h'
    // }
    )
  },
  parseAuthorization: function(authorization) {
    return (authorization != null) ? authorization.replace('Bearer ', '') : null;
  },
  getUserId: function(authorization) {
    var userId = -1;
    var token = module.exports.parseAuthorization(authorization);
    if(token != null) {
      try {
        var jwtToken = jwt.verify(token, JWT_SIGN_SECRET);
        if(jwtToken != null)
          userId = jwtToken.userId;
      } catch(err) { }
    }
    return userId;
  }
}
