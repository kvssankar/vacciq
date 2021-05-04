const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
app.use(express.json());
app.use(express.static("uploads"));
const server = require("http").createServer(app);

const socketIo = require("socket.io");
const { Queue } = require("./models/Queue");
const io = socketIo(server);
const { User } = require("./models/User");

//keys
const db =
  "mongodb+srv://kvssankar:u4I69QktIvLwOk7H@cluster1.uacfw.mongodb.net/vacciq?retryWrites=true&w=majority";

//connect to mongo
const connect = mongoose
  .connect(db, { useFindAndModify: false })
  .then(() => console.log("Mondo db connected...."))
  .catch((err) => console.log(err));

io.on("connection", (socket) => {
  console.log("New client connected");
  socket.on("getdata", ({ id }) => {
    let user;
    async function getData() {
      user = await User.findById(id);
      socket.emit("userdata", user);
    }
    getData();
  });
  socket.on("getq", ({ id }) => {
    let q;
    async function getData() {
      q = await Queue.findById(id);
      socket.emit("qdata", q);
    }
    getData();
  });
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

//routes
app.use("/api/user", require("./routes/user"));
app.use("/api/q", require("./routes/queue"));
// app.use("/api/member", require("./routes/member"));
// app.use("/api/meeting", require("./routes/meetings"));
// app.use("/api/event", require("./routes/events"));
// app.use("/api/role", require("./routes/roles"));
// app.use("/api/act", require("./routes/act"));
// app.use("/api/mail", require("./routes/mail"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "..", "client", "build", "index.html")
    );
  });
}

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`sever started in ${port}`));
