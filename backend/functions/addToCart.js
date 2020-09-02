const Product = require("../src/Models/Product");
const headers = require("../src/config/headers");

exports.handler = async function (event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;

  const { id } = JSON.parse(event.body);

  try {
    const products = await Product.findByIdAndUpdate(id, {
      inCart: true,
      updatedAt: Date.now(),
    });

    callback(null, {
      statusCode: 200,
      headers,
      body: JSON.stringify("Produto adicionado com sucesso"),
    });
  } catch (err) {
    callback(null, {
      statusCode: 500,
      headers,
      body: JSON.stringify("Add product to cart error:", err),
    });
  }
};
