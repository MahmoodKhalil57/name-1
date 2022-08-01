const { product } = require('./product.js');
const { db } = require('../utils/getDb.js');
const { collection, getDocs } = require('firebase/firestore');

class collectionWrapper {
  constructor(type, ...payloads) {
    this.docs = [];
    this.type = type;

    if (this.type == 'products') {
      if (payloads) {
        this.docs = this.setWrapper(payloads);
      }
    }
  }
  setWrapper(payloads) {
    let products_array = payloads.map((payload) => new product(payload));
    return products_array;
  }
  async updateCollection() {
    try {
      response = await this.docs.map((payload) => payload.setProduct());
      return response;
    } catch (ignore) { }
  }
  getClientarray() {
    return this.docs.map((product) => product.getClientJson());
  }

  async getCollectionFromDB(col_string) {
    try {
      if (this.type == 'products') {
        var col = collection(db, col_string);
        const snapshots = await getDocs(col);
        this.docs = snapshots.docs.map((payload) => (new product(payload, true)));
        return this.getClientarray()
      }
    } catch (error) {
      console.info('googleanalytics error!', error)
    }
  };
}

module.exports = { collectionWrapper }
