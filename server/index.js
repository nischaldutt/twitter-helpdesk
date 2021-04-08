const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send({ status: 200, msg: "response received" });
});

io.on("connection", (socket) => {
  console.log("user connected");
  socket.on("message", ({ name, message }) => {
    io.emit("message", { name, message });
  });
});

app.listen(process.env.PORT || 3001, () => {
  console.log("server online");
});
