const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const serviceAccount = require('./woodcraft-auth-41aa7-firebase-adminsdk-5z0jl-9e2713d9d9.json')
const path = require('path');
const app = express();

app.use(bodyParser.json());

app.use(compression());
app.use(express.static(path.join(__dirname, 'build')));
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Accept');
  next();
});

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: 'https://woodcraft-auth-41aa7.firebaseio.com/'
    })
  }

  const setFirebaseAuthJWTClaims = (user) => {
    const customClaims = {
      'https://hasura.io/jwt/claims': {
        'x-hasura-default-role': 'user',
        'x-hasura-allowed-roles': ['user', 'anonymous'],
        'x-hasura-user-id': user.uid
      }
    }
    return admin
    .auth()
    .setCustomUserClaims(user.uid, customClaims)
    .then(() => {
      // Update real-time database to notify client to force refresh.
      const metadataRef = admin.database().ref('metadata/' + user.uid)
      // Set the refresh time to the current UTC timestamp.
      // This will be captured on the client to force a token refresh.
      return metadataRef.set({ refreshTime: new Date().getTime() })
    })
    .catch((error) => {
      console.log(error)
    })
}

app.post('/',  function(req, res) {
   
setFirebaseAuthJWTClaims(req.body.user)
res.send(200)
    
  })

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});