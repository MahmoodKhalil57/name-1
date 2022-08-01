const { db } = require('./getDb.js');

const handler = async (event) => {
  const result = await getProducts("products_full");
  console.log(!!result);
  return {
    statusCode: 200,
    body: JSON.stringify(result)
  }

}

module.exports = { handler }
