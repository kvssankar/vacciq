const router = require("express").Router();
const config = require("config");
const bc = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models/User");
var generator = require("generate-password");
var nodemailer = require("nodemailer");

//login email, otp comes thats their password
router.post("/register", async (req, res) => {
  var password = generator.generate({
    length: 10,
    numbers: true,
  });
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.json({ status: 1, mssg: "Email not found" });
  user = await User.findOneAndUpdate(
    { email: req.body.email },
    { password: password },
    { new: true }
  );
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "miniorganisation@gmail.com",
      pass: "sankarvishnu23",
    },
  });

  var mailOptions = {
    from: "miniorganisation@gmail.com",
    to: req.body.email,
    subject: "VacciQ Password",
    text: "New Password : " + password,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      return res.json({ status: 1, mssg: "Something went wrong" });
    } else {
      return res.json({
        status: 0,
        mssg: "Sent email, please check your inbox",
      });
    }
  });
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
