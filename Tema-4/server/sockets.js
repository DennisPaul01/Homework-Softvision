const users = [];

function listen(io) {
  io.on("connection", (socket) => {
    let room = "mainRoom";

    console.log(`a user conected as ${socket.id}`);
    socket.emit("connected", socket.id);
    socket.emit("users", users);

    socket.on("dataUser", (data) => {
      socket.join(room);
      io.in(room).emit("dataUser", data);
    });

    socket.on("allUsers", (data) => {
      users.push(data);
      io.in(room).emit("allUsers", users);
    });

    socket.on("messageUser", (data) => {
      io.in(room).emit("messageUser", data);
    });

    socket.on("newNotifaction", (data) => {
      socket.broadcast.emit("newNotifaction", data);
    });

    socket.on("disconnect", (reson) => {
      console.log(`Client ${socket.id} disconected ${reson} ${room}`);
      socket.leave(room);
    });
  });
}
module.exports = { listen };
