const mongoose = require("mongoose");
const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const DBConnection = async () => {
  var connect = await mongoose.connect("mongodb://localhost/codeit", config);
  console.log("Connected to db");
};

module.exports = DBConnection;
