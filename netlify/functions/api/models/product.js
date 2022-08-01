const { setDocs } = require('../utils/setDocs.js');

class product {
  constructor(payload, is_db) {
    this.name
    this.availabilty
    this.title_two
    this.product_code
    this.nutrients
    this.link
    this.desc_one
    this.shares
    this.title_one
    this.description

    this.health_benefits
    this.quanitity
    this.color
    this.prices
    this.images

    this.reviews
    if (payload) {
      this.setData(payload, is_db);
    }
  }
  getDBJson() {
    return {
      id: this.name,
      data: {
        availabilty: this.availabilty,
        title_two: this.title_two,
        product_code: this.product_code,
        nutrients: this.nutrients,
        link: this.link,
        desc_one: this.desc_one,
        shares: this.shares,
        title_one: this.title_one,
        description: this.description,

        health_benefits: this.health_benefits,
        quanitity: this.quanitity,
        color: this.color,
        prices: this.prices,
        images: this.images,
        reviews: this.reviews
      }
    };
  }

  getClientJson() {
    return {
      name: this.name,
      availabilty: this.availabilty,
      title_two: this.title_two,
      product_code: this.product_code,
      nutrients: this.nutrients,
      link: this.link,
      desc_one: this.desc_one,
      shares: this.shares,
      title_one: this.title_one,
      description: this.description,

      health_benefits: this.health_benefits,
      quanitity: this.quanitity,
      color: this.color,
      prices: this.prices,
      images: this.images,
      reviews: this.reviews
    }
  }

  setData(payload, is_db) {

    try {
      if (is_db) {
        this.name = payload.id;
        payload = payload.data();
      }
      else {
        this.name = payload.name;
      }

      this.availabilty = payload.availabilty;
      this.title_two = payload.title_two;
      this.product_code = payload.product_code;
      this.nutrients = payload.nutrients;
      this.link = payload.link;
      this.desc_one = payload.desc_one;
      this.shares = payload.shares;
      this.title_one = payload.title_one;
      this.description = payload.description;

      this.health_benefits = payload.health_benefits;
      this.quanitity = payload.quanitiy;
      this.color = payload.color;
      this.prices = payload.prices;
      this.images = payload.images;

      this.reviews = payload.reviews;
    }
    catch (ignore) { }
  }

  async setProduct() {
    try {
      let data = this.getDBJson();
      await setDocs("products_full", data.id, data.data);
    }
    catch (ignore) { }
    return this.getClientJson();
  }
}

module.exports = { product }
