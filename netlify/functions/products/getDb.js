const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');


var serviceAccount = require("./auth.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });
const firebaseApp = initializeApp(serviceAccount);


const db = getFirestore(firebaseApp);

module.exports = { db }

