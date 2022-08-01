const { db } = require('./getDb.js');
const { collection, getDocs } = require('firebase/firestore');

const getCollection = async function (col_string) {
  try {
    var col = collection(db, col_string);
    const snapshots = await getDocs(col);
    return snapshots;
  } catch (ignore) {
  }
};

module.exports = { getCollection }
