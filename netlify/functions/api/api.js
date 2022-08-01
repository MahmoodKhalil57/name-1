const { requestObj, responseObj } = require('./utils/helpers.js');
const { products_full } = require('./models/products_full.js');

const handler = async (event, context) => {

  let task, payload
  let request = requestObj(event.body)
  try {
    task = request.task
    payload = request.payload
  }
  catch (ignore) { }

  let products_obj = new products_full()

  let response = "fail";
  switch (task) {
    case "getProducts":
      response = await products_obj.getCollection();
      break;
    case "setProducts":
      try {
        response = await products_obj.setProduct(payload);
        break;
      } catch (ignore) { }
  }
  return responseObj(200, response)


}

module.exports = { handler }
