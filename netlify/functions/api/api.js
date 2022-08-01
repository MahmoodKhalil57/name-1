const { requestObj, responseObj } = require('./utils/helpers.js');
const { collectionWrapper } = require('./models/collectionWrapper.js');
const { product } = require('./models/product.js');
const { user } = require('./models/user.js');

const handler = async (event, context) => {

  let task, payload
  let request = requestObj(event.body)
  try {
    task = request.task
    payload = request.payload
  }
  catch (ignore) { }



  let response = "fail";
  switch (task) {
    case "getProducts":
      try {
        let db_name = "products_full";
        let products_obj = new collectionWrapper(product, db_name);
        // console.log(db_name);
        response = await products_obj.getCollectionFromDB();
        // console.log(db_name);
      } catch (ignore) { }
      break;
    case "setProducts":
      try {
        let db_name = "products_full";
        let products_obj = new collectionWrapper(product, db_name, payload);
        response = await products_obj.updateCollection();
      } catch (ignore) { }
      break;
    case "getUsers":
      try {
        let db_name = "users";
        let users_obj = new collectionWrapper(user, db_name);
        response = await users_obj.getCollectionFromDB();
        // console.log(users_obj.db_name);
      } catch (ignore) { }
      break;
  }
  return responseObj(200, response)


}

module.exports = { handler }
