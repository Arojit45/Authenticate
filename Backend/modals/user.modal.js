const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    fullname: {
      firstname: {
        type: String,
        unique: true,
        minlength: 3,
        require: true,
      },
      lastname: {
        type: String,
        minlength: 3,
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
      unique: true,
    },
  },
  { timestamps: true }
);

userSchema.methords.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECREAT, {
    expiresIn: "900",
  }); //15min
  return token;
};

userSchema.methods.comparepassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashpassword = async function (password) {
  const salt = bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const userModal = mongoose.model("User", userSchema);
module.exports = userModal;
