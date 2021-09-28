const router = require("express").Router();
const bc = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config");
const { User } = require("../models/User");
const { Queue } = require("../models/Queue");
const verify = require("../verify");
const { default: axios } = require("axios");

router.post("/token", verify, async (req, res) => {
  let user = await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: { notify_id: req.body.token },
    },
    { new: true }
  );
  res.json("done");
});

router.post("/addloc", verify, async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: { latitude: req.body.latitude, longitude: req.body.longitude },
    },
    { new: true }
  );
  res.json(user);
});

router.post("/directions", async (req, res) => {
  const { user_id, center_id } = req.body;
  const owner = await User.findOne({ center_id: center_id });
  const user = await User.findById(user_id);
  axios
    .get(
      `https://api.mapbox.com/directions-matrix/v1/mapbox/driving/${user.longitude},${user.latitude};${owner.longitude},${owner.latitude}?approaches=curb;curb&access_token=pk.eyJ1Ijoic2Fua2Fya3ZzIiwiYSI6ImNrbzE3cG5tZjA3c3Ayb2xiazJmaHR2ZDkifQ.lr9WJ0GlGHmHp1dsFhyGXA`
    )
    .then((data) => {
      res.json(data.data.durations[0][1]);
    })
    .catch((err) => console.log(err));
});

router.post("/register", async (req, res) => {
  var phone = req.body.phone;
  var name = req.body.name;
  var password = req.body.password;
  var email = req.body.email;
  let user = await User.findOne({ phone });
  if (phone.length < 10)
    return res
      .status(400)
      .json({ status: 1, mssg: "Please enter a valid phone number" });
  if (password.length < 6)
    return res.status(400).json({
      status: 1,
      mssg: "Password length should me more than 6 characters",
    });
  if (name.length < 1)
    return res.status(400).json({
      status: 1,
      mssg: "A name is required!",
    });
  if (user)
    return res.status(400).json({
      status: 1,
      mssg: "User has already been registered, Please use different Phone Number",
    });

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
  const { phone, password } = req.body;
  const userExist = await User.findOne({ phone: phone });
  if (!userExist)
    return res.status(400).json({ status: 1, mssg: "User does not exists" });
  const validPassword = await bc.compare(password, userExist.password);
  if (!validPassword)
    return res
      .status(500)
      .json({ status: 1, mssg: "Wrong Password, please try again" });
  const token = jwt.sign({ _id: userExist._id }, config.jwt_secret);
  return res.json({ token, user: userExist });
});

//getting into queue
router.post("/reducedlogin", async (req, res) => {
  const { phone, name, qid } = req.body;
  let userExist = await User.findOne({ phone: phone });
  if (!userExist)
    userExist = await new User({ name, phone, queue_id: qid }).save();
  await Queue.findByIdAndUpdate(qid, {
    $push: { line: { user: userExist._id } },
  });
  let user = await User.findByIdAndUpdate(
    userExist._id,
    {
      $set: { queue_id: qid, enter: new Date() },
    },
    { new: true }
  );
  const token = jwt.sign({ _id: userExist._id }, config.jwt_secret);
  return res.json({ token, user });
});

router.post("/getloc", verify, async (req, res) => {
  const user = await User.findById(req.body.user_id);
  axios
    .post(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/chester.json?proximity=${user.longitude},${user.latitude}&access_token=pk.eyJ1Ijoic2Fua2Fya3ZzIiwiYSI6ImNrbzE3cG5tZjA3c3Ayb2xiazJmaHR2ZDkifQ.lr9WJ0GlGHmHp1dsFhyGXA`
    )
    .then((data) => {
      res.json(data.data.features[0].place_name);
    });
});

router.get("/news/:page", async (req, res) => {
  const { page } = req.params;
  let responseData;
  await axios
    .get(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=20564cb3ab3d4d0682b73a2d34d24485&page=" +
        page +
        "&pageSize=10"
    )
    .then((data) => (responseData = data.data))
    .catch((err) => console.log(err));
  res.json(responseData);
});

module.exports = router;
