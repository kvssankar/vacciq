const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
app.use(express.json());
app.use(express.static("uploads"));
const server = require("http").createServer(app);

//keys
const db = "";

//connect to mongo
const connect = mongoose
  .connect(db, { useFindAndModify: false })
  .then(() => console.log("Mondo db connected...."))
  .catch((err) => console.log(err));

//routes
// app.use("/api/club", require("./routes/club"));
// app.use("/api/member", require("./routes/member"));
// app.use("/api/meeting", require("./routes/meetings"));
// app.use("/api/event", require("./routes/events"));
// app.use("/api/role", require("./routes/roles"));
// app.use("/api/act", require("./routes/act"));
// app.use("/api/mail", require("./routes/mail"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`sever started in ${port}`));
