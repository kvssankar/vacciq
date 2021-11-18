const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const server = require("http").createServer(app);

const socketIo = require("socket.io");
const { Queue } = require("./models/Queue");
const io = socketIo(server);
const { User } = require("./models/User");

app.use(express.json());

//keys
const db =
  process.env.MONGO_URI;
//connect to mongo
const connect = mongoose
  .connect(db, { useFindAndModify: false })
  .then(() => console.log("Mondo db connected...."))
  .catch((err) => console.log(err));

io.on("connection", (socket) => {
  socket.on("joinQ", ({ qid }) => {
    socket.join(qid);
    async function getData() {
      let q = await Queue.findById(qid).populate("line.user").exec();
      io.in(qid).emit("qdata", q);
    }
    getData();
  });
  socket.on("personRemoved", ({ qid, uid }) => {
    async function getData() {
      let user = await User.findById(uid);
      let q = await Queue.findById(qid).populate("line.user").exec();
      io.in(qid).emit("removedPerson", user);
      io.in(qid).emit("qdata", q);
    }
    getData();
  });
});

//routes
app.use("/api/user", require("./routes/user"));
app.use("/api/q", require("./routes/queue"));

if (process.env.NODE_ENV === "production") {
  const root = path.resolve(__dirname, "..", "client", "build");
  app.use(express.static(root));
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "..", "client", "build", "index.html")
    );
  });
}
const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`sever started in ${port}`));
