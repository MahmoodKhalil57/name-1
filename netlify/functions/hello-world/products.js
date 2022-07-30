const { initializeApp } = require('firebase/app');
const { getFirestore , collection , getDocs  } = require('firebase/firestore');


var serviceAccount = require(process.cwd() + "\\farmweb-fe430-firebase-adminsdk-kta05-b31654ee77.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });
const firebaseApp = initializeApp(serviceAccount);


const db = getFirestore(firebaseApp);

getDb = () => {
  var col = collection(db,"products_full")
  getDocs(col).then((prodSnapshot) => {
    const products_full = prodSnapshot.docs.map((response) => response.data());
    res.json(products_full);
  })
  .catch((error) => {
    console.log(error);
  });
};

const handler = async (event) => {
  try {
    const subject = getDb();
    return {
      statusCode: 200,
      body: subject
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
