const Product = require("../src/Models/Product");
const headers = require("../src/config/headers");

exports.handler = async function (event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;

  const { name, image, price } = JSON.parse(event.body);

  try {
    const create = await new Product({
      name,
      image,
      price,
    }).save();

    callback(null, {
      statusCode: 200,
      headers,
      body: JSON.stringify(create),
    });
  } catch (err) {
    callback(null, {
      statusCode: 500,
      headers,
      body: JSON.stringify("Create product error:", err),
    });
  }
};
