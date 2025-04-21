const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Fullname: {
    firstname: {
      type: String,
      require: true,
    },
    lastname: {
      type: String,
      require: true,
    },
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const userModal = mongoose.model("user", userSchema);
module.exports = userModal;
