const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  UserName: {
    type: String,
    maxlength: 15,
    required: true,
    immutable: true,
  },
  Password: {
    type: String,
    minlength: 6,
  },
  Name: String,
  Email: String,
  PhoneNo: Number,
  Age: Number,
});

module.exports = mongoose.model("User", UserSchema);
