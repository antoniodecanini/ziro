const Product = require("../src/Models/Product");
const headers = require("../src/config/headers");

exports.handler = async function (event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;

  const { name } = event.queryStringParameters;

  try {
    const products = await Product.find({
      name: new RegExp(name, "i"),
    });

    callback(null, {
      statusCode: 200,
      headers,
      body: JSON.stringify({ products }),
    });
  } catch (err) {
    callback(null, {
      statusCode: 500,
      headers,
      body: JSON.stringify("Search products error:", err),
    });
  }
};
