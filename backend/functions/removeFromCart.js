const Product = require("../src/Models/Product");
const headers = require("../src/config/headers");

exports.handler = async function (event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;

  const { id } = JSON.parse(event.body);

  try {
    const products = await Product.findByIdAndUpdate(id, {
      inCart: false,
      updatedAt: Date.now(),
    });

    callback(null, {
      statusCode: 200,
      headers,
      body: JSON.stringify(products),
    });
  } catch (err) {
    callback(null, {
      statusCode: 500,
      headers,
      body: JSON.stringify("Remove product from cart err:", err),
    });
  }
};
