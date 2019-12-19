const { AuthenticationBaseStrategy } = require('@feathersjs/authentication');
const axios = require('axios');

class SsoStrategy extends AuthenticationBaseStrategy {

  constructor(host) {
    console.log('host', host)
    super(host)
    this.host = host
  }

  async authenticate(authentication, params) {
    // console.log(this.host, authentication)
    let result = await axios.post(this.host + '/authentication', {
      accessToken: authentication.jwt,
      strategy: 'jwt'
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    delete result.data.authentication
    return result.data
  }
}

module.exports = SsoStrategy
