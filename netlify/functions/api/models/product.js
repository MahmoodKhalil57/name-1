const { setDocs } = require('../utils/setDocs.js');

class product {
  constructor(payload, is_db) {
    this.info = {
      name: '',
      availabilty: '',
      title_two: '',
      product_code: '',
      nutrients: '',
      link: '',
      desc_one: '',
      shares: '',
      title_one: '',
      description: '',

      health_benefits: [],
      quanitity: [],
      color: [],
      prices: [],
      images: [],

      reviews: []

    }
    if (payload) {
      this.setModel(payload, is_db);
    }
  }

  setModel(payload, is_db) {
    try {
      if (is_db) {
        payload.data().name = payload.id;
        this.info = payload.data();
      }
      else {
        this.info = payload;
      }
    }
    catch (ignore) { }
  }

  getDBJson() {
    let cur_id = this.info.name;
    delete this.info.name;
    return {
      id: cur_id,
      data: this.info
    };
  }

  getClientJson() {
    return this.info;
  }

  async setDoc(db_name) {
    try {
      // console.log(db_name);
      let data = this.getDBJson();
      await setDocs(db_name, data.id, data.data);
    }
    catch (ignore) { }
    return this.getClientJson();
  }
}

module.exports = { product }
