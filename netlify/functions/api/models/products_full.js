const { product } = require('./product.js');
const { db } = require('../utils/getDb.js');
const { collection, getDocs } = require('firebase/firestore');

class products_full {
  constructor(...payloads) {
    this.products = [];
    if (payloads) {
      this.products = payloads.map((payload) => new product(payload));
    }
  }
  getClientarray() {
    return this.products.map((product) => product.getClientJson());
  }

  async getCollection() {
    let col_string = "products_full";

    try {
      var col = collection(db, col_string);
      const snapshots = await getDocs(col);
      this.products = snapshots.docs.map((payload) => (new product(payload, true)));
      return this.getClientarray()
    } catch (error) {
      console.info('googleanalytics error!', error)
    }
  };

  async setProduct(payload) {
    try {
      let temp_product = new product();
      let product_obj = await temp_product.setProduct(payload);
      return product_obj;
    } catch (ignore) { }

  }
}

module.exports = { products_full }
