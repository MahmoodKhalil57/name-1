const { setDocs } = require('../utils/setDocs.js');

class user {
  constructor(payload, is_db) {
    this.db_name = "users";

    this.userId = "";
    this.username = "";
    this.firstName = "";
    this.lastName = "";
    this.email = "";
    this.dateCreated = "";
    this.lastLogin = "";

    this.reviews = [];
    this.orders = [];
    this.cart = [];
    this.visits = [];

    this.isAdmin = false;
    if (payload) {
      this.setData(payload, is_db);
    }
  }
  getDBJson() {
    return {
      id: this.userId,
      data: {
        Username: this.Username,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        dateCreated: this.dateCreated,
        lastLogin: this.lastLogin,

        reviews: this.reviews,
        orders: this.orders,
        cart: this.cart,
        visits: this.visits,

        isAdmin: this.isAdmin
      }
    };
  }

  getClientJson() {
    return {
      username: this.username,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      dateCreated: this.dateCreated,
      lastLogin: this.lastLogin,

      reviews: this.reviews,
      orders: this.orders,
      cart: this.cart,
      visits: this.visits,

      isAdmin: this.isAdmin,
    }
  }

  setData(payload, is_db) {

    try {
      if (is_db) {
        this.username = payload.userId;
        payload = payload.data();
      }
      else {
        this.username = payload.username;
      }

      this.firstName = payload.firstName;
      this.lastName = payload.lastName;
      this.email = payload.email;
      this.dateCreated = payload.dateCreated;
      this.lastLogin = payload.lastLogin;

      this.reviews = payload.reviews;
      this.orders = payload.orders;
      this.cart = payload
      this.visits = payload

      this.isAdmin = payload;
    }
    catch (ignore) { }
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
