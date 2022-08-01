const { db } = require('./getDb.js');
const { doc, setDoc } = require('firebase/firestore');

const setDocs = async function (col_string, doc_string, data) {
  try {
    let myDoc = doc(db, col_string, doc_string);
    await setDoc(myDoc, data);
  } catch (error) { }
};

module.exports = { setDocs }
