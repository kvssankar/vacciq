const router = require("express").Router();
const bc = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config");
const { User } = require("../models/User");

router.post("/register", async (req, res) => {
  let user = await User.findOne({ phone: req.body.phone });
  if (user)
    return res
      .status(400)
      .json({ status: 1, mssg: "Use different mobile number" });
  user = new User({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
    sex: req.body.sex,
  });
  const newUser = await user.save();
  const token = jwt.sign({ _id: newUser._id }, config.jwt_secret);
  res.json({ user: newUser, token });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userExist = await User.findOne({ email: email });
  if (!userExist)
    return res.status(500).json({ status: 1, mssg: "User does not exists" });
  const validPassword = await bc.compare(password, userExist.password);
  if (!validPassword)
    return res.status(500).json({ status: 1, mssg: "Password does not match" });
  const token = jwt.sign({ _id: userExist._id }, config.jwt_secret);
  return res.json({ token, user: userExist });
});

module.exports = router;
