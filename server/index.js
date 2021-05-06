const { default: axios } = require("axios");
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
  "mongodb+srv://kvssankar:u4I69QktIvLwOk7H@cluster1.uacfw.mongodb.net/vacciq?retryWrites=true&w=majority";

//connect to mongo
const connect = mongoose
  .connect(db, { useFindAndModify: false })
  .then(() => console.log("Mondo db connected...."))
  .catch((err) => console.log(err));

const notify = async (notify_id, title, mssg, url = null) => {
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization:
        "key=AAAA17rD_-Q:APA91bE92fSSSJZO9LmGtShC8v43wiAUldddG-Dt572cP9nciVmDJ4CmHJiM5yGMsQOdC-EXKAm5C8FjDLrnd4eG62NX0RDnTzXJ5MJDOAW6p8vrnjqj0aqpKmrKpfCN9SlTD1NtYH3J",
    },
  };
  console.log("started notify");
  axios
    .post(
      "https://fcm.googleapis.com/fcm/send",
      {
        registration_ids: [notify_id],
        notification: {
          sound: "default",
          body: mssg,
          title: title,
          image: url,
          icon:
            "https://res.cloudinary.com/sankarkvs/image/upload/v1619902128/vacciq_logo_1_1_exhsif.svg",
          content_available: true,
          priority: "high",
        },
        data: {
          sound: "default",
          body: mssg,
          title: title,
          image: url,
          icon:
            "https://res.cloudinary.com/sankarkvs/image/upload/v1619902128/vacciq_logo_1_1_exhsif.svg",
          content_available: true,
          priority: "high",
        },
      },
      config
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

io.on("connection", (socket) => {
  //console.log("New client connected");
  // socket.on("getdata", ({ id }) => {
  //   let user;
  //   async function getData() {
  //     user = await User.findById(id);
  //     socket.emit("userdata", user);
  //   }
  //   getData();
  // });
  socket.on("getq", ({ qid, uid }) => {
    console.log("started", qid, uid);
    let q;
    async function getData() {
      q = await Queue.findById(qid).populate("line.user").exec();
      var qno;
      var u;
      console.log("user id: ", uid);
      for (var i = 0; i < q.line.length; i++) {
        console.log(q.line[i].user._id);
        if (q.line[i].user._id == uid) {
          console.log("yayaya");
          qno = i + 1;
          u = q.line[i].user;
          break;
        }
      }
      //console.log(q.line);
      // if (qno <= q.limit && qno <= 5) {
      await notify(
        u.notify_id,
        `You are on ${qno} position`,
        `Be ready your turn is coming soon<br> Your estimated time: 10mins`
      );
      // }
      if (qno > q.limit && qno - limit <= 5) {
        await notify(
          u.notify_id,
          `You are on ${qno} position`,
          `Be ready your turn in queue is comming soon<br> Your estimated time :5mins<br> Your approx reaching time:10mins`
        );
        //TODO:Add reaching time also and estimated time also
      }
      socket.emit("qdata", q);
    }
    setInterval(() => {
      getData();
    }, [10000]);
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
