const { requestObj, responseObj } = require('./utils/helpers.js');
const { collectionWrapper } = require('./models/collectionWrapper.js');

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
        let products_obj = new collectionWrapper('products');
        response = await products_obj.getCollectionFromDB('products_full');
        // console.log(response);
      } catch (ignore) { }
      break;
    case "setProducts":
      try {
        let products_obj = new collectionWrapper('products', payload);
        response = await products_obj.updateCollection();
      } catch (ignore) { }
      break;
  }
  return responseObj(200, response)


}

module.exports = { handler }
