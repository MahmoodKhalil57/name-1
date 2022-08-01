const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');


var serviceAccount = require("./auth.json");

const firebaseApp = initializeApp(serviceAccount);


const db = getFirestore(firebaseApp);

module.exports = { db }

