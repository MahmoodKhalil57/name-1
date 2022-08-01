const { db } = require('../utils/getDb.js');
const { collection, getDocs } = require('firebase/firestore');

class collectionWrapper {
  constructor(type, ...payloads) {
    this.docs = [];
    this.type = type;

    if (payloads) {
      this.docs = this.setWrapper(payloads);

    }
  }
  setWrapper(payloads) {
    let products_array = payloads.map((payload) => new this.type(payload));
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
      var col = collection(db, col_string);
      const snapshots = await getDocs(col);
      this.docs = snapshots.docs.map((payload) => (new this.type(payload, true)));
      return this.getClientarray()
    } catch (error) {
      console.info('googleanalytics error!', error)
    }
  };
}

module.exports = { collectionWrapper }
