const { setDocs } = require('../utils/setDocs.js');

class user {
  constructor(payload, is_db) {
    this.info = {
      Username: '',
      firstName: '',
      lastName: '',
      email: '',
      dateCreated: '',
      lastLogin: '',

      reviews: [],
      orders: [],
      cart: [],
      visits: [],

      isAdmin: false
    }
    if (payload) {
      this.setModel(payload, is_db);
    }
  }

  setModel(payload, is_db) {
    try {
      if (is_db) {
        payload.data().username = payload.userId;
        this.info = payload.data();
      }
      else {
        this.info = payload;
      }

    }
    catch (ignore) { }
  }

  getDBJson() {
    let cur_id = this.info.Username;
    delete this.info.name;
    return {
      id: cur_id,
      data: this.info
    };
  }

  getClientJson() {
    return this.info;
  }

  async setUser() {
    try {
      let data = this.getDBJson();
      await setDocs(this.db_name, data.id, data.data);
    }
    catch (ignore) { }
    return this.getClientJson();
  }
}

module.exports = { user }
