const mongoose = require("mongoose");

const Connection = mongoose.connect(
  "mongodb+srv://ziro-user:ziro-password@mycluster.xj9o6.gcp.mongodb.net/ziro-test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

module.exports = Connection;
