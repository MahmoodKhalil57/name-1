const { collectionWrapper } = require('./models/collectionWrapper.js');
const { product } = require('./models/product.js');
const { user } = require('./models/user.js');

async function getProducts() {
  let db_name = "products_full";
  let products_obj = new collectionWrapper(product, db_name);
  let response = await products_obj.getCollectionFromDB();
  return response;
}

async function setProduct(payload) {
  // console.log("payload");
  let db_name = "products_full";
  let products_obj = new collectionWrapper(product, db_name, payload);
  let response = await products_obj.updateCollection();
  return response;
}

async function getUsers() {
  let db_name = "users";
  let users_obj = new collectionWrapper(user, db_name);
  let response = await users_obj.getCollectionFromDB();
  return response;
}

module.exports = { getProducts, setProduct, getUsers }
