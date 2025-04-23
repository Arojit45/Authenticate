const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const registercontroller = require("../controllers/user.controller");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage({ message: "Invalid email" }),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage({ message: "firstname must be 3 character" }),
    body("password")
      .isLength({ min: 6, max: 6 })
      .withMessage({ message: "password must be 6 char" }),
  ],
  registercontroller
);

router.post("/login", [
  body("email").isEmail().withMessage({ message: "Invalid email" }),
  body("password")
    .isLength({ min: 6, max: 6 })
    .withMessage({ message: "password must be 6 char" }),
]);
