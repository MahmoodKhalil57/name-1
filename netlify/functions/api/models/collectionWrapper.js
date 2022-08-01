const { getCollection } = require('../utils/getCollection.js');

class collectionWrapper {
  constructor(type, db_name, ...payloads) {
    this.docs = [];
    this.type = type;
    this.db_name = db_name;

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
      response = await this.docs.map((payload) => payload.setProduct(this.db_name));
      return response;
    } catch (ignore) { }
  }
  getClientarray() {
    return this.docs.map((product) => product.getClientJson());
  }

  async getCollectionFromDB() {
    try {
      let collection_obj = await getCollection(this.db_name);
      this.docs = collection_obj.docs.map((payload) => (new this.type(payload, true)));
      // console.log(this.getClientarray());
      return this.getClientarray()
    } catch (ignore) {
      // console.info('googleanalytics error!', error)
    }
  };
}

module.exports = { collectionWrapper }
