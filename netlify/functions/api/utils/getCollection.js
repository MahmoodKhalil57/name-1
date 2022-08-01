const { db } = require('./getDb.js');
const { collection, getDocs } = require('firebase/firestore');

const getCollection = async function (col_string) {
  try {
    var col = collection(db, col_string);
    const snapshots = await getDocs(col);
    const products_full = snapshots.docs.map((response) => response.data());
    return products_full;
  } catch (error) {
    console.info('googleanalytics error!', error)
  }
};

module.exports = { getCollection }
