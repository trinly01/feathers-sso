# Welcome to wings4!

<p align="center">
  <img width="300" src="https://miro.medium.com/max/3728/1*7zccGWE4o5LmxegijjK_xQ.png"/>
  <br />
  <img width="300" src="https://feathersjs.com/img/feathers-logo-wide.png" />
</p>

A **FeathersJS Single Sign-On** for any frontend framework

> **Join and support our Community** <br />
> Web and Mobile Developers PH <br />
> [ [Facebook Page](https://fb.com/webmobile.ph) | [Group](https://fb.com/groups/webmobile.ph/) ]

## Single Sign-On (Backend)
```bash
npm install feathers-sso
```
or
```bash
yarn add feathers-sso
```

```javascript
// authentication.js
const { LocalStrategy } = require('@feathersjs/authentication-local');
const { expressOauth } = require('@feathersjs/authentication-oauth');
const Sso = require('feathers-sso')

module.exports = app => {
  const authentication = new AuthenticationService(app);

  authentication.register('jwt', new JWTStrategy());
  authentication.register('local', new LocalStrategy());
  authentication.register('sso', new Sso('http://localhost:3030'));

  app.use('/authentication', authentication);
  app.configure(expressOauth());
};
```

## Single Sign-On (Frontend)
enables SSO to specific iframe parent host
```javascript
// SSO login UI
app.enableSSO([
  'http://localhost:8080', 
  'http://localhost:3030'
])
```
authenticate using SSO specifying the URL of SSO login UI
```javascript
// Connecting Client App to SSO login UI
app.authenticateSSO('http://localhost:8080/#/auth')
```

# *Join and support our Community* <br /> **Web and Mobile Developers PH** <br/> [ [Facebook Page](https://fb.com/webmobile.ph) | [Group](https://fb.com/groups/webmobile.ph/) ]

