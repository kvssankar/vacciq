const router = require("express").Router();
const bc = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config");
const { User } = require("../models/User");
const { Queue } = require("../models/Queue");

router.post("/register", async (req, res) => {
  let user = await User.findOne({ phone: req.body.phone });
  if (user)
    return res
      .status(400)
      .json({ status: 1, mssg: "Use different mobile number" });
  const salt = await bc.genSalt(10);
  const hashed = await bc.hash(req.body.password, salt);
  user = new User({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    password: hashed,
    sex: req.body.sex,
  });
  const newUser = await user.save();
  const token = jwt.sign({ _id: newUser._id }, config.jwt_secret);
  res.json({ user: newUser, token });
});

router.post("/login", async (req, res) => {
  console.log(req.body);
  const { phone, password } = req.body;
  const userExist = await User.findOne({ phone: phone });
  if (!userExist)
    return res.status(500).json({ status: 1, mssg: "User does not exists" });
  const validPassword = await bc.compare(password, userExist.password);
  if (!validPassword)
    return res.status(500).json({ status: 1, mssg: "Password does not match" });
  const token = jwt.sign({ _id: userExist._id }, config.jwt_secret);
  console.log(token);
  return res.json({ token, user: userExist });
});

router.post("/reducedlogin", async (req, res) => {
  const { phone, name, qid } = req.body;
  let userExist = await User.findOne({ phone: phone });
  if (!userExist) userExist = await User({ name, phone, queue_id: qid }).save();
  await Queue.findByIdAndUpdate(qid, {
    $push: { line: { user: userExist._id } },
  });
  const token = jwt.sign({ _id: userExist._id }, config.jwt_secret);
  return res.json({ token, user: userExist });
});

module.exports = router;
