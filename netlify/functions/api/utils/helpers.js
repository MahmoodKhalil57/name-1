const responseObj = (statusCode, data) => {
  try {
    return {
      statusCode: statusCode,
      headers: {
        /* Required for CORS support to work */
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    };
  }
  catch (ignore) { }
};

const requestObj = (data) => {
  try { return JSON.parse(data); }
  catch (ignore) { }
}

module.exports = { responseObj, requestObj }
