const { initializeApp } = require('firebase/app');
const { getFirestore , collection , getDocs  } = require('firebase/firestore');


var serviceAccount = require("./farmweb-fe430-firebase-adminsdk-kta05-b31654ee77.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });
const firebaseApp = initializeApp(serviceAccount);


const db = getFirestore(firebaseApp);

async function getDb(){
  var col = collection(db,"products_full");
  await getDocs(col).then((prodSnapshot) => {
    const products_full = prodSnapshot.docs.map((response) => response.data());
    return products_full;
  });
};

async function test(){
  await setTimeout(resolve, ms);
  return "hmm";
}

const handler = async (event) => {
  const result = await test()
  return {
  statusCode: 200,
  body: JSON.stringify(result)
  }

}

module.exports = { handler }
