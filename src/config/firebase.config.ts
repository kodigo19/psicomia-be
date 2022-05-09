import * as admin from "firebase-admin";

var serviceAccount = require("./serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://psm-dev-60779-default-rtdb.firebaseio.com'
});

export default admin