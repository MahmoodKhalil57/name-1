const { requestObj, responseObj } = require('./utils/helpers.js');
const { getProducts, setProduct, getUsers } = require('./logic.js');

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
        response = await getProducts();
        // console.log(db_name);
      } catch (ignore) { }
      break;
    case "setProduct":
      try {
        // console.log(payload);
        response = await setProduct(payload);
      } catch (ignore) { console.log(ignore) }
      break;
    case "getUsers":
      try {
        response = await getUsers();
        // console.log(users_obj.db_name);
      } catch (ignore) { }
      break;
  }
  return responseObj(200, response)


}

module.exports = { handler }
